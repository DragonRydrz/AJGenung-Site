import React from 'react'

export default ({ link, title, description, techStack, img }) => {
  const image = img ? require(`../data/screenshots/${img}`) : null

  return (
    <div className="project">
      <h1 className="project-title">
        <a href={link} target="_blank">
          {title}
        </a>
      </h1>
      <p className="project-description">{description}</p>
      {img ? (
        <img
          className="project-thumbnail"
          src={image}
          alt={`${title} screenshot`}
        />
      ) : null}
      <ul className="project-techList">
        {techStack.map(item => (
          <li className="project-techList-item">{item}</li>
        ))}
      </ul>
    </div>
  )
}
