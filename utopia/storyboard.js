import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '../src/app'

export var storyboard = (
  <Storyboard>
    <Scene
      id='app-scene'
      commentId='app-scene'
      style={{
        width: 1528,
        position: 'absolute',
        left: 986,
        top: 128,
        height: 'max-content',
      }}
      data-label='My App'
    >
      <App />
    </Scene>
    <Scene
      id='app-scene'
      commentId='6ea2faf2149ffd393b4fbb323258f067'
      style={{
        width: 528,
        height: 3917,
        position: 'absolute',
        left: 2856,
        top: 128,
      }}
      data-label='My App'
    >
      <App />
    </Scene>
  </Storyboard>
)
