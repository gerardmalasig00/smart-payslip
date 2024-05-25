import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[96px] h-[72px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-semibold">
            Login to Smart Payslip
          </Text>
          <FormField
            title="Email"
            handleChange={(e) => setForm({ ...form, email: e })}
            value={form.email}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            handleChange={(e) => setForm({ ...form, password: e })}
            value={form.password}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Login"
            handlePress={() => null}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
