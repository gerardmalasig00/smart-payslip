import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  handlePress: (val: any) => void;
  containerStyles: string;
  textStyles?: string;
  loading?: boolean;
}
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  loading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        loading && "opacity-50"
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
