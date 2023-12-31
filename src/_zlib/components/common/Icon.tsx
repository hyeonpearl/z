import colors from '../../constants/colors';
import { css, styled } from 'styled-components';
import { HTMLAttributes } from 'react';

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  width: number;
  height: number;
}
interface SvgProps extends HTMLAttributes<SVGAElement> {
  type: 'fill' | 'stroke';
  color?: string;
}

export function Icon({ src, width, height, ...props }: ImgProps) {
  return <StyledImg src={src} width={width} height={height} {...props} />;
}

const StyledImg = styled.img`
  &.upload {
    width: 100%;
    height: 500px;
    border: 1px solid ${colors.gray01};
    border-radius: 1rem;
  }
`;
const StyledSvg = styled.svg<SvgProps>`
  ${({ type, color }) => css`
    fill: ${type === 'fill' ? color ?? 'currentColor' : 'none'};
    stroke: ${type === 'stroke' ? color ?? 'currentColor' : 'none'};
    stroke-width: 1.5;
  `}
`;

const HomeIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      clipRule='evenodd'
      fillRule='evenodd'
      d='M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z'
    />
  </StyledSvg>
);
const ProfileIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
    />
  </StyledSvg>
);
const SignOutIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
    />
  </StyledSvg>
);
const PhotoIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
    />
  </StyledSvg>
);
const EditIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
    />
  </StyledSvg>
);
const DeleteIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6 18L18 6M6 6l12 12'
    />
  </StyledSvg>
);
const CalendarIcon = ({ type, color }: SvgProps) => (
  <StyledSvg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    type={type}
    color={color}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
    />
  </StyledSvg>
);

Icon.Home = HomeIcon;
Icon.Profile = ProfileIcon;
Icon.SignOut = SignOutIcon;
Icon.Photo = PhotoIcon;
Icon.Edit = EditIcon;
Icon.Delete = DeleteIcon;
Icon.Calendar = CalendarIcon;
