import './Home.css';
import portfolio from '../images/portfolio.png';
import shape from '../images/shape-bg.png';
const Home =()=>{
    return(
        <>
        <div className='home'>
            
            <div className='left'>

                <div className='intro'>
                    <p>Hello, I'M <strong>Mujtaba</strong></p>
                </div>
                <div class="wrapper">
                     <div class="typing-demo">
                         Front-End-developer.
                    </div>
                </div>
                <div className='txt'>
                    <p>Knack of building front-end of websites using React.js</p>
                </div>
                <div className='btn'>
                    <button>Hire Me</button>
                    <button>Get Resume</button>
                </div>
                
            </div>
            
            <div className='right'>
                <div className ='profile'>
                <img src={portfolio}/>
                </div>
            </div>
        </div>
        <div className='shape'>
            <img src={shape}/>
        </div>
        </>
    );
}
export default Home;