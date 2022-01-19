import { IMAGE_BASE_URL, POSTER_SIZE, SITE_NAME } from '../config'
import Grid from './Grid'
import Spinner from './Spinner'
import BreadCrumb from './BreadCrumb'
import MovieInfo from './MovieInfo'
import Actor from './Actor'

import { useMovieFetch } from '../hooks/useMovieFetch'

import { useParams } from 'react-router'


const Movie: React.FC = () => {
  let { movieId } = useParams()

  const movieIdP = movieId ? movieId : ''

  const { state: movie, loading, error } = useMovieFetch(movieIdP)


  if (loading && !error) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />

        <Grid header='Actors'>
            {movie.actors.map(actor => (
                <Actor
                    id={actor.credit_id}
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={
                        actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : `https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`
                    }
                />
            )).slice(0, 8)}
        </Grid>
    </>
  )
}

export default Movie
