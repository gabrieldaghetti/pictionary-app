import { GamePage } from "@/screens/GamePage";
import { InitialPage } from "@/screens/InitialPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      id={undefined}
      initialRouteName="InitialPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="InitialPage" component={InitialPage} />
      <Stack.Screen name="GamePage" component={GamePage} />
    </Stack.Navigator>
  );
}
