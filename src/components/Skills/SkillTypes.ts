type SkillDetails = {
  SkillTitle: string;
  Description: string;
  Costs: CostDetails[];
  Actions: ActionDetail[];
  Effect: string;
  MaxAmount:number;
};

type ActionDetail = {
  ActionName: string;
  Value: number;
};

type CostDetails = {
  CostType: number;
  Cost: number;
};

const ResourceType: string[] = ["Mana", "Gold"];

export { ResourceType };
export type { SkillDetails, CostDetails, ActionDetail };
