import { Grid2 as Grid, Typography } from "@mui/material";
import SkillButton from "../Buttons/SkillButton";
import { SkillDetails } from "../Skills/SkillTypes";
import SkillData from "../Resources/Skills.json";

export default function GatheringTabContent() {
  return (
    <div>
      <Typography>Gathering</Typography>
      <Grid container spacing={2} margin={2}>
        <Grid size={3}>
          <SkillButton Skill={SkillData.GatheringSkills[0] as SkillDetails} />
        </Grid>
        <Grid size={3}>
          <SkillButton Skill={SkillData.GatheringSkills[1] as SkillDetails} />
        </Grid>
        <Grid size={3}>
          <SkillButton Skill={SkillData.GatheringSkills[2] as SkillDetails} />
        </Grid>
      </Grid>
    </div>
  );
}
