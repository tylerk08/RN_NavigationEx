import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SchoolScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the School Screen</Text>
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
      <Button title="Go to Home" onPress={() => router.push("/home")} />
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
