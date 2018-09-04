import React from 'react'

export default props => {
  const img = props.thumbnail
    ? require(`../projectImages/${props.thumbnail}`)
    : null

  return (
    <div className="project">
      <h1 className="project-title">{props.title}</h1>
      <p className="project-description">{props.description}</p>
      {img ? (
        <img className="project-thumbnail" src={img} alt={props.imgAlt} />
      ) : null}
    </div>
  )
}
