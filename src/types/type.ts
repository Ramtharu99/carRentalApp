export interface InputProps {
    placeholderText?: string;
    leftIcon?: string | null;
    rightIcon?: string | null; 
    secure?: boolean
    value?: string;
    onChangeText?: (text: string) => void;
    onRightIconPress?: () => void
}