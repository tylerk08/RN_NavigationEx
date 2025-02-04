import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/styles/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.mediumgrey,
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerShadowVisible: false,
        headerTintColor: colors.darkbackground,
        tabBarStyle: {
          backgroundColor: colors.lightbackground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="family"
        options={{
          headerTitle: "Family",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="school"
        options={{
          headerTitle: "School",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="param"
        options={{
          headerTitle: "Param",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "cloud" : "cloud-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
