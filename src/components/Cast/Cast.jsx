import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Actor, Img, Li } from './Cast.styled';
import defaulProfileImg from '../../images/default.profile.png';
import { getCast } from 'components/requests';

export const Cast = () => {
  console.log('CAST');

  const [cast, setCast] = useState([]);
  const movieId = useParams().id;

  useEffect(() => {
    if (cast.length !== 0) {
      return;
    }
    getCast(movieId, setCast);
  }, [movieId, cast]);

  return (
    <ul>
      {cast.length !== 0 &&
        cast.map(actor => (
          <Li key={actor.id}>
            <Img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : defaulProfileImg
              }
              alt="profile img"
            />
            <div>
              <Actor>{actor.name}</Actor>
              <p>Character: {actor.character}</p>
            </div>
          </Li>
        ))}
    </ul>
  );
};
