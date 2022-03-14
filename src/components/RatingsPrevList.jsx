import React, { Component } from 'react';

class PrevList extends Component {
  render() {
    const prevRatings = JSON.parse(localStorage.getItem('ratings'));

    return (
      <div>
        <h1>Avaliações:</h1>
        {prevRatings.map((rating, index) => (
          <div key={ index }>
            <h2>{rating.email}</h2>
            <h2>{rating.rating}</h2>
            <p>{rating.review}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default PrevList;
