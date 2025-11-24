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