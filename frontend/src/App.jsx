
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Computer from './assets/computer'
import Dhilip from './assets/Dhilip'
import LoginForm from './assets/form'
import Cerficate from './cerficate'
import Course from './course'
import Name from './name'
import Quis from './quis'
import Reviews from './reviews'
import Santhosh from './santhosh'
 import Syllabus from './Syllabus'
import Learning from './learning';
import FAQAccordion from './FAQAccordion';

function App() {
 

  return (
    <>
    {/* <div className='flex justify-center'>
    <Computer/> 
    <LoginForm/>  
    
     </div>    */}
      {/* <Course/> 
     <Syllabus/> 
      <Cerficate/> 
      <Reviews/>   */}
     {/* <Santhosh/>  */}
       {/* <Quis/>   */}
        < BrowserRouter>
      <Routes> 
      
        <Route path='/' element={<Dhilip/>}></Route> 
         <Route path='/page' element={<Name/>}></Route>
         <Route path='/learning' element={<Learning/>}></Route>
         </Routes>
         </BrowserRouter>   
       
         
    </>
  )
}

export default App
