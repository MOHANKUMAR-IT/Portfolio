import Button from '@mui/material/Button';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
export default function Collaboration(){
    return(
        <div style={{height:"300px",position:"relative"}}>
            <p style={{fontSize:"4vh",fontWeight:"900",marginTop:"200px"}}>Intrested in Collaborating with me?</p>
            <p>I’m always open to discussing product design work or partnership opportunities.</p>
            <Button variant="outlined" style={{textTransform: 'none',fontSize:"3vh",borderRadius:"50rem"}} startIcon={<MessageOutlinedIcon />} disableRipple>
                Start a conversation
            </Button>
        </div>
    );
}