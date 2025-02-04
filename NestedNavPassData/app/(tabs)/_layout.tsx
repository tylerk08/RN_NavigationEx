import { Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/styles/colors";
import { useEffect } from "react";

export default function TabsLayout() {
  const { name, activity } = useLocalSearchParams(); // Retrieve passed data
  const router = useRouter();

  useEffect(() => {
    if (!name || !activity) {
      router.replace("/"); // Redirect to entry screen if no data
    }
  }, [name, activity]);

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
          headerTitle: name + "'s Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
        initialParams={{ name, activity }}
      />
      <Tabs.Screen
        name="family"
        options={{
          headerTitle: name + "'s Family",
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
          headerTitle: "School Activity: " + activity,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "school" : "school-outline"}
              size={24}
              color={color}
            />
          ),
        }}
        initialParams={{ name, activity }}
      />
    </Tabs>
  );
}
