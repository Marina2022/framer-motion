import {useState} from 'react';
import {motion} from "framer-motion";
import s from './SharedLayout.module.scss'
import {Link} from "react-router-dom";


const SharedLayout = () => {

  const [openedIndex, setOpenedIndex] = useState(0)

  return (

    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>

      <motion.ul className={s.list}>
        {
          [1, 2, 3].map((item, index) => {
            return (
              <li
                onClick={() => setOpenedIndex(index)}
                className={s.normal}
                key={index}
              >
                <span className={s.spanny}>
                {item}
                  </span>
                {
                  openedIndex === index && <motion.div layoutId="hello" className={s.active}></motion.div>
                }
              </li>
            )
          })
        }
      </motion.ul>
           
      <div className="mt-2">mamama</div>
    </div>

  );
};

export default SharedLayout;