import './About.css';
import image from '../images/image.jpg';

const About =()=>{
    return(
        <>
        <div className='About' data-aos="fade-up"
     data-aos-duration="700">

            <div className='heading'>
                <h1>About Me</h1>
                <p>Why Choose me!</p>
                <hr />
            </div>
            
            <div className='card'>
                <div className='left_photo'>
                    <img src={image}/>
                </div>
                <div className='right_data'>
                    <p>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</p>
                    <h3>Here are a Few Highlights:</h3>
                    <div className='highlights'>
                        <div className ='inside'>
                        <div className='mark' />
                        <p>Full Stack web and mobile development</p> </div>
                        <div className ='inside'>
                        <div className='mark' />
                        <p>Full Stack web and mobile development</p> </div>
                        <div className ='inside'>
                        <div className='mark' />
                        <p>Full Stack web and mobile development</p> </div>
                        <div className ='inside'>
                        <div className='mark' />
                        <p>Full Stack web and mobile development</p> </div>
                        <div className ='inside'>
                        <div className='mark' />
                        <p>Full Stack web and mobile development</p> </div>
                    </div>
                    <div className='about_btn'>
                    <button>Hire Me</button>
                    <button>Get Resume</button>
                </div>
                </div>   
            </div>
            
        </div>
        </>
    );
}
export default About;