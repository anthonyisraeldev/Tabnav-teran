import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNavigator from "./Navigation";

export default function App() {
  const [loaded] = useFonts({
    OpenSansRegular: require("./assets/Fonts/OpenSans/OpenSans-Regular.ttf"),
    OpenSansBold: require("./assets/Fonts/OpenSans/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <MainNavigator />
    </SafeAreaProvider>
  );
}
