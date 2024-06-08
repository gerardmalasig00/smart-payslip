import CustomButton from "@/components/CustomButton";
import LoadingScreen from "@/components/LoadingScreen";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { isLoading, isLoggedIn, user } = useGlobalContext()!;
  console.log(isLoggedIn, isLoading, user, "log lo");

  if (isLoading) return <LoadingScreen />;
  if (isLoggedIn) return <Redirect href={"/home"} />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w--[300px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Payroll Made Easy with{" "}
              <Text className="text-secondary-200">Smart Payslip</Text>
            </Text>
          </View>
          <Text className="text-sm font-regular text-gray-100 mt-7 text-center">
            Unlock simplicity in payroll management with Smart Payslip – where
            efficiency meets ease, and accuracy becomes effortless
          </Text>
          <CustomButton
            title={"Continue with email"}
            handlePress={() => router.push("/sign-in")}
            containerStyles={"w-full mt-7"}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
