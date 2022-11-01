import { getReviews } from 'components/requests';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { H4, Li, Review } from './Reviews.styled';

const Reviews = () => {
  //   console.log('REVIEWS');
  const [reviews, setReviews] = useState([]);
  const movieId = useParams().id;

  useEffect(() => {
    const controller = new AbortController();
    getReviews(movieId, setReviews, controller);

    return () => controller.abort();
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => (
            <Li key={review.id}>
              <H4>{review.author}</H4>
              <Review>{review.content}</Review>
            </Li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
