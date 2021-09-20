import styled, { css } from 'styled-components';

const cropperWrapStyle = css`
  position: relative;
  width: 223px;
  height: 223px;
  border-radius: 50%;
  overflow: hidden;
`;

const cropperContainerStyle = css`
  position: relative;
  margin-bottom: 49px;
  border-radius: 50%;
`;

const buttonGroupStyle = css`
  position: absolute;
  bottom: 0;
  left: ${properties => properties.left};
  right: ${properties => properties.right};
`;

export const CropperContainerStyle = styled.div`
  ${cropperContainerStyle}
`;

export const CropperWrap = styled.div`
  ${cropperWrapStyle}
`;

export const ButtonGroup = styled.div`
  ${buttonGroupStyle}
`;
