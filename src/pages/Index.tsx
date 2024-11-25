import s from './Index.module.scss'
import {Link} from "react-router-dom";
import Drag from "@/components/2-Drag/Drag.tsx";
import AnimatePresence from "@/components/3-AnimatePresence/AnimatePresence.tsx";
import Stagger from "@/components/4-Stagger/Stagger.tsx";
import ScrollTrigger from "@/components/6-ScrollTrigger/ScrollTrigger.tsx";
import ScrollScrubbing from "@/components/7-ScrollScrubbing/ScrollScrubbing.tsx";
import Sticky from "@/components/9-Sticky/Sticky.tsx";

const Index = () => {
  return (
    <>
      <header >
        <div className="container">         

          <nav >
            <ul className={s.navList}>              
              <li>
                <Link to="/basics">Basics</Link>
              </li>      
              <li>
                <Link to="/first">First ex</Link>
              </li>      
              <li>
                <Link to="/Drag">Drag</Link>
              </li>      
              <li>
                <Link to="/AnimatePresence">AnimatePresence</Link>
              </li>       
              <li>
                <Link to="/Stagger">Stagger</Link>
              </li>         
              <li>
                <Link to="/ResponsiveDraw">ResponsiveDraw</Link>
              </li>               
              <li>
                <Link to="/ScrollTrigger">ScrollTrigger</Link>
              </li>             
              <li>
                <Link to="/ScrollScrubbing">ScrollScrubbing</Link>
              </li>              
              <li>
                <Link to="/Whatever">Whatever</Link>
              </li>             
              <li>
                <Link to="/Sticky">Sticky</Link>
              </li>                  
              <li>
                <Link to="/Layout">Layout</Link>
              </li>                    
              <li>
                <Link to="/LayoutTask">LayoutTask</Link>
              </li>            
            </ul>
          </nav>
        </div>
      </header>
      <main className={s.main}>
        <div className="container">
          <div>Привееет</div>
        </div>

      </main>
    </>
  );
};

export default Index;