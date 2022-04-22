import './Contact.css';
import mailz from '../images/mailz.jpeg';

const Contact =()=>{
    return(
        <>
        <div className='Contact' data-aos="fade-up"
     data-aos-duration="700">

            <div className='con_heading'>
                <h1>Contact Me</h1>
                <p>Lets Keep In Touch</p>
                <hr />
            </div>
            
            <div className='con_card'>
                <div className='con_card_inside'>
                <h3>Get In Touch 📧</h3>
                <p>Send Your Email Here!</p>
                <div className='con_left_photo'>
                    <img src={mailz}/>
                </div>
                </div>
                <div className='con_right_data'>
                    
                    <div className='input_tags'>
                        <h3>Name</h3>
                        <input type='text' placeholder='Enter your name' />
                        <h3>E-mail</h3>
                        <input type='text' placeholder='Enter your e-mail' />
                        <h3>Message</h3>
                        <input type='text' placeholder='Enter your msg here!' />
                    </div>
                    
                    <div className='con_btn'>
                    <button>send</button>
                    </div>
                </div>   
            </div>
            
        </div>
        </>
    );
}
export default Contact;