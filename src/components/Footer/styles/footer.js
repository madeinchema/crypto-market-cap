import styled from 'styled-components';
import { Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title, Link: AntdLink } = Typography;

const Link = styled(AntdLink)`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  &.ant-typography {
    color: ${colors.geekblue6};
    &:hover {
      color: ${colors.geekblue5};
    }
  }
`;

const Break = styled.div`
  margin-bottom: 2rem;
  height: 0;
`;

const Logo = styled(Title)`
  &.ant-typography {
    margin: 0;
  }
`;

export { Link, Break, Logo };
