export type RootStackParamList = {
  InitialPage: undefined;
  GamePage: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
