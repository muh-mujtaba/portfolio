import './Resume.css';
import image from '../images/image.jpg';

const Resume =()=>{
    return(
        <>
        <div className='Resume' data-aos="fade-up"
     data-aos-duration="700">

            <div className='res_heading'>
                <h1>Resume</h1>
                <p>My formal Bio Details</p>
                <hr />
            </div>
            
            <div className='res_card'>
                <div className='res_left'>
                <div class="sidebar">
                        <a class="active" href="#">Education</a>
                        <a href="#">Work History</a>
                         <a href="#">Programming Skills</a>
                         <a href="#">Projects</a>
                </div>
                </div>
                <div className='res_right_data'>
                    <div className='res_highlights'>
                        <div className ='res_inside'>
                        <div className='res_mark' />
                        <p>Government College University, Faisalabad</p>
                        <div className='dgree'><a>Bachelor of science Information Technology</a></div> </div>
                        <div className ='res_inside'>
                        <div className='res_mark' />
                        <p>Punjab Group of Colleges, Gujrat</p>
                        <div className='dgree'><a>Fsc pre Engineering</a></div> </div>
                        <div className ='res_inside'>
                        <div className='res_mark' />
                        <p>Govt. Islamia High School, Gujrat</p>
                        <div className='dgree'><a>Matric in Computer Science</a></div> </div>
                        
    
                    </div>
                    
                </div>
            </div>
            
        </div>
        </>
    );
}
export default Resume;