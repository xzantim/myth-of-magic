import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

  type SkillButtonProps = {
    SkillTitle: string,
    Description: string,
    Cost: number,
    Effect: string,
    Disabled: boolean,
    OnClick: () => void
  }

  export default function SkillButton({SkillTitle, Description, Cost, Effect, Disabled, OnClick} : SkillButtonProps) {
    return (
      <div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">{SkillTitle}</Typography>
              {Description}
              <br/>
              <br/>
              <b>Cost:</b> {Cost}
              <br/>
              <b>Effect:</b> {Effect}
            </React.Fragment>
          }
        >
          <Button disabled={Disabled} variant="contained" onClick={() => OnClick()}>{SkillTitle}</Button>
        </HtmlTooltip>
      </div>
    );
  }