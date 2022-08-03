import React from 'react'
import './ListItem.css';

const ListItem = ({song, index}) => {

  return (
  <li>
    <div className='counter'>
      {song['im:name']['label']} by: {song['im:artist']['label']}
    </div>

      <audio controls>
        <source src={song['link'][1]['attributes']['href']} type={song['link'][1]['attributes']['type']}/>
      </audio>
  </li>
  )
}

export default ListItem