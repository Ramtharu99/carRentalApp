import React from 'react';
import {Animated, Platform, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigatorParamList} from './navigator-routes';
import {navigationRef} from './navigator-utils';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import OnBoardingScreen from '../screens/Onbording';
import {colors} from '../../assets/theme/colors';
import {scale} from '../theme/scale';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';
import ResetScreen from '../auth/ResetScreen';
import VerifyScreen from '../auth/VerifyScreen';
import OTPScreen from '../auth/OTPScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import Notification from '../screens/Notification';
import CarDetails from '../screens/CarDetails';
import ReviewScreen from '../screens/ReviewScreen';
import BookingScreen from '../screens/BookingScreen';
import BookingPaymentScreen from '../screens/PaymentMethod';
import Confirm from '../screens/Confirm';
import PaymentStatus from '../screens/PaymentStatus';
import ProfileScreen from '../screens/ProfileScreen';
import EditPrifleScreen from '../screens/EditPrifleScreen';
import MessageScreen from '../screens/MessageScreen';
import ChatScreen from '../screens/ChatScreen';

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const Stack = createStackNavigator<NavigatorParamList>();
const Tab = createBottomTabNavigator<NavigatorParamList>();

const TabStack = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,

        tabBarIcon: ({focused}) => {
          let iconName = 'home';

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home';
          }
          else if (route.name === 'SearchScreen') {
            iconName = focused ? 'search' : 'search';
          }else if(route.name === 'MessageScreen'){
            iconName = focused ? 'message' : 'message';
          }else if(route.name === 'ProfileScreen'){
            iconName = focused ? 'account-circle': 'account-circle'
          }

          return (
            <View className="justify-center items-center w-full">
              <MaterialIcons
                name={iconName}
                size={scale(focused ? 25 : 23)}
                color={focused ? colors.white : colors.icon}
              />
            </View>
          );
        },

        headerShown: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: scale(12),
        },
        lazy: false,
        tabBarStyle: {
          height:
            Platform.OS === 'ios'
              ? scale(50 + insets.bottom)
              : scale(60),
          backgroundColor: colors.bgTab,
          position: 'absolute',
          bottom: scale(28),
          borderRadius: scale(30),
          marginHorizontal: scale(12)
        },
      })}
      initialRouteName={'HomeScreen'}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{tabBarLabel: 'Onboarding', tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ResetScreen"
        component={ResetScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="VerifyScreen"
        component={VerifyScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OTPScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName='CarDetailsScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="CarDetailsScreen"
        component={CarDetails}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={BookingPaymentScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirm}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="PaymentStatus"
        component={PaymentStatus}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditPrifleScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={Notification}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

const CombinedStack = () => {
  const isAuthenticated = true;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: "default"}}>
      <Stack.Screen
        name="auth"
        component={isAuthenticated ? TabStack : AuthStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="tabStack"
        component={TabStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="authStack"
        component={AuthStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="rootStack"
        component={RootStack}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer ref={navigationRef as any} {...props}>
      <CombinedStack />
    </NavigationContainer>
  );
}
