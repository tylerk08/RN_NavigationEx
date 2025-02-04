import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Slot /> // Loads the first available screen (which is (tabs)/_layout.tsx)
  );
}
