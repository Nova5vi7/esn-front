import styled, { keyframes } from 'styled-components';

const sizes = {
  superLg: 'super-lg',
  extraLg: 'extra-lg',
  lg: 'lg',
  sm: 'sm',
  md: 'md'
};

const types = {
  arrowRight: 'arrow-right',
  arrowLeft: 'arrow-left',
  arrowUp: 'arrow-up',
  arrowDown: 'arrow-down',
  spinner: 'spinner',
  cross: 'cross'
};

const iconSizeCalc = (size = 0, theme) => {
  switch (size) {
    case sizes.sm:
      return theme.ms(-5);
    case sizes.md:
      return theme.ms(-2);
    case sizes.lg:
      return theme.ms(-1);
    case sizes.extraLg:
      return theme.ms(1);
    case sizes.superLg:
      return theme.ms(3);
    default:
      return theme.ms(size);
  }
};

const I = styled.i`
  display: inline-block;
`;
const Svg = styled.svg`
  display: block;
  ${({ theme, size = sizes.sm }) => {
    const sizeCalculated = iconSizeCalc(size, theme);
    // eslint-disable-next-line sonarjs/no-nested-template-literals
    return `
        flex-shrink: 0;
        width: ${sizeCalculated};
        height: ${sizeCalculated};
    `;
  }};
  path {
    transition: all 0.3s ease;
  }
`;

const rotate = keyframes`
  to {
      transform: rotate(360deg)
  }
`;
const spin = keyframes`
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 16;
  }
`;

const Spin = styled(Svg)`
  animation: ${rotate} 4s linear infinite;
  path {
    fill: none;
    stroke-width: 0.85;
    stroke-linecap: round;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-opacity: 1;
    stroke-dasharray: 16;
    stroke-dashoffset: -16;
    transform-origin: 50% 50%;
    animation: ${spin} 2.5s ease infinite;
  }
`;

const getArrowIconPath = type => {
  switch (type) {
    case types.arrowUp:
      return 'M4.036 2.914L1.207 5.743.5 5.036l2.828-2.829.708-.707L7.57 5.036l-.707.707-2.828-2.829z';
    case types.arrowDown:
      return 'M4.036 5.657l2.828-2.829.707.708-2.828 2.828-.707.707L.5 3.536l.707-.708 2.829 2.829z';
    case types.arrowLeft:
      return 'M3.3 4L6 1.2 5.4.5 2.6 3.3l-.7.7 3.5 3.5.7-.7z';
    case types.arrowRight:
      return 'M5.157 4.036L2.328 6.864l.708.707 2.828-2.828.707-.707L3.036.5l-.708.707 2.829 2.829z';
  }
};

const Icon = ({ fill = '#333', className, type, size = sizes.sm }) => {
  switch (type) {
    case types.cross:
      return (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976309 12.6834 -0.0976309 13.3166 0.292893 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711C14.0976 1.31658 14.0976 0.683418 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893Z"
            fill={fill}
          />
        </svg>
      );
    case types.arrowDown:
    case types.arrowUp:
    case types.arrowRight:
    case types.arrowLeft:
      return (
        <I className={className}>
          <Svg size={size} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill} d={getArrowIconPath(type)} />
          </Svg>
        </I>
      );

    case types.spinner:
      return (
        <I className={className}>
          <Spin
            size={size}
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
            spin={true}
          >
            <path
              stroke={fill}
              d="m 3.9923735,1.0335419 c -1.9479848,0 -2.9547813,1.6191976 -2.948732,3.0126121 0.00605,1.3934145 1.0007472,3.0177341 2.948732,3.0177341 1.9479847,0 2.9297096,-1.6283146 2.9353337,-3.0177341 0.00562,-1.3894195 -0.987349,-3.0126121 -2.9353337,-3.0126121 z"
            />
          </Spin>
        </I>
      );
  }
};

export default Icon;
