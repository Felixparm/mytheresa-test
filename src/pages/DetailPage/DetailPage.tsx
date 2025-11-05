import { useParams } from 'react-router';
import PageTemplate from '../../components/templates/PageTemplate';
import { useMovie } from '../../services/useMovies';
import MoviePoster from '../../components/molecules/MoviePoster/MoviePoster';
import MoviePosterLoading from '../../components/molecules/MoviePoster/MoviePoster.loading';
import Overview from '../../components/molecules/Overview/Overview';
import OverviewLoading from '../../components/molecules/Overview/Overview.loading';
import './DetailPage.scss';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading } = useMovie(id!);

  return (
    <PageTemplate headerTitle={isLoading ? undefined : movie?.title}>
      <div className="detail-page">
        <div className="detail-page__poster">
          {isLoading ? (
            <MoviePosterLoading />
          ) : (
            <MoviePoster
              url={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
            />
          )}
        </div>
        <div className="detail-page__overview">
          {isLoading ? (
            <OverviewLoading />
          ) : (
            <Overview text={movie?.overview || 'No overview available'} onClickAddButton={() => console.log("check")} />
          )}
        </div>
      </div>
    </PageTemplate>
  );
};

export default DetailPage;