import { Grid2 as Grid, Typography } from "@mui/material";
import SkillButton from "../Buttons/SkillButton";
import { SkillDetails } from "../Skills/SkillTypes";
import SkillsData from "../Resources/Skills.json";

export default function MagicTabContent() {
  return (
    <div>
      <Typography>Magic</Typography>
      <Grid container spacing={2} margin={2}>
        <Grid size={3}>
          <SkillButton Skill={SkillsData.MagicSkills[0] as SkillDetails} />
        </Grid>
        <Grid size={3}>
          <SkillButton Skill={SkillsData.MagicSkills[1] as SkillDetails} />
        </Grid>
        <Grid size={3}>
          <SkillButton Skill={SkillsData.MagicSkills[2] as SkillDetails} />
        </Grid>
      </Grid>
    </div>
  );
}
