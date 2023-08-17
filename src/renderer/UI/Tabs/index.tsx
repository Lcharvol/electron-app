import React, { ReactNode, useState } from 'react';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

type ItemProps = {
  label: string;
  component: () => ReactNode;
};
interface TabsProps {
  items: ItemProps[];
}

function Tabs({ items }: TabsProps) {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <MuiTabs value={value} onChange={handleChange}>
          {items.map((item, index) => (
            <Tab disableRipple key={index} label={item.label} />
          ))}
        </MuiTabs>
      </Box>
      <TabPanel value={value} index={value}>
        {items[value]?.component?.()}
      </TabPanel>
    </Box>
  );
}

export default Tabs;
