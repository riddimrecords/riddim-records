import PropTypes from 'prop-types';

export default {
  event: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.string.isRequired,
  }),
};
