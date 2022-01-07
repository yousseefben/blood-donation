import 'react-native-gesture-handler'; //should be at the top
import 'intl';
import 'intl/locale-data/jsonp/fr';

import {
  NavigationContainer,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  NavigationStackScreenProps,
} from '@react-navigation/stack';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Button from '_atoms/Button/Button';
import HomeScreen from '_scenes/home';
import {Theme} from '_styles/theme';
import {ThemeProvider} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateDonorProfile from '_scenes/CreateDonor';
import MapsScreen from '_scenes/Maps';
import AllRequestsComponent from '_organisms/AllRequestsComponent';
import AllRequestsScence from '_scenes/Requests';
import {Host} from 'react-native-portalize';
import QuestionaireScreen from '_scenes/questionaire';
import CreateRequest from '_scenes/CreateRequest';
import Login from '_scenes/Login';
import {AuthProvider} from './context/userContext';
import MainRoute from './navigation';
import ApolloWrapper from '_services/ApolloWrapper';
import {IntlProvider} from 'react-intl';
import fr from './lang/fr.json';
import {locatedError} from 'graphql';
import {AlertProvider} from '_context/alertContext';
import {SpinnerProvider} from '_context/spinnerContext';
// import en from './lang/en.json';
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// function loadLocaleData(locale: string) {
//   switch (locale) {
//     case 'fr':
//       return require('./lang/fr.json');
//     default:
//       return require('./lang/en.json');
//   }
// }

const Index = () => {
  // const messages = loadLocaleData('fr');
  // console.log('message', messages);
  return (
    <>
      <IntlProvider locale={'fr'} defaultLocale="fr" messages={fr}>
        <ThemeProvider theme={Theme}>
          <Host>
            <AlertProvider>
              <SpinnerProvider>
                <AuthProvider>
                  <ApolloWrapper>
                    <MainRoute />
                  </ApolloWrapper>
                </AuthProvider>
              </SpinnerProvider>
            </AlertProvider>
          </Host>
        </ThemeProvider>
      </IntlProvider>
    </>
  );
};

export default Index;
