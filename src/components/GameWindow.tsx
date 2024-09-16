import { Box, Button, Grid2, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { incrementMana } from "../slices/manaSlice";

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

export default function GameWindow() {
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
  const dispatch = useDispatch();

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
              <Tab label="Stats" {...a11yProps(4)} />
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
                {manaCount} / {maxManaCount}
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
                <Typography>Magic</Typography>
                <Button
                  variant="contained"
                  onClick={() => dispatch(incrementMana())}
                >
                  Gather Mana
                </Button>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Gathering
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Crafting
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                Stats
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
