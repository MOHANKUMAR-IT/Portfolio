


import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import MyData from './mydata'
import useMediaQuery from '@mui/material/useMediaQuery';

import './technology.css';

export default function Technology(){
  const theme = useTheme();
    const  designer = {"role": "Designer","icon": "design","roleinfo":"I value simple content structure, clean design patterns, and thoughtful interactions.","header1":"Things I enjoy designing:","header1data":"UX, UI, Web, Apps, Logos","header2":"Design tools","header2data":["Canvas","Just in Mind","Wix","Wireframe","Adobe Express"]};
    const coder={"role":"Frontend Developer","icon":"developer","roleinfo":"I like to code things from scratch, and enjoy bringing ideas to life in the browser.","header1":"Languages I speak:","header1data":"HTML,CSS,GIT,JavaScript","header2":"Dev tools","header2data":["Github","Visual Studio Code","Terminal","ReactJs","Bootstrap","Material UI"]};
    const backend={"role":"Backend Developer","icon":"backend","roleinfo":"Incididunt incididunt fugiat reprehenderit irure commodo tempor officia do cillum esse anim.","header1":"My heavylifting helper:","header1data":"Python,Nodejs,Java,C++","header2":"Backend tools","header2data":["Docker","Kubernetes","Flask","MongoDB","Mysql Workbench"]}
    return(
    <Box className='myTechBox'
        sx={{
          display:'inline-blcok',
          alignItems: 'center',
          width: 'fit-content',marginBottom:"400px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,margin:'auto',
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
        <MyData {...designer} />
        <Divider orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"} flexItem />
        <MyData {...coder}/>
        <Divider orientation={useMediaQuery(theme.breakpoints.down("md")) ? "horizontal" : "vertical"} flexItem />
        <MyData {...backend}/>
      </Box>);
}