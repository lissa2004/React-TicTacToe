import { useEffect, useState } from "react"

const useSounds = (url, options) =>{
    const[sound, setSound] = useState(false);
   useEffect(() =>{
     const audio =new Audio(url);

     audio.load()
     audio.volume = options.volumn;
     setSound(audio);
   }, [])
   
   return () =>{
    if(sound){
        sound.play();
       }
    setTimeout(() => {
       sound.pause();
       sound.currentTime(0)
    }, options.timeout)
   }
}



export default useSounds