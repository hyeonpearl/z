import { css, styled } from 'styled-components';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  typography: 'h1' | 'h4' | 'error';
}

export function Txt({ typography, ...props }: Props) {
  return <StyledTxt typography={typography} {...props} />;
}

export const StyledTxt = styled.span<Props>`
  ${({ typography }) =>
    typography === 'h1' &&
    css`
      font-size: 48px;
    `};

  ${({ typography }) =>
    typography === 'h4' &&
    css`
      font-size: 24px;
    `};

  ${({ typography }) =>
    typography === 'error' &&
    css`
      font-weight: 600;
      color: tomato;
    `};
`;
