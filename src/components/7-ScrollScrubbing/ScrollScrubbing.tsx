import {useRef, useState} from 'react';
import s from './ScrollScrubbing.module.scss';
import {Link} from "react-router-dom";
import {motion, useMotionValueEvent, useScroll, useSpring, useTransform} from "framer-motion";

const ScrollScrubbing = () => {

  const {scrollYProgress} = useScroll()
  const springValue = useSpring(scrollYProgress)

  const scaleValue = useTransform(springValue, [0,1], [1,2])
  
  const squareRef = useRef<HTMLDivElement|null>(null)
  const {scrollYProgress: scrollYProgress2} = useScroll({
    target: squareRef,
    offset: ["start start", "start end"]
 
  })

  
  const [value, setValue] = useState(0)
  
  useMotionValueEvent(scrollYProgress2, 'change', (val:number)=>setValue(val) )
  
  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>
      <div className={s.spacer}></div>

      <motion.div
        style={{scale:  scaleValue}}
        className={s.motionDiv}>
        {/*{scaleValue}*/}
      </motion.div>     
      
      <div ref={squareRef} className={s.square}>{value}</div>
            
      <div className={s.spacer} ></div>
    </div>
  );
};

export default ScrollScrubbing;