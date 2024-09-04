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
              <Tab label="Magic" {...a11yProps(0)} />
              <Tab label="Gathering" {...a11yProps(1)} />
              <Tab label="Crafting" {...a11yProps(2)} />
              <Tab label="Story" {...a11yProps(3)} />
              <Tab label="Settings" {...a11yProps(4)} />
            </Tabs>
          </Box>
        </Grid2>
        <Grid2 size={2} spacing={3}>
          <div className="Stats-window">
            <Grid2 size={12} spacing={2} sx={{ minHeight: "50vh" }}>
              <div className="StatItem">Stats</div>
            </Grid2>
          </div>
        </Grid2>
        <Grid2 size={8}>
          <Grid2 size={12}>
            <div className="Action-window" style={{minHeight:"50vh"}}>
              <CustomTabPanel value={value} index={0}>
                asdf
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                fdsa
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                sdfsdaf
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                fffs
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                aasf
              </CustomTabPanel>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 size={2}>
        <div className="Resource-window">
            <Grid2 size={12} spacing={2} sx={{ minHeight: "50vh" }}>
              <div className="ResourceItem">Resources</div>
            </Grid2>
          </div>
        </Grid2>
      </Grid2>
    </Box>
  );
}
