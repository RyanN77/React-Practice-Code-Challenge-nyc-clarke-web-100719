import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => {
            return <Sushi clicked={props.clicked} sushi={sushi}/>
          })
          // <Sushi sushi={props.sushi}/>
        }
        <MoreButton getNewSushi={props.getNewSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer