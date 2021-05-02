import React from 'react';
import './MovieList.scss';

const movie = (props: any) => (
  <>
      <div className="movie-component">
        <div className="movie-details">
          <h1 className="movie-title">{props.name}</h1>
          <p className="movie-overview">
            <strong>Synopsis:</strong> {props.price}
          </p>
        </div>
      </div>
  </>
);

export default movie;