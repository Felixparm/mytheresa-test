import { useParams } from 'react-router';
import PageTemplate from '../../components/templates/PageTemplate';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  return (
    <PageTemplate>
      <div>Detail page</div>
    </PageTemplate>
  );
};

export default DetailPage;