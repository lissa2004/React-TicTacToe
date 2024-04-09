import { createContext } from "react";
import useSound from "../hooks/useSounds";

export const SoundEffectsContext = createContext({});

export function SoundEffectsContextProvider({ children }) {

  const options = {
    volume: 0.05,
    timeout: 200
  }
  const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

  const hoverSfx = useSound(hoverPath, options)
  const clickSfx = useSound(clickedPath, options)
  const winSfx = useSound(winnerPath, {...options, timeout: 1000})
  const completedSfx = useSound(completedPath, {...options, timeout: 2000})

  return (
    <SoundEffectsContext.Provider value={{ hoverSfx, clickSfx, winSfx, completedSfx }}>
      {children}
    </SoundEffectsContext.Provider>
  );
}