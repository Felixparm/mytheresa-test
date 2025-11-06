import { useQuery } from '@tanstack/react-query';
import type { MovieCategory, MovieResponse } from '../types/movie';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIzMjUyMDI5NDIwOThlYzEwZGUxYTAwZTE2YTk2OSIsIm5iZiI6MTYwNTE3NDg4OC4yMTUwMDAyLCJzdWIiOiI1ZmFkMDY2OGRmYWFlOTAwM2U2NTAwMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NROis_sWVq3Ax9TogWpo5QvYuN0oyGZ9Jyk22xFSVv4';

export const useMovies = (category: MovieCategory, page: number = 1) => {
  const fetchMovies = async (): Promise<MovieResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/movie/${category}?language=en-US&page=${page}`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'accept': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw response.status;
    }
    return response.json();
  };


  return useQuery({
    queryKey: ['movies', category, page],
    queryFn: fetchMovies,
    throwOnError: true,
  });
};

export const useMovie = (movieId: string) => {
  const fetchMovie = async () => {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}?language=en-US`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'accept': 'application/json',
        },
      }
    );
    if (!response.ok) {
      throw response.status;
    }
    const data = await response.json();
    return data;
  };

  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: fetchMovie,
    throwOnError: true,
  });
};