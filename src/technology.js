
import MyData from './mydata'

import './technology.css';

export default function Technology(){

    const  designer = {"role": "Designer","icon": "design","roleinfo":"I value simple content structure, clean design patterns, and thoughtful interactions.","header1":"Things I enjoy designing:","header1data":"UX, UI, Web, Apps, Logos","header2":"Design tools","header2data":["Canvas","Just in Mind","Wix","Wireframe","Adobe Express"]};
    const coder={"role":"Frontend","icon":"developer","roleinfo":"I like to code things from scratch, and enjoy bringing ideas to life in the browser.","header1":"Languages I speak:","header1data":"HTML,CSS,GIT,JavaScript","header2":"Dev tools","header2data":["Github","Visual Studio Code","ReactJs","Bootstrap","Material UI"]};
    const backend={"role":"Backend","icon":"backend","roleinfo":"Automation and deployment of project is the happy phase for me","header1":"My heavylifting helper:","header1data":"Python,Nodejs,Java,C++","header2":"Backend tools","header2data":["Docker","Kubernetes","Flask","MongoDB","Mysql Workbench"]}
    return(
        <div className='card-group'>

            <MyData {...designer} />


            <MyData {...coder}/>


            <MyData {...backend}/>
        
          
        </div>
);
}