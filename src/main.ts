import './style.css'

import { Config, PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.5'

const appEl = document.querySelector<HTMLDivElement>('#app')!

const config = new Config({
  initialSettings: {
    ss: 'ws://localhost:8888',
    AutoPlayVideo: true,
    AutoConnect: true,
    StartVideoMuted: true,
    WaitForStreamer: true,
    HoveringMouse: true,
    MatchViewportRes: true,
  },
})

const pixelStreaming = new PixelStreaming(config, {
  videoElementParent: appEl,
})

pixelStreaming.addResponseEventListener('hello', () => {
  console.log('hello')
})
