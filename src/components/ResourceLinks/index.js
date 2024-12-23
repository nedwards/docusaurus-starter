import React from 'react'
import Link from '@docusaurus/Link'

const ResourceLinks = ({ links }) => {
  return (
    <div className="resource-links">
      {links.map((link, index) => (
        <Link
          key={index}
          className="button button--secondary display-flex"
          to={link.url}
        >
          <div className="icon">{link.icon}</div>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default ResourceLinks
