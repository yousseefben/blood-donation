import React from 'react';
import {
  NavigationContainer,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';
import {
  createStackNavigator,
  NavigationStackScreenProps,
} from '@react-navigation/stack';
import CreateDonorProfile from '_scenes/CreateDonor';
import MapsScreen from '_scenes/Maps';
import AllRequestsScence from '_scenes/Requests';
import QuestionaireScreen from '_scenes/questionaire';
import CreateRequest from '_scenes/CreateRequest';
import Login from '_scenes/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useUser} from '_context/userContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '_scenes/home';
import SplashScreen from '_scenes/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
    // screenOptions={({route}) => ({
    //   tabBarIcon: ({focused, color, size}) => {
    //     let iconName;

    //     if (route.name === 'Home') {
    //       iconName = focused
    //         ? 'ios-information-circle'
    //         : 'ios-information-circle-outline';
    //     } else if (route.name === 'Settings') {
    //       iconName = focused ? 'ios-list-box' : 'ios-list';
    //     }

    //     // You can return any component that you like here!
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: 'tomato',
    //   inactiveTintColor: 'gray',
    // }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      // options={{tabBarVisible: false}}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const MainRoute = () => {
  const {state} = useUser();

  // if (state.isSplash) return <SplashScreen />;
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="dark-content" /> */}

      {state.jwt ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{headerShown: false}}
            // {props => <HomeScreen {...props} extraData={someData} />}
          />
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{title: 'Overview'}}
            // {props => <HomeScreen {...props} extraData={someData} />}
          />
          <Stack.Screen
            name="CreateDonor"
            component={CreateDonorProfile}
            options={{headerBackTitleVisible: false, headerTitle: ''}}
          />
          <Stack.Screen
            name="Maps"
            component={MapsScreen}
            options={{headerBackTitleVisible: false, headerTitle: ''}}
          />
          <Stack.Screen
            name="Requests"
            component={AllRequestsScence}
            options={{headerBackTitleVisible: false, headerTitle: ''}}
          />
          <Stack.Screen
            name="Questionnaire"
            component={QuestionaireScreen}
            options={{headerBackTitleVisible: false, headerTitle: ''}}
          />
          <Stack.Screen
            name="CreateRequest"
            component={CreateRequest}
            options={{headerBackTitleVisible: false, headerTitle: ''}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerBackTitleVisible: false,
              headerTitle: '',
              // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainRoute;
