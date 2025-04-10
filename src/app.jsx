import React from 'react'
import './globalStyles.css'
import { FlexCol } from './utils.jsx'

export var App = () => {
  return (
    <FlexCol
      style={{
        width: '100%',
        height: '100%',
        background: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src='https://github.com/concrete-utopia/utopia/blob/master/editor/resources/editor/pyramid_fullsize@2x.png?raw=true'
        alt='Utopia logo'
        style={{
          width: 357,
          height: 453,
          border: 'solid #00E1FF',
        }}
      />
    </FlexCol>
  )
}
