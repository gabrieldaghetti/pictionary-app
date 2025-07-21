import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
};

export function Button({ label, onPress, loading }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{loading ? <ActivityIndicator /> : label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#023C69",
  },
  text: {
    color: "white",
  },
});
