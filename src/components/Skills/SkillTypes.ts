type SkillDetails = {
    SkillTitle: string;
    Description: string;
    Costs:CostDetails[];
    Effect:string;
};

type CostDetails = {
    CostType: number;
    Cost: number;
  };

const ResourceType: string[] = [
    "Mana",
    "Gold",
];

export { ResourceType };
export type { SkillDetails, CostDetails };
