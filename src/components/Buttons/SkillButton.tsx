import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {
  ActionDetail,
  CostDetails,
  ResourceType,
  SkillDetails,
} from "../Skills/SkillTypes";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementMana,
  incrementManaByAmount,
  incrementmanaPerSecondByAmount,
  incrementMaxManaByAmount,
} from "../../slices/manaSlice";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

type SkillButtonProps = {
  Skill: SkillDetails;
};

function DisabledCheck(costs: CostDetails[]): boolean {
  const manaCount: number = useSelector(
    (state: RootState) => state.mana.manaCount
  );
  const goldCount: number = useSelector(
    (state: RootState) => state.gold.goldCount
  );
  var disabled: boolean = false;
  costs.map(function (cost) {
    switch (cost.CostType) {
      case 0:
        disabled = manaCount < cost.Cost;
        return null;
      case 1:
        disabled = goldCount < cost.Cost;
        return null;
      default:
        return null;
    }
  });
  return disabled;
}

export default function SkillButton({ Skill }: SkillButtonProps) {
  const dispatch = useDispatch();

  function HandleSkillButtonAction(actionDetails: ActionDetail[]): void {
    actionDetails?.map(function (action) {
      switch (action.ActionName) {
        case "incrementMana":
          dispatch(incrementMana());
          return null;
        case "incrementManaByAmount":
          dispatch(incrementManaByAmount(action.Value));
          return null;
        case "incrementmanaPerSecondByAmount":
          dispatch(incrementmanaPerSecondByAmount(action.Value));
          return null;
        case "incrementMaxManaByAmount":
          dispatch(incrementMaxManaByAmount(action.Value));
          return null;
        default:
          return null;
      }
    });
  }

  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">{Skill.SkillTitle}</Typography>
            {Skill.Description}
            <br />
            <br />
            {Skill.Costs.map(function (data, index) {
              return (
                <span key={index}>
                  <b>
                    {ResourceType[data.CostType]}: {data.Cost}
                  </b>
                  <br />
                </span>
              );
            })}
            <br />
            <b>Effect:</b> {Skill.Effect}
          </React.Fragment>
        }
      >
        <span>
          <Button
            disabled={DisabledCheck(Skill.Costs)}
            variant="contained"
            onClick={() => HandleSkillButtonAction(Skill.Actions)}
          >
            {Skill.SkillTitle}
          </Button>
        </span>
      </HtmlTooltip>
    </div>
  );
}
