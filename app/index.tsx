import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen ad.</Text>
      <Link
        href={"/profile"}
        style={{
          color: "blue",
        }}
      >
        Go to profile
      </Link>
    </View>
  );
}