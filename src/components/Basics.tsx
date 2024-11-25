import React, {forwardRef, useRef, useState} from 'react'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";


const MyButton = forwardRef((props, ref) => {
  return (
    <button ref={ref} {...props} >Привет ээээ</button>
  )
})

const AnimatedBtn = motion.create(MyButton)
const Basics = () => {

  const myRef = useRef<HTMLButtonElement | null>(null)

  const [shouldAnimate, setShouldAnimate] = useState(true)
  const handleBtnClick = () => {
    setShouldAnimate(prev => !prev)
    myRef.current!.style.backgroundColor = "rgb(127, 255, 212);";
  }

  const foo = (e) => {
    console.log(e)
  }

  return (
    <div className='container'>
      <div>
        <Link to="/">Home</Link>
      </div>
      <AnimatedBtn ref={myRef} animate={{x: shouldAnimate ? 300 : 0}} onClick={handleBtnClick}
                   whileHover={{scale: 1.1}}
                   whileFocus={{}}
                   whileTap={{backgroundColor: '#111dad'}}
                   onTap={foo}
                   onTapStart={foo}
                   onTapCancel={foo}
      />
    </div>
  );
};

export default Basics;

