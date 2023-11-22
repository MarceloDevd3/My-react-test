import React from 'react'
import './row.css'


export default function Row(props) {
  return (
    <div className={props.change}>
      <div className={props.cols}>

        <div className="img-block ">
          <img src={props.Imagem} alt="" width='auto' />
          <span className={props.color}>{props.name}</span>
        </div>

        <div>
          <span ><strong> {props.valor} </strong> <span class="gray">  / 100</span></span>
        </div>
      </div>
    </div>
  )
}