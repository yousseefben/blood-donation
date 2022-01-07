import React, {ReactNode, useEffect, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import Box from '_atoms/Box/Box';
import {Text} from '_atoms/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '_atoms/Button/Button';
import {TYPE_ENUM} from '_context/alertContext';
import {useTheme} from 'styled-components';
import {ThemeType} from '_styles/theme';

type AlertProps = {
  isOpen: boolean;
  message: string;
  buttonText: string;
  type: TYPE_ENUM;
  close: () => void;
};
const {height} = Dimensions.get('window');
const Alert = ({isOpen, message, type, close, buttonText}: AlertProps) => {
  const modalizeRef = useRef<Modalize>(null);

  const theme: ThemeType = useTheme();

  const resolveIcon = (type_in: TYPE_ENUM) => {
    switch (type_in) {
      case TYPE_ENUM.default:
        return <Icon name="info" color="green" size={44} />;
      case TYPE_ENUM.success:
        return <Icon name="check-circle" color="green" size={44} />;
      case TYPE_ENUM.error:
        return <Icon name="error" color={theme.colors?.error} size={44} />;
    }
  };
  useEffect(() => {
    if (isOpen) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [isOpen]);
  return (
    <Box>
      <Portal>
        <Modalize
          ref={modalizeRef}
          // snapPoint={0.6 }
          // HeaderComponent={<Text>Header</Text>}
          withHandle={false}
          modalTopOffset={0}
          adjustToContentHeight
          closeOnOverlayTap={false}
          panGestureEnabled={false}
          disableScrollIfPossible
          scrollViewProps={{scrollEnabled: false}}
          modalStyle={styles.modalStyle}>
          <Box
            height={180}
            alignItems="center"
            pt="10px"
            justifyContent="space-around">
            <Box alignItems="center">
              {resolveIcon(type)}
              <Text mt="16px" fontSize="18px">
                {message}
              </Text>
            </Box>
            <Button
              variant="outlined"
              boxProps={{py: '6px'}}
              text={buttonText}
              color={'primary'}
              onPress={close}
            />
          </Box>
        </Modalize>
      </Portal>
    </Box>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    bottom: height - height / 1.8,
    borderRadius: 12,
    marginRight: 40,
    marginLeft: 40,
  },
});

export default Alert;
