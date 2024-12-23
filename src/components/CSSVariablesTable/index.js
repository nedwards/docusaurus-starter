import React, { useEffect, useState } from 'react'
import variables from '@site/src/data/css-variables.json'

const CSSVariablesTable = ({ componentName }) => {
  const [variablesForComponent, setVariablesForComponent] = useState([])

  useEffect(() => {
    // Filter variables by the component name prefix
    const filteredVariables = Object.entries(variables)
      .filter(([key]) => key.startsWith(`--${componentName}`))
      .map(([key, value]) => ({ name: key, value }))
    setVariablesForComponent(filteredVariables)
  }, [componentName])

  return (
    <table className="markdown-table">
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {variablesForComponent.map(({ name, value }) => (
          <tr key={name}>
            <td>
              <code>{name}</code>
            </td>
            <td>
              <code>{value}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CSSVariablesTable
