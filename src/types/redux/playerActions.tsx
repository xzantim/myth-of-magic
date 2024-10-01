interface InitialState {
    unlockedSkills: {unlockId: string, count: number}[];
    gatherManaCount: number;
    gatherGeneralCount: number;
}

const UpdatePlayerActionsAction: string = "PlayerActions";

export default InitialState;
export {UpdatePlayerActionsAction};