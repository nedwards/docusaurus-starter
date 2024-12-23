import React from 'react'
import colorsData from '@site/src/data/design-tokens.json'

const ColorPalette = ({ swatches }) => {
  const colors = colorsData.color || {}

  // Helper function to get nested keys
  const getNestedColors = (keyPath) => {
    return keyPath
      .split('.')
      .reduce((obj, key) => (obj ? obj[key] : null), colors)
  }

  // Helper function to format the heading
  const formatHeading = (keyPath) => {
    const segments = keyPath.split('.')
    return segments[segments.length - 1] // Get the last segment (e.g., "Primary")
  }

  // Filter and map swatches
  const filteredColors = swatches
    ? Object.fromEntries(
        swatches
          .map((key) => [key, getNestedColors(key)])
          .filter(([, value]) => value)
      )
    : colors

  return (
    <div>
      {Object.entries(filteredColors).map(([category, shades]) => (
        <div key={category} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ textTransform: 'capitalize', marginBottom: '0.5rem' }}>
            {formatHeading(category)}
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {Object.entries(shades).map(([shade, hex]) => (
              <div
                key={shade}
                style={{
                  width: '4rem',
                  height: '4rem',
                  backgroundColor: hex,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '0.75rem',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <span>{shade}</span>
                <span>{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColorPalette
