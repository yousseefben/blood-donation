import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled, {css} from 'styled-components/native';
import Text, {TextProps} from '_atoms/Text/Text';
import Box from '_atoms/Box/Box';

interface propstype {
  text?: string;
  disabled?: boolean;
  fullwidth?: boolean;
  children?: ReactNode;
  variant?: string;
  textProps?: TextProps;
  color?: string;
  align?: string;
  boxProps?: any;
  icon?: any;
}

const Button = ({
  text,
  disabled,
  children,
  variant,
  color,
  textProps,
  align,
  fullwidth,
  boxProps,
  icon: Icon,
  ...rest
}: propstype & TouchableOpacityProps) => {
  const alignEnum = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  };
  return (
    <Box justifyContent={alignEnum[align] || 'flex-start'} flexDirection="row">
      <ButtonWrapper disabled={disabled} activeOpacity={0.5} {...rest}>
        <Box
          bg={variant === 'contained' ? color || 'primary' : 'transparent'}
          py={!!variant ? '10px' : 0}
          px={!!variant ? '14px' : 0}
          border={!!variant ? '1px' : 'none'}
          borderColor={color || 'primary'}
          borderRadius="4px"
          width={fullwidth ? '100%' : 'auto'}
          {...boxProps}>
          {!Icon ? (
            <Text
              textAlign="center"
              color={
                variant || color
                  ? variant === 'contained'
                    ? '#FFF'
                    : color || 'primary'
                  : '#000'
              }
              {...textProps}>
              {children || text}
            </Text>
          ) : (
            <Box
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center">
              <Text flexGrow={1} textAlign="right">
                {Icon}
              </Text>
              <Text
                flexGrow={1}
                textAlign="left"
                ml="5px"
                {...textProps}
                color={
                  variant || color
                    ? variant === 'contained'
                      ? '#FFF'
                      : color || 'primary'
                    : '#000'
                }>
                {text}
              </Text>
            </Box>
          )}
        </Box>
      </ButtonWrapper>
    </Box>
  );
};

export default Button;

const ButtonWrapper = styled.TouchableOpacity(
  ({theme, align}) => css`
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    flex-direction: row;
    /* justify-content: ${align}; */
  `,
);
