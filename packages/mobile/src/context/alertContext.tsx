import React, {useContext} from 'react';
import {Alert} from '_atoms/index';
const initialState = {
  isOpen: false,
  message: '',
  buttonText: '',
  type: '',
};

export enum TYPE_ENUM {
  default,
  success,
  error,
}
export const alertContext = React.createContext<any>(initialState);
const {Provider} = alertContext;
export const AlertProvider = ({children}) => {
  const [alertState, setAlertState] = React.useState<any>(initialState);

  const alert = (
    message: string,
    type: TYPE_ENUM = TYPE_ENUM.default,
    buttonText = 'OK',
  ) => {
    setAlertState({
      isOpen: true,
      message,
      buttonText,
      type,
    });
  };
  const close = () => {
    setAlertState(initialState);
  };
  return (
    <>
      <Provider value={alert}>{children}</Provider>
      <Alert {...alertState} close={close} />
    </>
  );
};

export const useAlert = () => useContext(alertContext);
