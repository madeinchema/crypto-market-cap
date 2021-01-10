/* eslint-disable react/prop-types */
import { Col } from 'antd';
import { Link } from '..';
import { Container, Button, List } from './styles/menu';

const Menu = (props) => {
  const { children } = props;
  return <Container>{children}</Container>;
};

Menu.Button = function MenuButton() {
  return <Button />;
};

Menu.List = function HeaderMenu(props) {
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

export default Menu;
