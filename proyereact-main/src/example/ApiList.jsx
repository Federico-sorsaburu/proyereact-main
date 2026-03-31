import React from 'react'
import ApiCard from './ApiCard'

const ApiList = ({personajes}) => {
  return (
    <div className="item-list-container" > {personajes.map((pj) => <ApiCard key={pj.id} pj={pj}/> )} </div>
  )
}

export default ApiList