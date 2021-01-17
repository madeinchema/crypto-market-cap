import PropTypes from 'prop-types';
import { Col } from 'antd';
import { Link } from '..';
import { Container, Button, List } from './styles/menu';

const Menu = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

Menu.Button = function MenuButton(props) {
  const { onClick } = props;
  return <Button onClick={onClick} />;
};

Menu.List = function MenuList(props) {
  const {
    dataSource,
    breakpoint,
    align,
    direction,
    spaceSize,
    split,
    wrap,
  } = props;
  return (
    <List
      breakpoint={breakpoint}
      align={align}
      direction={direction}
      spaceSize={spaceSize}
      split={split}
      wrap={wrap}
    >
      {dataSource.map((menuItem) => (
        <Col key={menuItem.id}>
          <Link linkData={menuItem} href={menuItem.href} />
        </Col>
      ))}
    </List>
  );
};

Menu.propTypes = {
  children: PropTypes.node,
};
Menu.defaultProps = {
  children: undefined,
};

Menu.Button.propTypes = {
  onClick: PropTypes.func,
};
Menu.Button.defaultProps = {
  onClick: undefined,
};

Menu.List.propTypes = {
  dataSource: PropTypes.arrayOf(Object),
  breakpoint: PropTypes.string,
  align: PropTypes.string,
  direction: PropTypes.string,
  spaceSize: PropTypes.oneOfType(
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType(
        PropTypes.number,
        PropTypes.oneOf(['small', 'middle', 'large'])
      )
    )
  ),
  split: PropTypes.node,
  wrap: PropTypes.bool,
};
Menu.List.defaultProps = {
  dataSource: undefined,
  breakpoint: undefined,
  align: undefined,
  direction: undefined,
  spaceSize: undefined,
  split: undefined,
  wrap: undefined,
};

export default Menu;
