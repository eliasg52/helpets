import { Tabs } from "expo-router";
import { View, Text } from "react-native";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
    </Tabs>
  );
};
export default RootLayout;
