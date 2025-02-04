import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import { useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const { name, activity } = useLocalSearchParams();
  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.titleText}>All about {name}</Text>
      <Text style={defaultStyles.bodyText}>Best Home Page</Text>
    </View>
  );
}
