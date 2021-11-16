import React from 'react';
import { Link } from 'react-router-dom';

const Paginator = ({
  basePath,
  prevPageId,
  nextPageId,
  totalPages,
  totalResults
}) => (
  <div className="row">
    <div className="col-md-10 col-sm-6 col-xs-12">
      <p className="">{`Currently on page ${+prevPageId +
        1} of ${totalPages}`}</p>
      <p className="">{`(${totalResults} total results)`}</p>
    </div>

    <div className="col-md-2 col-sm-6 col-xs-12">
      {prevPageId > 0 ? (
        <Link className="" to={`${basePath}${prevPageId}`}>
          <span className="fs-3 translate-middle badge border border-light rounded-circle bg-danger p-2" >←</span>
        </Link>
      ) : null}
      {nextPageId <= totalPages ? (
        <Link className="" to={`${basePath}${nextPageId}`}>
         <span className="fs-3 translate-middle badge border border-light rounded-circle bg-danger p-2">→</span>
        </Link>
      ) : null}
    </div>
  </div>
);

export default Paginator;

