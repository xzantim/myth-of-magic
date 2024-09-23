import { Grid2 as Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  incrementMana,
  incrementManaByAmount,
  incrementmanaPerSecondByAmount,
  incrementMaxManaByAmount,
} from "../../slices/manaSlice";
import SkillButton from "../Buttons/SkillButton";
import { SkillDetails } from "../Skills/SkillTypes";
import SkillsData from "../Resources/Skills.json";

export default function MagicTabContent() {
  const dispatch = useDispatch();
  return (
    <div>
      <Typography>Magic</Typography>
      <Grid container spacing={2} margin={2}>
        <Grid size={3}>
          <SkillButton
            Skill={SkillsData.MagicSkills[0] as SkillDetails}
            OnClick={() => dispatch(incrementMana())}
          />
        </Grid>
        <Grid size={3}>
          <SkillButton
            Skill={SkillsData.MagicSkills[1] as SkillDetails}
            OnClick={() => {
              dispatch(incrementManaByAmount(-10));
              dispatch(incrementmanaPerSecondByAmount(0.1));
            }}
          />
        </Grid>
        <Grid size={3}>
          <SkillButton
            Skill={SkillsData.MagicSkills[2] as SkillDetails}
            OnClick={() => {
              dispatch(incrementManaByAmount(-10));
              dispatch(incrementMaxManaByAmount(1));
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
