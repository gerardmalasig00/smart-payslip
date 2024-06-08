import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { IUser } from "@/models/user";
import { getCurrentUser, signIn } from "@/lib/appwrite";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext()!;
  const [form, setForm] = useState<IUser>({
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (!form.password || !form.email) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setSubmitting(true);
    try {
      await signIn(form);
      const res = await getCurrentUser();
      // Set it to global state
      setUser(res);
      setIsLoggedIn(true);
      Alert.alert("Success", "User signed successfully");
      router.replace("/home");
    } catch (error: any) {
      Alert.alert(
        "Error",
        (error.message as string).replace("AppwriteException:", "")
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="bg-primary h-full"
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="bg-primary h-full">
          <ScrollView>
            <View className="w-full justify-center min-h-full px-4 my-6 ">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-[120px] h-[88px]"
              />
              <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
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
                title="Sign In"
                handlePress={submit}
                containerStyles="w-full mt-7"
                loading={submitting}
              />
              <View className="justify-center p-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">
                  Don't have an account?
                </Text>
                <Link
                  href={"/sign-up"}
                  className="text-lg font-psemibold text-secondary"
                >
                  Sign Up
                </Link>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
