import React from 'react'

const PropsTable = ({ propsData }) => {
  return (
    <table className="markdown-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {propsData.map((prop, index) => (
          <tr key={index}>
            <td>
              <code>{prop.name}</code>
            </td>
            <td>{prop.description}</td>
            <td>
              <code>{prop.default}</code>
            </td>
            <td>
              <code>{prop.type}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PropsTable
