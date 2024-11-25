import { motion } from "framer-motion";
import s from "./StaggerItem.module.scss";

const StaggerItem = ({ item }: { item: string }) => {
  return (
    <motion.li
      className={s.item}
      variants={{
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -100 },
      }} // Состояния соответствуют состояниям родителя
    >
      {item}
    </motion.li>
  );
};

export default StaggerItem;
