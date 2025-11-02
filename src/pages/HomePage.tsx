import { useMovies } from '../services/useMovies';

const HomePage = () => {
  const { data: nowPlayingMovies, isLoading, error } = useMovies('now_playing');
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default HomePage;