import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { CostDetails, ResourceType, SkillDetails } from "../Skills/SkillTypes";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

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
  OnClick: () => void;
};

function DisabledCheck(Costs: CostDetails[]): boolean {
  const manaCount: number = useSelector(
    (state: RootState) => state.mana.manaCount
  );
  const goldCount: number = useSelector(
    (state: RootState) => state.gold.goldCount
  );
  var disabled: boolean = false;
  Costs.map(function (cost) {
    switch (cost.CostType) {
      case 0:
        disabled = manaCount < cost.Cost;
        return;
      case 1:
        disabled = goldCount < cost.Cost;
        return;
      default:
        return;
    }
  });
  return disabled;
}

export default function SkillButton({ Skill, OnClick }: SkillButtonProps) {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">{Skill.SkillTitle}</Typography>
            {Skill.Description}
            <br />
            <br />
            {Skill.Costs.map(function (data) {
              return (
                <span>
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
            onClick={() => OnClick()}
          >
            {Skill.SkillTitle}
          </Button>
        </span>
      </HtmlTooltip>
    </div>
  );
}
