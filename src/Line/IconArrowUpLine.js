import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconArrowUpLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconArrowUpLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1642.354 1560H277.876c-110.96 0-150.88-73.445-88.16-165.531l657.68-965.584C878.595 383.042 919.314 360 960.194 360c40.64 0 81.36 22.882 112.64 68.885l657.679 965.584c62.24 91.446 22.72 165.531-88.16 165.531m-101.68-160.01L960.115 547.532l-580.56 852.456h1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}