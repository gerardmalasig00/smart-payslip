import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-pblack">Smart Payslip</Text>
      <Link
        href={"/home"}
        style={{
          color: "blue",
        }}
      >
        Home
      </Link>
    </View>
  );
}
