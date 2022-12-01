import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import './intro.css';
import myDevices from './devices.svg';
import myImage from './MeMe.png';
import Technology from './technology'



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
            <div className='profile'>
                <img src={myImage} alt="error"></img>
            </div>

            <img src={myDevices} className='devices' alt='Error'></img>
            <div className='detail-intro'>
                <ThemeProvider theme={theme1}>
                    <Typography variant="h4" color={"white"} style={{paddingTop: "50px"}}>
                        Hi, I’m Mohan. Nice to meet you.
                    </Typography>
                </ThemeProvider>
                <ThemeProvider theme={theme2}>
                    <Typography variant="h6" color={"white"} style={{paddingTop: "5vh",paddingBottom:"4vh",width:"80%",margin:'auto'}}>
                        Ea dolore minim ad ad esse nostrud cupidatat ullamco dolore Lorem reprehenderit incididunt eu exercitation. Amet nulla commodo dolor proident velit tempor ut velit non velit. Proident ut dolor ex officia dolore laborum labore magna consequat incididunt qui duis incididunt. Irure dolor commodo pariatur do sint do consectetur exercitation ut. Proident occaecat velit non id enim excepteur reprehenderit minim. Ea in cillum non ad amet dolore nisi sit velit voluptate ex sint et dolore.
                    </Typography>
                </ThemeProvider>
                
                <Technology/>   
            </div>
        </div>
    );
}