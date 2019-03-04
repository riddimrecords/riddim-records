import PropTypes from 'prop-types';

export default {
  artist: PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    social: PropTypes.shape({
      soundcloud: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
      aor: PropTypes.string,
    }),
    info: PropTypes.arrayOf(PropTypes.string).isRequired,
    pic: PropTypes.string.isRequired,
  }),
};
