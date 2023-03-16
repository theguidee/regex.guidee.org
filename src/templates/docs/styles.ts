import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-inline: auto;
    display: flex;
    gap: ${theme.spacings.xxlarge};
  `}
`;

export const Content = styled.main`
  width: 100%;
`;
