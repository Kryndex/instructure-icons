import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'



export default class IconUnlockLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconUnlockLine"
        viewBox="0 0 1920 1920"
      >
        <svg version="1.1" viewBox="0 0 1920 1920">
	<path d="M1581.294 1694.118c0 62.23-50.71 112.94-112.941 112.94H451.883c-62.231 0-112.942-50.71-112.942-112.94V1016.47h1242.353v677.647zM564.824 903.529V508.235c0-217.976 177.317-395.294 395.294-395.294 217.976 0 395.294 177.318 395.294 395.294h112.94C1468.353 228.028 1240.326 0 960.119 0S451.882 228.028 451.882 508.235V903.53H226v790.589C226 1818.692 327.308 1920 451.882 1920h1016.47c124.575 0 225.883-101.308 225.883-225.882V903.529H564.824zm338.823 677.647h112.941v-338.823h-112.94v338.823z" stroke="none" strokeWidth="1"/>
</svg>
      </SVGIcon>
    )
  }
}