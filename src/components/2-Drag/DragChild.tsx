import {motion} from 'framer-motion'
import s from './DragChild.module.scss'

const DragChild = () => {
  return (
    <div>
      <motion.div
        className={s.childDiv}
        
      >
        yeah
      </motion.div>
    </div>
  );
};

export default DragChild;