import {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {useMotionValueEvent, useScroll, useTransform, motion} from "framer-motion";
import s from './Whatever.module.scss'

const Whatever = () => {

  const squareRef = useRef<HTMLDivElement | null>(null)

  const {scrollYProgress} = useScroll({
    target: squareRef,
    offset: ["start 50%", "end 50%"]
    //offset: ["start start", "end end"]
  })

  const [value, setValue] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (val: number) => setValue(val))

  const xPoss = useTransform(scrollYProgress, [0, 1], [0, 300])

  return (
    <div className='container'>

      <div>
        <Link to="/">Home</Link>

      </div>
      {/*<div style={{height: 200}}></div>*/}

      <div className={s.spacer}></div>
      <div className={s.flexCont}>
        <div className={s.square} ref={squareRef}>{value}</div>
        <motion.div className={s.square} style={{x: xPoss}}>Animating</motion.div>

        <motion.ul className={s.list} style={{x: xPoss}}>
          <motion.li className={s.squareMini}>1</motion.li>
          <motion.li className={s.squareMini}>2</motion.li>
          <motion.li className={s.squareMini}>3</motion.li>
        </motion.ul>
      </div>
            
      <div className={s.spacer}></div>
    </div>
  );
};

export default Whatever;