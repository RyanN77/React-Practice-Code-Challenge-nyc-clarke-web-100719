import React, { Fragment } from 'react'


const Sushi = (props) => {

  // let getRandomSushi = () => {
  //   let sushiArray = []
  //   for (let i=0;i<4;i++){
  //     sushiArray.push(props.sushi[Math.floor(Math.random()*props.sushi.length)])
  //   }
  //   return sushiArray
  // }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(e) => props.clicked(e.target)}>
        { 
          props.id === false ? null : <img id={props.sushi.id} src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi