import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';

import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';

function renderSwitch(param) {
    switch(param) {
        case "design":
            return <FormatColorFillIcon sx={{ width: 60, height: 60, color: "black"}} />
  
        case "developer":
            return <CodeIcon sx={{ width: 60, height: 60, color: "black"}} />
        case "backend":
            return <ComputerIcon sx={{ width: 60, height: 60, color: "black"}} />
        default:
            return "Nothing";
    }
  }

export default function MyData(props){
      const styl = {
        display:'flex',marginTop:'10vh',justifyContent: 'center',alignItems:'center',
      }
    return(
        <div className="card" style={styl}>
            <Avatar
                alt="Tech"
                sx={{ width: 90, height: 90 ,backgroundColor:"#42FFC4",margin:'3vh auto'}}
            >
            {renderSwitch(props.icon)}  
            </Avatar>

            <h1>{props.role}</h1>
            
            <p style={{width:"20rem"}}>{props.roleinfo}</p>

            <h5 style={{color:"blue"}}>{props.header1}</h5>

            <p>{props.header1data}</p>

            <h5 style={{color:"blue"}}>{props.header2}</h5>

            {props.header2data.map(item=>{return(<p>{item}</p>)})}

        </div>
    );
}