import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

const ReadMore = (props) => {
  const { isOpen, setIsOpen, className } = props;

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <Text className={className} onClick={toggleIsOpen}>
      {isOpen ? 'Read less' : 'Read more'}
    </Text>
  );
};

ReadMore.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  className: PropTypes.string,
};

ReadMore.defaultProps = {
  isOpen: undefined,
  setIsOpen: undefined,
  className: undefined,
};

export default ReadMore;
