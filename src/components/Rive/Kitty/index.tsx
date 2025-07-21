import { useEffect, useRef } from "react";
import Rive, { RiveRef } from "rive-react-native";
import { EKittyAnimationTypes, EKittyTriggerTypes } from "./types";

type Props = {
  triggerInteraction: boolean;
};

export function Kitty({ triggerInteraction }: Props) {
  const kittyRef = useRef<RiveRef>(null);

  const handleInteraction = () => {
    kittyRef.current?.setInputState(
      EKittyAnimationTypes.MENU_MACHINE,
      EKittyTriggerTypes.YES_TRIG,
      true
    );
  };

  useEffect(() => {
    if (triggerInteraction) {
      handleInteraction();
    }
  }, [triggerInteraction]);

  return (
    <Rive
      ref={kittyRef}
      autoplay={true}
      resourceName="kitty"
      style={{ width: 200, height: 200 }}
    />
  );
}
