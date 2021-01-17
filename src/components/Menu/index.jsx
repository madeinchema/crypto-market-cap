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
  const { dataSource } = props;
  return (
    <List gutter={24}>
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
};
Menu.List.defaultProps = {
  dataSource: undefined,
};

export default Menu;
