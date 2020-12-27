import styled from 'styled-components';
import { Typography } from 'antd';
import colors from '../../../theme/colors.module.scss';

const { Title: AntdTitle, Link: AntdLink } = Typography;

const Link = styled(AntdLink)`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
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

const Logo = styled(AntdTitle)`
  &.ant-typography {
    margin: 0;
  }
`;

const Title = styled(AntdTitle)`
  &.ant-typography {
    margin-bottom: 1rem;
  }
`;

export { Link, Break, Logo, Title };
