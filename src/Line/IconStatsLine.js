import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconStatsLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconStatsLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M520 1440c0-44.24-35.76-80-80-80H200c-44.24 0-80 35.76-80 80v160c0 44.24 35.76 80 80 80h240c44.24 0 80-35.76 80-80v-160zm560 240H760c-44.16 0-80-35.84-80-80V880c0-44.16 35.84-80 80-80h320c44.16 0 80 35.84 80 80v720c0 44.16-35.84 80-80 80zm640 0h-320c-44.16 0-80-35.84-80-80V320c0-44.16 35.84-80 80-80h320c44.16 0 80 35.84 80 80v1280c0 44.16-35.84 80-80 80zm-240-160h160V400h-160v1120zm-640 0h160V960H840v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}