import './Navbar.css'


const Navbar =()=>{
    return(
        <>
        <div className='container'>
            <div className='myname'>
                <p>MUJTABA</p>
            </div>
            <div className='navbar'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Resume</a></li>
                    <li><a>Testimonial</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            
            </div>
        </>
    );
}

export default Navbar;