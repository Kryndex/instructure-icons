import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconAnnouncementSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconAnnouncementSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1648.996 160h-91.605L682.386 523.602c-12.241 4.88-31.922 7.36-46.643 7.36H271.004c-44.162 0-80.004 35.84-80.004 80v328.883c0 44.24 35.842 80 80.004 80h143.608l253.053 668.244c27.041 61.44 108.085 88.48 169.529 61.44 61.443-27.04 88.484-108.08 61.443-169.52l-184.25-437.283c7.36-34.4 31.922-54.08 68.724-54.08v-7.36l774.28 307.121h91.605c44.162 0 80.004-35.84 80.004-80V240c0-44.16-35.842-80-80.004-80" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}