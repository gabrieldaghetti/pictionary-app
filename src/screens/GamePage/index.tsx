import { View, StyleSheet } from "react-native";
import { Board } from "@/components/Board";
import { Header } from "@/components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export function GamePage() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Board />
      </View>
    </SafeAreaView>
  );
}
