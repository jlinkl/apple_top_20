import React from 'react'
import ListItem from './ListItem'

const MusicChartList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return <ListItem song={song} key={index}/>
    })

  return (
    <div>
        <ul>
            {songsItems}
        </ul>
    </div>
  )
}

export default MusicChartList;