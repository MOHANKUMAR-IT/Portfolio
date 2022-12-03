import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Resume from './resume'
export default function CurrentCompany(){
    
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
        <div style={{minHeight:"50vh"}}>
            <div className="row justify-content-center display-4">
                <ThemeProvider theme={theme1}>
                    <Typography variant="h3"> Work Experience</Typography>
                </ThemeProvider>
            </div>
            <div className="row pt-5 pb-5">
                <div className="col-sm">
                    <img src="https://www.zohowebstatic.com/sites/default/files/zoho-logo-zh-2x.png" className="img-fluid" ></img>
                </div>
                <div className="col-sm">
                    
                    <p className="display-6 pt-3">Internship @Zoho Corp Chennai</p>
                    <p className='display-6 pb-5'>
                        2022-23
                    </p>
                    <Resume/>
                </div>
            </div>
        </div> 
    );
}