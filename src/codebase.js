import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Codebase(){
    const projectInfo = [
        {
            "img":"/home.png",
            "title":"Customer Care Registry",
            "description":"Customer grievance's solving site built using IBM cloud technology and flask framework.",
            "github-link":"https://github.com/IBM-EPBL/IBM-Project-31539-1660201957",
            "site-link":"www.tcedesk.tk:31355"
        },
        {
            "img":"https://i.pcmag.com/imagery/articles/04TOvIQpyEoEZsqKyJIEBVS-9.fit_lim.size_1600x900.v1577842694.jpg",
            "title":"Cloud Based Virtula Labs",
            "description":"Cloud virtual labs supported by docker backend and SSH shells for worry free usage for students.",
            "github-link":"https://github.com/MOHANKUMAR-IT/Cloud-Based-Virtual-Labs",
            "site-link":"/404.html",
        },
        {
            "img":"/coding-ide.jpg",
            "title":"Online IDE",
            "description":"Online Programming Environment for C/C++,Python,Java supported by PHP backend and docker containarized execution for safety.",
            "github-link":"https://github.com/MOHANKUMAR-IT/IDE",
            "site-link":"/404.html",
        },
        {
            "img":"/smart-home.jpg",
            "title":"Smart Home",
            "description":"Fan and light Toggle control from Android Application supported by IOT sensors.",
            "github-link":"https://github.com/MOHANKUMAR-IT/Fan-and-Light-control-IOT",
            "site-link":"/404.html",
        },        
        {
            "img":"/jarvis.png",
            "title":"J.A.R.V.I.S",
            "description":"Voice Assistant made using python , selenium framework and voice recognition libraries to act upon voice command.",
            "github-link":"https://github.com/MOHANKUMAR-IT/Fan-and-Light-control-IOT",
            "site-link":"/404.html",
        },    
    ];
    return(
        <div>
            <div className="row p-3">
                <p className="display-5" style={{fontWeight:'500'}}>My Coding Works</p>
            </div>
            <Row xs={1} md={3} className="g-3">
                    { 
                    
                        projectInfo.map((item)=>{
                            return(
                                
                                <Col>
                                    <div className="card m-4" style={{height:'63vh'}}>
                                        <div class="view overlay">
                                            <img className="card-img-top img-fluid" src={item['img']} style={{margin:'auto',maxHeight:'30vh',objectFit:'conatain'}}></img>
                                            <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                            </a>
                                        </div>
                                        
                                        <div className="card-header">
                                            <div className="card-title">
                                            <p style={{fontWeight:'500'}}>{item['title']}</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-tex">
                                                {item['description']}
                                            </div>
                                        </div>
                                        <div className="card-footer d-flex justify-content-around">
                                            <a href={item["github-link"]} target="_blank" style={{textDecoration:'none',color:'black',margin:'0',padding:'0'}}>
                                                <button className="btn btn-primary">Github link</button>
                                            </a>
                                            <a href={item['site-link']} target="_blank" style={{textDecoration:'none',color:'black',margin:'0',padding:'0'}}>
                                                <button className="btn btn-primary">Site link</button>    
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            );
                        }
                    )}
                
            </Row>              
        </div>
    );
}