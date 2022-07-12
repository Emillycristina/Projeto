
import *  as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cadastro2 from '../Cadastro2/Cadastro2';
import Situacao from '../Situacao/Situacao';
import Beneficiario from "../Beneficiario/Beneficiario"
import Folder from "../Folder/Folder";





function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%' , marginLeft:"40px", marginTop:"30px", marginBottom:"40px", marginRight:"100px", paddingLeft:"500px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="CADASTRO" style={{color:"black"}} {...a11yProps(0)} />
          <Tab label="SITUAÇÃO" style={{color:"black"}} {...a11yProps(1)} />
          <Tab label="BENEFIC." style={{color:"black"}} {...a11yProps(2)} />
          <Tab label="DOCs" style={{color:"black"}} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Cadastro2/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Situacao/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Beneficiario/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Folder/>
      </TabPanel>
    </Box>
  );
}
