import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconQuizStatsLowLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconQuizStatsLowLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1134 1015.862L692.341 574.319l-102.91 102.995L1030.917 1119H795v145h484V780h-145z"/>
        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>
    </g>
</svg>`}
      />
    )
  }
}