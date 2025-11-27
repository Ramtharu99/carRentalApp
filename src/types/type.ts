import { ViewStyle } from "react-native";

export interface InputProps {
    placeholderText?: string;
    leftIcon?: string | null;
    rightIcon?: string | null; 
    secure?: boolean
    value?: string;
    onChangeText?: (text: string) => void;
    onRightIconPress?: () => void
}


export interface HeaderProps {
  type?: "home" | "back";
  title?: string;            
  showNotification?: boolean; 
  badgeCount?: number;
  centerTitle?: boolean;
  showRightIcon?: boolean;
  onNotificationPress?: any;
  onAccount?: any;
}

export interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string
}

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  containerClass?: string;
  textClass?: string;
  icon?: string;
}

export interface CarBrandItemProps {
  image: any;
  name: string;
  layout?: "row" | "column";
  onPress?: () => void;
  selected?: boolean;
  size?: "sm" | "md" | "lg";
  textSize?: "sm" | "base" | "lg";
  padding?: "p-1" | "p-2" | "p-3";
}


export interface CarCardProps {
  title?: string;
  image?: any;
  location?: string;
  seat?: number;
  price?: number;
  rate?: number;
  viewDetails?: () => void;
  buttonText?: string; 
  onButtonPress?: () => void; 
}

export interface FeatureCardProps {
  icon?: any;
  vectorIcon?: string;
  iconSize?: number;
  iconColor?: string;
  title: string;
  value: string;
  bgColor?: string;
  titleColor?: string;
  valueColor?: string;
  containerClass?: string;
  style?: ViewStyle; 
  onPress?: () => void;
}

export interface InputProps {
  placeholder?: string;
  showFilter?: boolean;
  onFilterPress?: () => void;
  onChangeText?: (text: string) => void;
}