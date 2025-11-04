import { useMovies } from '../../services/useMovies';
import PageTemplate from '../../components/templates/PageTemplate';
import Card from '../../components/molecules/Card';
import Carousel from '../../components/organisms/Carousel';

const HomePage = () => {
  const { data: nowPlayingMovies, isLoading, error } = useMovies('now_playing');
  
  const sampleCards = Array.from({ length: 20 }, (_, i) => (
    <Card 
      key={i}
      voteAverage={Math.random() * 10}
      voteNumber={Math.floor(Math.random() * 5000)}
      url={`https://image.tmdb.org/t/p/w500/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg`}
    />
  ));

  return (
    <PageTemplate>
      <h1>Now Playing</h1>
      <p>Discover the latest movies in theaters</p>
      <Carousel>{sampleCards}</Carousel>
      
      <h2>Popular Movies</h2>
      <Carousel>{sampleCards}</Carousel>
      
      <h2>Top Rated</h2>
      <Carousel>{sampleCards}</Carousel>
    </PageTemplate>
  );
};

export default HomePage;