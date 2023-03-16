import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    position: sticky;
    top: ${theme.spacings.xlarge};
    width: 100%;
    max-width: 22rem;
    height: calc(100vh - ${theme.spacings.xlarge} * 2);
    user-select: none;
  `}
`;

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: calc(${theme.spacings.xsmall} / 2);
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.primary};
    gap: ${theme.spacings.medium};
    padding-block: ${theme.spacings.xsmall};
  `}
`;
