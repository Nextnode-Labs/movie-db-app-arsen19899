import { useEffect, useState } from 'react'
// API
import API, { Movie, Cast, Crew,Genr } from '../API'
import { isPersistedState } from '../helpers'

export type MovieState = Movie & { actors: Cast[]; directors: Crew[];genres:Genr[]}

export const useMovieFetch = (movieId: string) => {
  const [state, setState] = useState<MovieState>({} as MovieState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true)
        setError(false)
        const movie = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        // Get directors
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        )
        const genres = movie.genres
        setState({
          ...movie,
          actors: credits.cast,
          directors,
          genres,
        })
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }

    const sessionState = isPersistedState('movie-' + movieId)
    if (sessionState) {
      setState(sessionState)
      setLoading(false)
      return
    }

    fetchMovie()
  }, [movieId])

  useEffect(() => {
    sessionStorage.setItem('movie-' + movieId, JSON.stringify(state))
  }, [movieId, state])

  useEffect(() => {
    if (error) sessionStorage.removeItem('movie-' + movieId)
  }, [movieId, error])

  return { state, loading, error }
}
