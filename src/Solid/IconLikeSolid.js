import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconLikeSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconLikeSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M538.07 893.534c0-179.837 334.297-249.516 402.149-301.675 67.931-52.239 245.482-150.877 261.165-359.753C1217.066 23.229 1530.4-5.81 1540.882 371.383c0 232.076-47.048 284.235-47.048 284.235 167.149 0 283.73 98.639 288.93 197.277 5.2 98.638-74.813 771.667-315.014 812.306-240.282 40.64-913.998 5.84-929.68-208.876v-562.79zm-320.056 786.45H378.04c44.168 0 80.014-35.839 80.014-79.998V800c0-44.16-35.846-79.999-80.014-79.999H218.014C173.846 720.001 138 755.841 138 800v799.986c0 44.16 35.846 79.999 80.014 79.999z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}