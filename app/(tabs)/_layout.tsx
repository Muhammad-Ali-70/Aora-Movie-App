import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

const TabBarIcon = ({ }) => {
  return (
    <View>

    </View>
  );
};

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
