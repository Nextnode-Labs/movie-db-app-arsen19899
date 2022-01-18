import { Wrapper, Content, Text } from './MovieInfo.styles'
import moment from 'moment';
import Rate from '../Rate'
import API from '../../API'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import { MovieState } from '../../hooks/useMovieFetch'
import { Context } from '../../context'
import { useContext } from 'react'

type Props = {
  movie: MovieState
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  const [user]: any = useContext(Context)
  const handleRating = async (value: string) => {
    await API.rateMovie(user.sessionId, movie.id, parseInt(value))
  }

  return (
      <Wrapper backdrop={movie.backdrop_path}>
        <div className='container'>
          <div className='row'>
            <h2 className='fs-2 text-white p-5'>
              {movie.original_title && movie.original_title !== movie.title
                  ? `${movie.original_title} (${movie.title})`
                  : movie.title}
            </h2>
            <div className='col-md-3 col-sm-6 col-xs-12 position-relative text-decoration-none'>
              { movie.poster_path!=null ?(

                      <img className="img-fluid shadow p-3 mb-5 bg-white rounded" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>):
                  (
                      <img className="img-fluid shadow p-3 mb-5 bg-white rounded" src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img>)
              }
            </div>
            <div className='col-md-8 col-sm-6 col-xs-12'>
              <p className='text-white'>{movie.overview}</p>
              <div className=''>
                <div className='text-light'>
                  <h4>Original Release</h4>
                  <p>
                    {movie.release_date
                        ? moment(movie.release_date).format('MMMM D, YYYY')
                        : 'N/A'}
                  </p>
                </div>
                <div className='text-light'>
                  <h4>Running Time</h4>
                  <p>
                    {movie.runtime === 0 || !movie.runtime
                        ? 'N/A'
                        : `${movie.runtime} mins`}
                  </p>
                </div>
                <div className='text-light'>
                  <h4>Budget</h4>
                  {movie.budget === 0 || !movie.budget
                      ? 'N/A'
                      : `$${Number(movie.budget).toLocaleString()}`}
                </div>
                <div className='text-light'>
                  <h4>Revenue</h4>
                  <p>
                    {movie.revenue === 0 || !movie.revenue
                        ? 'N/A'
                        : `$${Number(movie.revenue).toLocaleString()}`}
                  </p>
                </div>
                <div className='text-light'>
                  <h4>Voting Average</h4>
                  <p>{movie.vote_average * 10}%</p>
                </div>
                <div className='text-light'>
                  <h4>Genres</h4>
                  <div>
                    {movie.genres
                        ? movie.genres.map(genre => (
                            <span  className='btn btn-outline-warning m-1' key={genre.id}>{genre.name}</span>
                        ))
                        : 'N/A'}
                  </div>
                </div>
                {user && (
                <div className='text-light'>
                  <h4>Rate Movie</h4>
                  <div>
                    <Rate callback={handleRating} />
                  </div>
                </div>
                )}

              </div>
            </div>


          </div>
        </div>
      </Wrapper>
  )
}

export default MovieInfo
