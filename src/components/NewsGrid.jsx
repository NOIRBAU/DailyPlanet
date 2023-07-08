import NewsItem from './NewsItem';
import { newsItemShape } from '../proptypes';
import PropTypes from 'prop-types';

function NewsGrid({ items }) {
  return (
    <div className="news-grid">
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

NewsGrid.propTypes = {
  // items: newsItemShape,
  items: PropTypes.arrayOf(newsItemShape),
};

export default NewsGrid;
