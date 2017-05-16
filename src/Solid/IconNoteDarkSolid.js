import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconNoteDarkSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconNoteDarkSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1438.2 720.9H481.8V561.5h956.4v159.4zm0 318.8H481.8V880.3h956.4v159.4zm-239.1 318.8H481.8v-159.4h717.3v159.4zM1597.6 163H322.4C234.49 163 163 234.49 163 322.4v1275.2c0 87.91 71.49 159.4 159.4 159.4h1275.2c87.91 0 159.4-71.49 159.4-159.4V322.4c0-87.91-71.49-159.4-159.4-159.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}