import React from 'react';
import {Animated, Platform, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
          let iconName = 'camera';
          let tabName = 'Home';

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'camera' : 'camera';
            tabName = 'Camera';
          }

          return (
            <View className="justify-center items-center w-full">
              <MaterialCommunityIcons
                name={iconName}
                size={scale(focused ? 25 : 23)}
                color={focused ? colors.white : colors.icon}
              />

              <Text
                numberOfLines={1}
                className={`text-4xl font-PoppinsMedium ${
                  focused
                    ? 'font-semibold text-white'
                    : 'font-normal text-icon'
                }`}
              >
                {tabName}
              </Text>
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
          backgroundColor: colors.black,
        },
      })}
      initialRouteName={'HomeScreen'}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
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
