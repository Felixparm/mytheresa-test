import { useNavigate, useParams } from 'react-router';
import PageTemplate from '../../components/templates/PageTemplate';
import { useMovie } from '../../services/useMovies';
import MoviePoster from '../../components/molecules/MoviePoster/MoviePoster';
import MoviePosterLoading from '../../components/molecules/MoviePoster/MoviePoster.loading';
import Overview from '../../components/molecules/Overview/Overview';
import OverviewLoading from '../../components/molecules/Overview/Overview.loading';
import './DetailPage.scss';
import { useWishlistStore } from '../../store/whish-list.store';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: movie, isLoading } = useMovie(id!);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlistStore();
  const navigate = useNavigate();
  const isWishlisted = movie ? isInWishlist(movie.id) : false;

  const handleToggleWishlist = () => {
    if (!movie) return;
    if (isWishlisted) {
      removeFromWishlist(movie.id);
    } else {
      addToWishlist({ id: movie.id, title: movie.title });
    }
  };

  return (
    <PageTemplate labelRedirection='<< Back' onClickRedirection={() => navigate('/')} isLoading={isLoading} headerTitle={movie?.title}>
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
            <Overview labelButton={
              isWishlisted ? 'Remove from wish list' : 'Add to wish list'
            }
              text={movie?.overview || 'No overview available'}
              onClickAddButton={handleToggleWishlist} />
          )}
        </div>
      </div>
    </PageTemplate>
  );
};

export default DetailPage;