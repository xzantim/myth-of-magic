interface InitialState {
  manaCount: number;
  maxManaCount: number;
  manaPerSecond: number;
}
const UpdateManaAction: string = "Mana";

export default InitialState;
export { UpdateManaAction };
