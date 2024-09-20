import { Button, Grid2 as Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementMana,
  incrementManaByAmount,
  incrementmanaPerSecondByAmount,
  incrementMaxManaByAmount,
} from "../../slices/manaSlice";
import { RootState } from "../../store/store";
import SkillButton from "../Buttons/SkillButton";

export default function MagicTabContent() {
  const dispatch = useDispatch();
  const manaCount: number = useSelector(
    (state: RootState) => state.mana.manaCount
  );
  return (
    <div>
      <Typography>Magic</Typography>
      <Grid container spacing={2} margin={2}>
        <Grid size={3}>
          <SkillButton
            SkillTitle="Gather Mana"
            Description="Gather mana from the environment manually."
            Cost={0}
            Disabled = {false}
            Effect="Gain a single unit of mana"
            OnClick={() => dispatch(incrementMana())}
          />
        </Grid>
        <Grid size={3}>
          <SkillButton
            SkillTitle="Buy Condenser"
            Description="Purchase a mana condesner. This object automatically graws in mana from the environment."
            Cost={10}
            Disabled = {manaCount < 10}
            Effect="Gain 0.1 mana per second"
            OnClick={() => {
              dispatch(incrementManaByAmount(-10));
              dispatch(incrementmanaPerSecondByAmount(0.1));
            }}
          />
        </Grid>
        <Grid size={3}>
          <SkillButton
            SkillTitle="Buy Mana Gem"
            Description="Purchase a mana gem. A mana gem increases your maximum mana storage."
            Cost={10}
            Disabled = {manaCount < 10}
            Effect="Increase max mana by 1"
            OnClick={() => {
              dispatch(incrementManaByAmount(-10));
              dispatch(incrementMaxManaByAmount(1));
            }}
          />
        </Grid>
        <Grid size={3}>
          <SkillButton
            SkillTitle="testSkill"
            Description="A description on a test button"
            Cost={0}
            Disabled = {false}
            Effect="This button does nothing"
            OnClick={() => {}}
          />
        </Grid>
      </Grid>
    </div>
  );
}
