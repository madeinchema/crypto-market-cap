import styled from 'styled-components';
import colors from '../../../theme/colors.module.scss';

const Container = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 64px;
  align-items: center;
  font-size: 1rem;
  color: ${colors.gray1};
  background-color: ${colors.geekblue10};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export { Container };
