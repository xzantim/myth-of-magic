interface InitialState {
  goldCount: number;
  maxGoldCount: number;
  goldPerSecond: number;
}
const UpdateGoldAction: string = "Gold";

export default InitialState;
export { UpdateGoldAction };
