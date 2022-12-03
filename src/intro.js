import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './intro.css';
import myDevices from './devices.svg';
import myImage from './MeMe.png';




const theme1 = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      ].join(','),
    },
  });

theme1.typography.h3 = {
  fontSize: '3vw',
  '@media (max-width:600px)': {
    fontSize: '10vw',
  }
};

theme1.typography.h4 = {
    fontSize: '2.8vw',
    '@media (max-width:600px)': {
      fontSize: '6vw',
    }
  };

  const theme2 = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',

      ].join(','),
    },
  });
  theme2.typography.h6 = {
    fontSize: '1.5vw',
    '@media screen and (max-width:600px)': {
      fontSize: '4vw',
    },
  };

export default function Intro(){
    return(
        <div className='intro'>
            <div className='intro-heading'>
                <ThemeProvider theme={theme1}>
                    <Typography variant="h3">Designer, Frontend & Backend Developer</Typography>
                </ThemeProvider>
                <br></br>
                <Typography variant="h6">I design and code efficiently, and I love what I do.</Typography>
            </div>
            <div >
                <img src={myImage} className='rounded-circle'  width={"auto"} height={"250rem"} alt="error"></img>
            </div>

            <img src={myDevices} className='img-fluid' alt='Error' style={{width:"800px"}}></img>
            <div className='mt-4 p-5 bg-primary text-white rounded'>
                <ThemeProvider theme={theme1}>
                    <Typography variant="h4" color={"white"} style={{paddingTop: "50px"}}>
                        Hi, I’m Mohan. Nice to meet you.
                    </Typography>
                </ThemeProvider>
                <ThemeProvider theme={theme2}>
                    <Typography variant="h6" color={"white"} style={{paddingTop: "5vh",paddingBottom:"4vh",width:"80%",margin:'auto'}}>
                    I am an extremely curious and self-motivated individual with a huge passion for design in general. As an autodidact, I take a very positive and ego-free approach to all aspects of my life, and I carry a strong work ethic with me wherever I go.
                    </Typography>
                </ThemeProvider>
                
               
            </div>
            
        </div>
    );
}