import React from 'react'
import Project from '../components/Project'
import { projects } from '../data/projects'

export default () => (
  <div className="projects-list">
    {projects.map(p => (
      <Project
        title={p.title || ''}
        description={p.description || ''}
        img={p.img || ''}
        link={p.link}
        techStack={p.techStack}
      />
    ))}

    {/* <Project
      title="First Project"
      description="Allows freelancers to send automated reminders to their clients."
      // thumbnail="gmm.png"
    /> */}
  </div>
)
