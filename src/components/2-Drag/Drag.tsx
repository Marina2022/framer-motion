import {Link} from "react-router-dom";
import {motion, useMotionValue, useTransform} from "framer-motion";
import s from './Drag.module.scss'
import DragChild from "@/components/2-Drag/DragChild.tsx";

const Drag = () => {

  const xPosition = useMotionValue(0)

  const color = useTransform(xPosition, [-200, -100, 0, 100, 200], ['#03f', '#f04', '#aa1', '#fa3', '#345'])
  const scale = useTransform(xPosition, [0, 200], [1, 2])
  const borderRadius = useTransform(xPosition, [-100, -80, 0, 80, 100], ["50%", "30%", "1%", "40%", "50%"])


  return (
    <div className='container drag-component'>
      <motion.div

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        initial={{"--xpos": "10px"} as any}

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        animate={{"--xpos": "500px"} as any}
      >
        <div className='homeLinkDiv'>
          <Link to="/">Home</Link>
        </div>
        <motion.div          

          drag="x"
          dragConstraints={{left: -200, right: 200}}
          style={{
            x: xPosition, backgroundColor: color, scale, borderRadius,
          }}
          className={s.div}>Hello
        </motion.div>

        <DragChild/>
      </motion.div>
    </div>
  );
};

export default Drag;