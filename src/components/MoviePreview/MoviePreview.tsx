import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

interface MoviePreviewProps {
  movie: Movie;
}

const MoviePreview = ({ movie }: MoviePreviewProps) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return (
    <div className={styles.movieCard} onClick={goToMovieDetails}>
      <img className="image" src={POSTER_URL_PREFIX + movie.poster_path}></img>
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MoviePreview;
