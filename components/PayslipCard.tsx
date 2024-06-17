import { View, Text } from "react-native";
import React from "react";
import { IPayslip } from "@/types/models";

const PayslipCard = ({ payslip }: { payslip: IPayslip }) => {
  return (
    <View className="flex-full p-4 ">
      <View className="flex-grow gap-3 items-start border-red-500 border-2">
        <Text className="text-lg text-white font-pbold">
          {payslip.employee_name}
        </Text>
      </View>
    </View>
  );
};

export default PayslipCard;
