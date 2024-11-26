import {motion} from "framer-motion";
import {Song} from "@/components/13-TaskSongPreview/MainSong.tsx";

export const SongPreview = ({song, setSelectedSong}: { song: Song, setSelectedSong: (song: Song) => void }) => {
  return (
    <motion.div
      layoutId={`song-${song.id}`}
      className="rounded-xl grid cursor-pointer grid-cols-1 grid-rows-2 items-center gap-x-3 bg-white p-4 text-black md:grid-cols-[auto_1fr]"
      onClick={() => setSelectedSong(song)}
    >
      <motion.img
        layoutId={`img-${song.id}`}
        src={song.cover}
        alt={song.title}
        className="rounded-xl row-span-2 h-8 w-8"
      />

      <motion.div
        layoutId={`title-${song.id}`}
        className="text-lg font-bold leading-snug">
        <motion.span layout className="block">
          {song.title}
        </motion.span>
      </motion.div>

      <motion.div
        layoutId={`artist-${song.id}`}
        className="text-sm leading-snug">
        <motion.span layout className="block">
          {song.artist}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
      