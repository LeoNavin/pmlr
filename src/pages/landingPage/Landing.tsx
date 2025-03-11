import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./landing.css";
import { Navbar, MobileNav, Typography, Button, IconButton, Card } from '@material-tailwind/react';
import Header from '../../components/Header';
import DropdownNotification from '../../components/Header/DropdownNotification';
import DropdownUser from '../../components/Header/DropdownUser';
import logo from '../../assets/download1.png'
import webbg from '../../assets/webbg.png'


const Landing = () => {
    const navigate = useNavigate();


    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex fixed flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="pt-4 text-black font-medium "
        >
          <a href="#" className="flex items-center">
            Pages
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="pt-4 text-black font-medium "
        >
          <a href="#" className="flex items-center">
            Account
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="pt-4 text-black font-medium "
        >
          <a href="#" className="flex items-center">
            Blocks
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className=""
        >
          <a href="#" className="flex items-center">
            Docs
          </a>
        </Typography>
      </ul>
    );

    return (

      <div className=' bg-black  vh-100'>
          <div className="bg-white rounded-xl box-shadow  container header">
            <div className="max-w-5xl mx-auto flex justify-between items-center ">
              <div className="flex items-start">
                <img src={logo} alt="Logo" className="h-18" />
              </div>

              <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-700 hover:text-blue-500 font-semibold">Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-blue-500 font-semibold">Company</Link>
                <Link to="/prices" className="text-gray-700 hover:text-blue-500 font-semibold">Support</Link>
                <Link to="/support" className="text-gray-700 hover:text-blue-500 font-semibold">Contact</Link>
                <Link to="/company" className="text-gray-700  hover:text-blue-500 font-semibold">Admin Login</Link>
              </nav>

                <button className="text-orange-500 font-semibold hover:text-white hover:rounded-md  px-3 py-2 hover:bg-orange-500">Login</button>
                <button className="text-orange-500  font-semibold hover:bg-orange-500 hover:text-white  rounded-md hover:rounded-md px-3 py-2  ">Sign Up</button>
              </div>
            </div>
            </div>

            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={webbg} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={"https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg"} className="d-block w-100 " alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={webbg} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className='d-flex justify-center align-items-center'>
              Page content
            </div>
      </div>

        //   <div className="bg-white navheader shadow container mt-5">
        //   <div className="max-w-5xl mx-auto flex justify-between items-center">
        //     <div className="flex items-start">
        //       <img src={logo} alt="Logo" className="h-18" />
        //       {/* <span className="text-lg font-bold text-blue-600">CSDDD</span> */}
        //     </div>
    
        //     <div className="flex items-center space-x-4">
        //       <nav className="hidden md:flex space-x-6">
        //         <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        //         <Link to="/products" className="text-gray-700 hover:text-blue-500">Company</Link>
        //         <Link to="/prices" className="text-gray-700 hover:text-blue-500">Support</Link>
        //         <Link to="/support" className="text-gray-700 hover:text-blue-500">Contact</Link>
        //         <Link to="/company" className="text-gray-700 hover:text-blue-500">Admin Login</Link>
        //       </nav>
    
        //       <button className="text-orange-500 font-semibold hover:text-white hover:rounded-md px-3 py-2 hover:bg-orange-500">Login</button>
        //       <button className="text-orange-500 font-semibold hover:bg-orange-500 hover:text-white rounded-md px-3 py-2">Sign Up</button>
        //     </div>
        //   </div>
    
        //   {/* Marquee with multiple images */}
        //   {/* <div className="marquee-container">
        //     <ul className="marquee-list">
        //       <li><img src="image1.jpg" alt="Image 1" /></li>
        //       <li><img src="image2.jpg" alt="Image 2" /></li>
        //       <li><img src="image3.jpg" alt="Image 3" /></li>
        //     </ul>
        //   </div> */}
        // </div>
       
    );
}

export default Landing;





