import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};

    h1 {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.primary};
    }

    h2 {
      position: relative;
      font-size: ${theme.font.sizes.large};
      margin-top: ${theme.spacings.xxlarge};
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.primary};
    }

    h3 {
      position: relative;
      font-size: ${theme.font.sizes.medium};
      margin-top: ${theme.spacings.xxlarge};
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.secondary};
    }

    p {
      margin: ${theme.font.sizes.small} 0;
      font-size: ${theme.font.sizes.small};
      line-height: 1.6;

      &:first-of-type:not(:only-of-type) {
        margin-top: 0;
      }
    }

    ul,
    li {
      list-style-type: disc;
    }

    ul,
    ol {
      list-style-position: outside;
      margin: ${theme.spacings.xsmall} ${theme.spacings.medium};
    }

    li {
      margin-bottom: ${theme.spacings.xsmall};
    }

    code {
      font-family: monospace;
    }

    p > code {
      padding: 0 calc(${theme.spacings.xsmall} / 2);
      color: ${theme.colors.secondary};
    }
  `}
`;
