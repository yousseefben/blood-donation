import React, {ReactNode} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  space,
  flexbox,
  layout,
  position,
  border,
  BorderProps,
  PositionProps,
  LayoutProps,
  FlexboxProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

type BoxProps = {
  children: ReactNode;
} & ColorProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  BorderProps &
  LayoutProps;
const Box = ({children, ...rest}: BoxProps) => {
  return <BoxWrapper {...rest}>{children}</BoxWrapper>;
};

export default Box;

const BoxWrapper = styled.View<BoxProps>`
  ${color}
  ${space}
  ${flexbox}
  ${layout}
  ${position}
  ${border}
`;
