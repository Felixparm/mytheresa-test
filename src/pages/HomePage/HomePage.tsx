import { useNavigate } from 'react-router';
import { useMovies } from '../../services/useMovies';
import PageTemplate from '../../components/templates/PageTemplate';
import Card from '../../components/molecules/Card';
import CardLoading from '../../components/molecules/Card/Card.loading';
import Carousel from '../../components/organisms/Carousel';

const HomePage = () => {
  const navigate = useNavigate();
  const { data: nowPlayingMovies, isLoading: nowPlayingLoading } = useMovies('now_playing');
  const { data: popularMovies, isLoading: popularLoading } = useMovies('popular');
  const { data: topRatedMovies, isLoading: topRatedLoading } = useMovies('top_rated');
  
  const createMovieCards = (movies: any[]) => 
    movies?.map((movie) => (
      <Card 
        key={movie.id}
        voteAverage={movie.vote_average}
        voteNumber={movie.vote_count}
        url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        onClick={() => {
          navigate(`/movie/${movie.id}`);
        }}
      />
    )) || [];

  const createLoadingCards = (count: number) => 
    Array.from({ length: count }, (_, i) => <CardLoading key={i} />);

  return (
    <PageTemplate>
      <h2>Now Playing</h2>
      <Carousel isLoading={nowPlayingLoading}>
        {nowPlayingLoading ? createLoadingCards(6) : createMovieCards(nowPlayingMovies?.results || [])}
      </Carousel>
      
      <h2>Popular Movies</h2>
      <Carousel isLoading={popularLoading}>
        {popularLoading ? createLoadingCards(6) : createMovieCards(popularMovies?.results || [])}
      </Carousel>
      
      <h2>Top Rated</h2>
      <Carousel isLoading={topRatedLoading}>
        {topRatedLoading ? createLoadingCards(6) : createMovieCards(topRatedMovies?.results || [])}
      </Carousel>
    </PageTemplate>
  );
};

export default HomePage;