import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants/";

interface TabIConProps {
  icon: ImageSourcePropType;
  color: string;
  name?: string;
  focused: boolean;
  isCenter?: boolean;
}
const TabIcon = ({ icon, color, name, focused, isCenter }: TabIConProps) => {
  return (
    <View className={`items-center justify-center gap-2 `}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`${isCenter ? "w-14 h-14" : "w-6 h-6"}`}
      />
      {name && !isCenter && (
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"}`}
          style={{ color: color }}
        >
          {name}
        </Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                style={{
                  position: "absolute",
                  bottom: 20, // Adjust to position the button
                  left: "50%",
                  transform: [{ translateX: -35 }], // Adjust based on the button's width
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TabIcon
                  icon={icons.plus}
                  color={"#FF9C01"}
                  focused={true}
                  isCenter
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
