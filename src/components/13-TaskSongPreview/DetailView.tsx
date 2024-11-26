import {motion} from "framer-motion";
import {Song} from "@/components/13-TaskSongPreview/MainSong.tsx";


export const DetailView = ({song, onClose} : {song: Song, onClose: ()=>void}) => {
  return (
    <motion.div
      layoutId={`song-${song.id}`}
      className="rounded-xl absolute inset-0 z-10 grid auto-rows-min place-items-center bg-white p-4 text-center text-black">
      <motion.img
        layoutId={`img-${song.id}`}
        src={song.cover}
        alt={song.title}
        className="rounded-xl mb-4 aspect-square w-[200px]"
      />

      <motion.div
        layoutId={`title-${song.id}`}
        className="text-lg font-bold">
        <motion.span layout className="block">
          {song.title}
        </motion.span>
      </motion.div>

      <motion.div
        layoutId={`artist-${song.id}`}
        className="text-sm">
        <motion.span layout className="block">
          {song.artist}
        </motion.span>
      </motion.div>

      <motion.p
        layout
        variants={{
          visible: {
            opacity: 1, y: 0,
            transition: {
              delay: .3
            }
          },
          hidden: {
            opacity: 0, y: 20
          }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="max-w-[80%] text-sm">
        {song.description}
      </motion.p>


      <motion.button
        layout
        variants={{
          visible: {
            opacity: 1, y: 0,
            transition: {
              delay: .3
            }
          },
          hidden: {
            opacity: 0, y: 20
          }
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        className="mt-4 w-full rounded-full bg-black px-4 py-2 text-white"
      >
        Back
      </motion.button>
    </motion.div>

  );
};