import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconCollectionSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconCollectionSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M800 920v240h319.76l.24-240H800zm480 240c0 88.24-71.76 160-160 160H800c-88.24 0-160-71.76-160-160v-160H160v560c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160v-560h-480v160zm400-640h-320V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H240c-88.32 0-160 71.68-160 160v240h560c0-88.16 71.76-160 160-160h320c88.24 0 160 71.84 160 160h560V680c0-88.32-71.68-160-160-160zm-480 0H720V360h480v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}