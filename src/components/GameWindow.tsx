import { Box, Button, Grid2, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  autoIncrementMana,
} from "../slices/manaSlice";
import {
  autoIncrementGold,
  incrementGold,
  incrementGoldByAmount,
  incrementGoldPerSecondByAmount,
  incrementMaxGoldByAmount,
} from "../slices/goldSlice";
import MagicTabContent from "./Magic/MagicTabContent";

const ticksPerSec = 10;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

var myInterval: NodeJS.Timeout;

export default function GameWindow() {
  const dispatch = useDispatch();

  function updateResources() {
    dispatch(autoIncrementMana(ticksPerSec));
    dispatch(autoIncrementGold(ticksPerSec));
  }

  clearInterval(myInterval);
  myInterval = setInterval(function () {
    updateResources();
  }, 1000 / ticksPerSec);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const manaCount: number = useSelector(
    (state: RootState) => state.mana.manaCount
  );
  const maxManaCount: number = useSelector(
    (state: RootState) => state.mana.maxManaCount
  );
  const goldCount: number = useSelector(
    (state: RootState) => state.gold.goldCount
  );
  const maxGoldCount: number = useSelector(
    (state: RootState) => state.gold.maxGoldCount
  );

  return (
    <Box sx={{ flexGrow: 1 }} mx={1}>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab label="Story" {...a11yProps(0)} />
              <Tab label="Magic" {...a11yProps(1)} />
              <Tab label="Gathering" {...a11yProps(2)} />
              <Tab label="Crafting" {...a11yProps(3)} />
              <Tab label="Character" {...a11yProps(4)} />
              <Tab label="Settings" {...a11yProps(5)} />
            </Tabs>
          </Box>
        </Grid2>
        <Grid2 size={2}>
          <div className="Resource-window">
            <Grid2 size={12} spacing={2} sx={{ minHeight: "50vh" }}>
              <div className="ResourceItem">Resources</div>
              <Typography>Mana: </Typography>
              <Typography>
                {manaCount.toFixed(2)} / {maxManaCount}
              </Typography>
              <Typography>Gold:</Typography>
              <Typography>
                {goldCount.toFixed(2)} / {maxGoldCount}
              </Typography>
            </Grid2>
          </div>
        </Grid2>
        <Grid2 size={10}>
          <Grid2 size={12}>
            <div className="Action-window" style={{ minHeight: "50vh" }}>
              <CustomTabPanel value={value} index={0}>
                Story
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <MagicTabContent/>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Typography>Gathering</Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(incrementGold());
                  }}
                >
                  Scavenge Gold
                </Button>
                <Button
                  variant="contained"
                  disabled={goldCount < 10}
                  onClick={() => {
                    dispatch(incrementGoldByAmount(-10));
                    dispatch(incrementGoldPerSecondByAmount(0.1));
                  }}
                >
                  Buy Gold Mine (10)
                </Button>
                <Button
                  variant="contained"
                  disabled={goldCount < 10}
                  onClick={() => {
                    dispatch(incrementGoldByAmount(-10));
                    dispatch(incrementMaxGoldByAmount(25));
                  }}
                >
                  Buy Gold Storage (10)
                </Button>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Crafting
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                Character
              </CustomTabPanel>
              <CustomTabPanel value={value} index={5}>
                Settings
              </CustomTabPanel>
            </div>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
