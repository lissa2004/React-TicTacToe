import {useState, createContext} from 'react'
import useSounds from '../hooks/useSounds';


export const SoundEffectsContext = createContext({});

export function SoundEffectsContextProvider({ children }){

const options ={
    volume: 0.05,
    timeout:200
};
    
    const hoverPath ="https://ziaocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
    const clickedPath ="https://ziaocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav"
    const winnerPath ="https://ziaocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav"
    const completedPath ="https://ziaocontent.s3.eu-west-2.amazonaws.com/sound-effects/completes.wav"
    
    const hoverSfx = useSounds(hoverPath, options)
    const clickSfx = useSounds(clickedPath, {...options, timeout:1000})
    const winSfx = useSounds(winnerPath,{...options, timeout:2000} )
    const completeSfx = useSounds(completedPath, options)

  return (
    <SoundEffectsContext.Provider value={{ hoverSfx, clickSfx, winSfx, completeSfx }}>
        {children}
    </SoundEffectsContext.Provider>
  )
}