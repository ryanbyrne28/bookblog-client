import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
  const book = props.book;

  return (
    <div className='card-container'>
      <img
        src='https://static01.nyt.com/images/2023/03/23/multimedia/23bookbans-mfvl/23bookbans-mfvl-videoSixteenByNine3000.jpg'
        alt='Books'
        height={300}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;