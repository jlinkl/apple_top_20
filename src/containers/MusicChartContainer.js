import React, {useEffect, useState} from 'react';
import MusicChartList from '../components/MusicChartList';


const MusicChartContainer = () => {

    const [songs, setSongs] = useState([]);
    
    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function(){
      fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(songs => {
        setSongs(songs.feed.entry)
      })
      console.log(songs)
    }

  return (
    <>
    <MusicChartList songs={songs}/>
    </>
  )

}

export default MusicChartContainer;