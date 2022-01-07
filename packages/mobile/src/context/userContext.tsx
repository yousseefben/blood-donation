import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import * as Keychain from 'react-native-keychain';
import {createAction, checkPermissionLocation} from '_utils/helpers';
import {getData, removeData, storeData} from '_services/AsyncStorage';
import {USER_KEY} from '_services/asyncStorageKeys';
import Geolocation from 'react-native-geolocation-service';
import {CONFIG} from '_config/current';
import {Alert, Platform} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';

type UserType = {
  email: string;
  blocked: boolean;
  confirmed: boolean;
  created_at: string;
  updated_at: string;
  id: number;
  provider: string;
  username: string;
};
type UserStateType = {
  user: UserType;
  jwt: string;
};
type UserContextType = UserStateType & {
  login: () => void;
};

export const UserContext = createContext<UserContextType>({});

const LOGIN_SUCCESS_TYPE = 'LOGIN_SUCCESS';
const LOGIN_RESTORE_TYPE = 'LOGIN_RESTORE';
const LOGIN_RREQUEST_TYPE = 'LOGIN_REQUEST';
const TOGGLE_SPLASH_TYPE = 'TOGGLE_SPLASH';
const SET_CURRENT_LOCATION_TYPE = 'SET_CURRENT_LOCATION';
const LOGOUT_TYPE = 'LOGOUT';

const authReducer = (state: UserStateType, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_SUCCESS_TYPE:
      return {...state, ...payload, isLoading: false};
    case LOGIN_RESTORE_TYPE:
      return {...state, ...payload, isLoading: false, isSplash: false};

    case LOGIN_RREQUEST_TYPE:
      return {...state, isLoading: true, isSplash: false};
    case LOGOUT_TYPE:
    case SET_CURRENT_LOCATION_TYPE:
    case TOGGLE_SPLASH_TYPE:
      return {...state, ...payload};
    default:
      throw new Error('Unexpected action');
  }
};

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const token = await messaging().getToken();
    console.log('Authorization status:', token);
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  }
}

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    jwt: '',
    user: undefined,
    isLoading: false,
    isSplash: true,
    currentLocation: undefined,
  });
  const getCurrentLocation = () =>
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('myposition', position);
        dispatch(
          createAction(SET_CURRENT_LOCATION_TYPE, {
            currentLocation: position.coords,
          }),
        );
      },
      (error) => {
        // See error code charts below.
        console.log('trololo', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  const getAccessTokenFromKeychain = async () => {
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getInternetCredentials('accessToken');
      if (!credentials) {
      } else {
        console.log('Credentials successfully loaded for user ', credentials);
      }
      return credentials && credentials.password;
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };

  const getUser = async () => {
    const jwt = await getAccessTokenFromKeychain();

    requestUserPermission()
      .then((e) => console.log('yobe', e))
      .catch((e) => console.log('yobe error', e));
    // const user = await getData(USER_KEY);
    // const test = await GoogleSignin.signInSilently();
    // console.log('user async', test);
    if (jwt) {
      login();
    }
  };
  const conf = async () => {
    await GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '306164567985-fmpic61cigr203q3k7qnh3p869mkuvp4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  };
  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '306164567985-fmpic61cigr203q3k7qnh3p869mkuvp4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      // accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    getUser();
  }, []);

  const {jwt, currentLocation} = state;
  useEffect(() => {
    const getCurrent = async () => {
      const permission = await checkPermissionLocation();
      if (permission) {
        console.log('waaa3', permission);
        getCurrentLocation();
      } else {
        console.log('honololo');

        request(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        )
          .then((f) => console.log('youssef map', f))
          .catch((e) => console.log('waaaaa3', e));
        // if (Platform.OS === 'ios') {
        //   Geolocation.requestAuthorization('whenInUse')
        //     .then((f) => console.log(f))
        //     .catch((e) => console.log('waaa3', e));
        // } else request
      }
    };
    if (jwt) {
      getCurrent();
    }
  }, [jwt]);
  useEffect(() => {
    if (jwt && currentLocation) {
      dispatch(createAction(TOGGLE_SPLASH_TYPE, {isSplash: false}));
    }
  }, [jwt, currentLocation]);
  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await getData(USER_KEY);

      const userInfo = !user
        ? await GoogleSignin.signIn()
        : await GoogleSignin.signInSilently();
      console.log('idTokenn', userInfo.idToken);
      const token = await GoogleSignin.getTokens().then((res) => {
        return res;
      });

      if (token.accessToken && token.idToken) {
        dispatch(createAction(LOGIN_RREQUEST_TYPE));
        try {
          const resp = await fetch(
            `${CONFIG.API_URL}/auth/google/callback?id_token=${token.idToken}&access_token=${token.accessToken}`,
          );
          const info = await resp.json();
          if (info) {
            console.log('info', info);
            const {jwt, user} = info;
            await Keychain.setInternetCredentials(
              'accessToken',
              'accessToken',
              jwt,
            );
            await storeData(USER_KEY, user);
            dispatch(createAction(LOGIN_SUCCESS_TYPE, {user, jwt}));
          }

          console.log('info', info);
        } catch (error) {
          console.log('error x', error);
        }
      }
      // this.setState({ userInfo });
    } catch (error) {
      console.log('here', error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const logout = async () => {
    await Keychain.resetInternetCredentials('accessToken');
    await removeData(USER_KEY);
    dispatch(createAction(LOGOUT_TYPE, {jwt: null, user: null}));
  };
  return (
    <UserContext.Provider value={{login, state, logout}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
