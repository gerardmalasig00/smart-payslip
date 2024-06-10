import {
  View,
  Text,
  KeyboardType,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";

interface SearchInputProps {
  handleChange: (val: any) => void;
  value: string;
  placeholder?: string;
}

const SearchInput = ({
  handleChange,
  value,
  placeholder,
}: SearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className="border-2 .
    2w-full h-16 px-4 bg-black-100 rounded-2xl border-primary focus:border-secondary items-center flex-row space-x-4"
    >
      <TextInput
        className="text-base text-white mt-0.5  flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        onChangeText={handleChange}
        placeholderTextColor="#7b7b8b"
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
