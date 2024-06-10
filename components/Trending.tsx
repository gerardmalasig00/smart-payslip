import { View, Text, FlatList } from "react-native";
import React from "react";

interface TrendingProps {
  payslips: any[];
}
const Trending = ({ payslips }: TrendingProps) => {
  return (
    <FlatList
      data={payslips}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.$id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
