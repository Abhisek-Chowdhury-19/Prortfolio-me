import './home.css'
import { motion } from "framer-motion";
import { Typewriter,Cursor} from 'react-simple-typewriter';
import me from '../Untitled-1.png'
function Home() {
 
    return (
        <>
        <div className='Images'>
          {/* <img src={me} height='100%'></img> */}
        </div>
        <div className='text'>
        <div className="introback">
Welcome<span>.</span>
</div>
<div className="intro">
Hello, I’m <span > Abhisek Chowdhury</span>, <br></br>Full Stack Developer Based in Kolkata,India.
</div>

<motion.button className='hire-button' whileHover={{ scale: 1.2, }}  whileTap={{ scale: 0.9 }} 
>Hire me</motion.button>
<br></br>
<br></br>
<h1>
  I <Typewriter 
    words={["am a Developer.", " am a Coder.", "Design Beautiful Website.", "am a Freelancer."]}
    loop={true}
   typeSpeed={40}
    
   
   /> 
  <Cursor />
</h1>

</div>

</> 
    );
}
export default Home;