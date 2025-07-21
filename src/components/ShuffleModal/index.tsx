import { useEffect, useState } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Button } from "../Button";
import { CardShuffle } from "../Rive/CardShuffle";

const words = ["Elephant", "Airplane", "Pizza", "Guitar", "Castle"];

export function ShuffleModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [word, setWord] = useState("");
  const [triggerShuffle, setTriggerShuffle] = useState(true);

  function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }

  const shuffleWord = () => {
    setTriggerShuffle(true);

    setTimeout(() => {
      setWord(getRandomWord());
      setTriggerShuffle(false);
    }, 1000);
  };

  useEffect(() => {
    shuffleWord();
  }, []);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

          <CardShuffle trigger={triggerShuffle} />

          <Text style={styles.title}>Your word is:</Text>
          <Text style={styles.word}>
            {triggerShuffle ? <ActivityIndicator size="large" /> : word}
          </Text>

          <View style={styles.buttons}>
            <Button label="Shuffle" onPress={shuffleWord} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    padding: 24,
    width: "80%",
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "white",
  },
  closeButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#C4CAD0",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
  word: {
    fontSize: 32,
    color: "#333",
    marginBottom: 24,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
  },
});
