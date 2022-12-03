
import SocialNetwork from './socialnetwork';
export default function Footer(){

    const footer = {
        backgroundColor:"black",
        height:"20vh",
        margin:'0'
    }

    return(
        <div >
            <img src="https://uploads-ssl.webflow.com/5f2d95cb45872fc361ffb5a6/5f34d27b3d78652e77929e97_WavyDivider_Bottom.svg" style={{margin:'0'}} alt="" />
            <div style={footer}>
                <SocialNetwork/>
            </div>
        </div>
        

    );
}