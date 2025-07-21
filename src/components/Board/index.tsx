import { Canvas, Path, Skia, SkPath } from "@shopify/react-native-skia";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@/components/Button";
import { Dimensions } from "react-native";
import { ShuffleModal } from "../ShuffleModal";

const { width } = Dimensions.get("screen");

export function Board() {
  const [paths, setPaths] = useState<SkPath[]>([]);
  const [_, setTick] = useState(0);
  const currentPath = useRef<SkPath | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onStart = ({ nativeEvent }: any) => {
    const path = Skia.Path.Make();
    path.moveTo(nativeEvent.locationX, nativeEvent.locationY);
    currentPath.current = path;
    setTick((t) => t + 1);
  };

  const onMove = ({ nativeEvent }: any) => {
    if (currentPath.current) {
      currentPath.current.lineTo(nativeEvent.locationX, nativeEvent.locationY);
      setTick((t) => t + 1);
    }
  };

  const onEnd = () => {
    if (currentPath.current && !currentPath.current.isEmpty()) {
      setPaths((prev) => [...prev, currentPath.current.copy()]);
    }

    setTimeout(() => {
      currentPath.current = null;
      setTick((t) => t + 1);
    }, 100);
  };

  const handleUndo = () => {
    setPaths((prev) => prev.slice(0, prev.length - 1));
  };

  const handleNewGame = () => {
    setPaths([]);
    currentPath.current = null;
    setTick((t) => t + 1);

    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Canvas
        style={styles.canvas}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onTouchEnd={onEnd}
      >
        {paths.map((path, index) => (
          <Path
            key={index}
            path={path}
            color="black"
            style="stroke"
            strokeWidth={2}
          />
        ))}

        {currentPath.current && (
          <Path
            path={currentPath.current}
            color="black"
            style="stroke"
            strokeWidth={2}
          />
        )}
      </Canvas>

      <View style={styles.footer}>
        <Button label="Undo" onPress={handleUndo} />
        <Button label="New Game" onPress={handleNewGame} />
      </View>

      <ShuffleModal
        visible={isModalVisible}
        key={isModalVisible.toString()}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    width,
  },
  footer: {
    gap: 8,
    padding: 16,
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#C4CAD0",
  },
});
