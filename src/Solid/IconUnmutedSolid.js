import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconUnmutedSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconUnmutedSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M910.64 246.32c-29.92-12.32-64.32-5.52-87.2 17.36L480 640.16H240c-44 0-80 36.08-80 80v480c0 44 36 80 80 80h240l343.44 376.64c22.88 22.88 57.28 29.68 87.2 17.36 29.92-12.4 49.36-41.6 49.36-74v-1280c0-32.24-19.44-61.6-49.36-73.84zM1120 400.16v160c220.56 0 400 179.52 400 400 0 220.56-179.44 400-400 400v160c308.8 0 560-251.12 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.24-107.68-240-240-240v160c44.08 0 80 35.92 80 80s-35.92 80-80 80v160c132.32 0 240-107.6 240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}