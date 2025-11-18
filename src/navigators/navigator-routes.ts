export type NavigatorParamList = {
  ['OnBoardingScreen']: undefined;
  ['Signin']: undefined;
  ['Signup']: undefined;
  ['ResetScreen']: undefined;
  ['VerifyScreen']: undefined;
  ['OtpScreen']: undefined;
  ['HomeScreen']: undefined;

};

export type ScreenName = keyof NavigatorParamList;
