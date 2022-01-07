import React, {useContext} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const initialState = {
  loading: false,
  text: '',
};
type contextType = {
  loading: boolean;
  text?: string;
};
export const spinnerContext = React.createContext<any>(initialState);
const {Provider} = spinnerContext;

export const SpinnerProvider = ({children}) => {
  const [loadingState, setLoadingState] = React.useState<contextType>(
    initialState,
  );

  const changeLoading = (loading: boolean, text: string) => {
    setLoadingState({
      loading,
      text,
    });
  };
  return (
    <>
      <Provider value={changeLoading}>{children}</Provider>
      <Spinner
        visible={loadingState.loading}
        textContent={loadingState.text || 'Loading...'}
        // textStyle={styles.spinnerTextStyle}
      />
    </>
  );
};

export const useSpinner = () => useContext(spinnerContext);
