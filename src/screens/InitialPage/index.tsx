import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/Button";
import { Kitty } from "@/components/Rive/Kitty";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/Header";

export function InitialPage() {
  const [triggerInteraction, setTriggerInteraction] = useState(false);
  const navigation = useNavigation();

  const handleNewGame = () => {
    setTriggerInteraction(true);

    setTimeout(() => {
      setTriggerInteraction(false);
      navigation.navigate("GamePage");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#A2F9FD" />

      <View style={styles.content}>
        <Text style={styles.title}>Pictionary App</Text>

        <Kitty triggerInteraction={triggerInteraction} />

        <View style={styles.footer}>
          <Button
            label="New Game"
            onPress={handleNewGame}
            loading={triggerInteraction}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2F9FD",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 70,
  },
  title: {
    fontSize: 24,
    marginTop: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
