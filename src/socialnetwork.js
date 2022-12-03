import linkedin from './linkedin-logo.png'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gmail from './gmail.png'
import  WhatsApp  from './whatsapp.png';

function SocialNetwork(){
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
        return(
            <div >
                <div className="row p-3" style={{textAlign:'center'}}>
                    <ThemeProvider theme={theme1}>
                        <Typography variant="h5" color="common.white">You can reach me here :)</Typography>
                    </ThemeProvider>
                </div>
                <div className="row">
                    <div className='col d-flex justify-content-center'>
                        <a href='https://www.linkedin.com/in/mohan-kumar-r/' target="_blank" rel="noopener noreferrer"><img src={linkedin} className='img-fluid'  style={{width:"6vh"}}></img></a>                 
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <a href='https://wa.me/7010969868' target="_blank" rel="noopener noreferrer"><img src={WhatsApp} className='img-fluid'  style={{width:"6vh"}}></img></a>                 
                    </div>
                    <div className='col d-flex justify-content-center'>
                    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=mohankumarr2407@gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} className='img-fluid'  style={{width:"6vh"}}></img></a>
                    </div>
                </div>

            </div>
    );
   
}

export default SocialNetwork;