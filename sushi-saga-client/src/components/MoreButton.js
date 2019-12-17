import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(e) => props.getNewSushi(e.target)}>
            More sushi!
          </button>
}

export default MoreButton