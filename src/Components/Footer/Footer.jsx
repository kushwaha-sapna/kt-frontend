// import React from 'react'
// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div>
//       <div>
//         <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'></div>
//         <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'></div>
//         <div className='w-full md:w-1/3 mb-8 md:mb-0'>
//         <p  className='text-gray-400 mt-4'>
//             this is the footer of the webpage
//         </p>
            
            
//              </div>
//              <div  className='w-full md:w-1/5 mb-8 md;mb-0'>

//                 <h3 className='text-black text-lg font-bold mb-4'>Company</h3>
                
//                <ul  className='flex flex-col gap-2 text-gray-400'>

//        <Link to="/" className='hover:text-white'>Home</Link>
//       <Link to="/about" className='hover:text-white'>About us</Link>
//        <Link to="/contact" className='hover:text-white'>Contact</Link>
//          <Link to="/policy" className='hover:text-white'>Privacy policy</Link>
// </ul>


                
//              </div>
//              <div className='w-full md:w-1/3'>
//              <h1  className='text-black text-lg font-bold mb-4'>text h1</h1>
//              <p  className='text-gray-400 mb-4 max-w-80'> paragraph text h1</p>


//              </div>
//       </div>
//       <div></div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='bg-gray-900 w-full overflow-hidden' id='footer'>
      
      <div className='pt-10 px-4 md:px-20 lg:px-32'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>

          {/* Left Section */}
          <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <p className='text-gray-400 mt-4'>
              This is the footer of the webpage
            </p>
          </div>

          {/* Middle Section */}
          <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>

            <ul className='flex flex-col gap-2 text-gray-400'>
              <li><Link to="/" className='hover:text-white'>Home</Link></li>
              <li><Link to="/about" className='hover:text-white'>About us</Link></li>
              <li><Link to="/contact-us" className='hover:text-white'>Contact</Link></li>
              <li><Link to="/policy" className='hover:text-white'>Privacy policy</Link></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className='w-full md:w-1/3'>
            <h3 className='text-white text-lg font-bold mb-4'>
              Subscribe to our newsletter
            </h3>

            <p className='text-gray-400 mb-4 max-w-80'>
              Paragraph text here
            </p>

            <div className='flex gap-2'>
              <input
                type="email"
                placeholder='Enter your email'
                className='px-3 py-2 border border-gray-700 rounded focus:outline-none w-full md:w-auto'
              />
              <button className='py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600'>
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className='text-center text-gray-500 text-sm py-4 border-t border-gray-800 mt-8'>
        Copyright 2024 © ZT-technology
      </div>

    </div>
  )
}

export default Footer;