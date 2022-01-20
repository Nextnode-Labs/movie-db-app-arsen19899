import { Link } from 'react-router-dom';


type Props = {
  movieTitle : string
}

const BreadCrumb: React.FC<Props> = ({  movieTitle  }) => {

  return (
      <div className="container border-top pt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link className='text-decoration-none text-dark' to='/'>Home</Link></li>
            <li className="breadcrumb-item">{movieTitle}</li>
          </ol>
        </nav>
      </div>
  )
}

export default BreadCrumb
