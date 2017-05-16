import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconArrowLeftLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconArrowLeftLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1559.918 1642.354V277.876c0-110.96-73.44-150.88-165.52-88.16L428.88 847.396c-45.84 31.2-68.88 71.919-68.88 112.799 0 40.64 22.88 81.36 68.88 112.64l965.518 657.679c91.44 62.24 165.52 22.72 165.52-88.16m-160-101.68L547.52 960.115l852.398-580.56v1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}