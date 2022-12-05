import {useState} from 'react'

function Resume(){
    const [show,setShow] = useState(false);

    
    return(
        <div style={{display:'block'}}>
            <button onClick={()=>setShow(!show)}>Show Resume</button>
            {(()=>{
                 if(show){
                    return (<embed src="https://docs.google.com/document/d/e/2PACX-1vRg5UjMTO6gyonmQlKNs0YQLQ2cK0ppblRA40cU2RuBobw9ng0jmp-6BtG3U7Dpu9o1Yi9hZ3vRpidf/pub?embedded=true" type="application/pdf"
                    frameBorder="0"
                    height={"100%"}
                    width={"100%"}
                    ></embed>)
                }
            })()
        }
        </div>
        
    );
};

export default Resume;