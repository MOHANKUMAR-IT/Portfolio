
export default function Codebase(){
    const projectInfo = [
        {
            "img":"http://www.tcedesk.tk:31355/home.png",
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
            "site-link":"",
        },
        {
            "img":"http://www.tcedesk.tk:31355/home.png",
            "title":"Customer Care Registry",
            "description":"Customer grievance's solving site built using IBM cloud technology and flask framework.",
            "github-link":"https://github.com/IBM-EPBL/IBM-Project-31539-1660201957"
        }
    ];
    return(
        <div>
            <div className="row p-3">
                <p className="display-5" style={{fontWeight:'500'}}>My Coding Works</p>
            </div>
            <div className="row">
                <div class="col-12">
                <div className="card-group">
                { 
                    projectInfo.map((item)=>{
                        return(
                            
                           
                                <div className="card m-4" >
                                    <div class="view overlay">
                                        <img className="card-img-top img-fluid" src={item['img']} style={{width:'30vw',margin:'auto'}}></img>
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
                            
                        );
                    }
                )}
            
            </div>
                </div>
            </div>
            
            
           
        </div>
    );
}