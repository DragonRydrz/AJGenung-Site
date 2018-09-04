import React from 'react'
import Project from '../components/Project'

export default () => (
  <div className="projects-list">
    <p>Projects will be listed here!</p>
    <Project
      title="First Project"
      description="Allows freelancers to send automated reminders to their clients."
      // thumbnail="gmm.png"
    />
  </div>
)
