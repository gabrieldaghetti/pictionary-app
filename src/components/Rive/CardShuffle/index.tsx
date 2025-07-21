import Rive from "rive-react-native";
import { EShuffleAnimationTypes } from "./types";

type Props = {
  trigger: boolean;
};

export function CardShuffle({ trigger }: Props) {
  return (
    <Rive
      autoplay={true}
      resourceName="document_shuffle"
      style={{ width: 200, height: 200 }}
      animationName={
        trigger
          ? EShuffleAnimationTypes.YELLOW_RED
          : EShuffleAnimationTypes.IDLE
      }
    />
  );
}
