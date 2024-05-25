import { View, Text, KeyboardType, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "@/constants";

interface FormFieldProps {
  title: string;
  handleChange: (val: any) => void;
  value: string;
  otherStyles?: string;
  keyboardType?: KeyboardType;
  placeholder?: string;
}

const FormField = ({
  title,
  handleChange,
  value,
  otherStyles,
  keyboardType,
  placeholder,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className="border-2 .
      2w-full h-16 px-4 bg-black-100 rounded-2xl border-primary focus:border-secondary items-center"
      >
        <TextInput
          className="flex-1 w-full text-white font-psemibold text-base "
          value={value}
          placeholder={placeholder}
          onChangeText={handleChange}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={showPassword ? icons.eyeHide : icons.eye} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
