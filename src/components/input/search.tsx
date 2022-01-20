import React, { useState, useEffect } from 'react'
import API, { Movies, Movie } from '../../API'

import { Link } from 'react-router-dom'
import moment from 'moment';

const Search: React.FC = () => {
    const [state, setState] = useState('')
    const [results, setResults] = useState<Movie[]>([])
    const [showResults, setShowResults] = useState(0)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (state?.trim()) {
            timer = setTimeout(() => {
                API.searchMovie(state).then((data: Movies) => {
                    setResults(data.results)
                })
            }, 100)
        } else setResults([])
        return () => clearTimeout(timer)
    }, [state])
    useEffect(() => {}, [showResults])

    return (
        <div className='ms-5 me-5'>
            <input
                className='form-control'
                type="search"
                placeholder="Search..."
                onChange={(e) => setState(e.currentTarget.value)}
                onFocus={(e) => {
                    setShowResults((prev) => prev + 1)
                    e.currentTarget.setSelectionRange(
                        e.currentTarget.value.length,
                        e.currentTarget.value.length
                    )
                }}
            />
            {showResults > 0 && results.length > 0 && (
                <ul className='results position-absolute shadow bg-white rounded w-auto p-3 list-unstyled'>
                    {results.map((movie) => (
                        <li className='p-1'>
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            onClick={() => {
                                setState('')
                            }}
                        >

                                { movie.poster_path!=null ?(
                                        <img className="rounded" width= '50'  height = '50' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>):
                                    (
                                        <img className="img-thumbnail rounded" width= '50'  height = '50' src={`https://imgholder.ru/600x600/8493a8/adb9ca&text=no+poster&font=kelson`}></img>)
                                }
                            <span className='p-1 text-secondary'>
                {movie.title}
                                <span className='m-1 pe-1 pb-1 text-warning bg-dark rounded'>{` (${
                                    movie.release_date
                                        ?moment(movie.release_date).format('YYYY')
                                        :'N/A'
                                })`}</span>
              </span>

                        </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search