import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";

interface IData {
  $id: string;
}
const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<IData[]>([{ $id: "1" }]);

  const onRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-gray-100 text-lg font-pregular mb-3">
            {item.$id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-center flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  GM BI
                </Text>
              </View>
              <View className="mt-.5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-12 h-11"
                />
              </View>
            </View>
            <SearchInput
              value=""
              handleChange={() => null}
              placeholder="Search Anything"
            />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>
              <Trending payslips={[{ $id: 1 }, { $id: 2 }]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Payslips Found"
            subTitle="Start your journey by creating a payslip"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
