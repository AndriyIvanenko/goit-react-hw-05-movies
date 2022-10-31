import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Actor, Character, Img, Li } from './Cast.styled';
import defaulProfileImg from '../../images/default.profile.png';
import { getCast } from 'components/requests';

const Cast = () => {
  //   console.log('CAST');

  const [cast, setCast] = useState([]);

  const movieId = useParams().id;

  useEffect(() => {
    const controller = new AbortController();
    getCast(movieId, setCast, controller);

    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 ? (
        cast.map(actor => (
          <ul>
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
                <Character>Character: {actor.character}</Character>
              </div>
            </Li>
          </ul>
        ))
      ) : (
        <p>We don't have cast list for this movie.</p>
      )}
    </>
  );
};

export default Cast;
