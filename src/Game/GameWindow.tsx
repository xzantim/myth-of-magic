import { Box, Grid2, Paper, styled, Tab, Tabs } from "@mui/material";
import React from "react";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={2} spacing={3}>
          <div className="Stats-window">
            <Grid2 size={12} spacing={2}>
              <div className="StatItem">Stats</div>
            </Grid2>
            <Grid2 size={12} spacing={2}>
              <div className="StatItem">Magical Knowledge</div>
            </Grid2>
            <Grid2 size={12} spacing={2}>
              <div className="StatItem">Mana</div>
            </Grid2>
            <Grid2 size={12} spacing={2}>
              <div className="StatItem">Gold</div>
            </Grid2>
            <Grid2 size={12} spacing={2}>
              <div className="StatItem">Research Notes</div>
            </Grid2>
          </div>
        </Grid2>
        <Grid2 size={10}>
          <Grid2 size={12}>
            <div className="Navigation-window">
              <Box sx={{ minHeight: "5vh" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{ minHeight: "5vh" }}
                  textColor="inherit"
                  variant="fullWidth"
                >
                  <Tab label="Magic" {...a11yProps(0)} />
                  <Tab label="Gathering" {...a11yProps(1)} />
                  <Tab label="Crafting" {...a11yProps(2)} />
                  <Tab label="Story" {...a11yProps(3)} />
                  <Tab label="Settings" {...a11yProps(4)} />
                </Tabs>
              </Box>
            </div>
          </Grid2>
          <Grid2 size={12}>
            <div className="Action-window">
              <CustomTabPanel value={value} index={0}>
                <h1>Magic</h1>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
              <h1>Gathering</h1>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
              <h1>Crafting</h1>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
              <h1>Story</h1>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
              <h1>Settings</h1>
              </CustomTabPanel>
            </div>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
