import * as React from 'react'
import { Scene, Storyboard } from 'utopia-api'
import { App } from '../src/app'

export var storyboard = (
  <Storyboard>
    <Scene
      id='app-scene'
      commentId='app-scene'
      style={{
        width: 744,
        height: 1133,
        position: 'absolute',
        left: 986,
        top: 128,
      }}
      data-label='My App'
    >
      <App />
    </Scene>
  </Storyboard>
)
