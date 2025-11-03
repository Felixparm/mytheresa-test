import { useMovies } from '../../services/useMovies';
import PageTemplate from '../../components/templates/PageTemplate';

const HomePage = () => {
  const { data: nowPlayingMovies, isLoading, error } = useMovies('now_playing');
  return (
    <PageTemplate>
      <h1>List</h1>
      <p>Discover the latest movies in theaters</p>
    </PageTemplate>
  );
};

export default HomePage;