import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconEmailLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconEmailLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M320 1320V694.32l597.6 373.52A80.132 80.132 0 0 0 960 1080c14.72 0 29.44-4.08 42.4-12.16L1600 694.32l.08 625.68H320zm1129.04-720L960 905.68 470.96 600h978.08zM1600 440H320c-88.24 0-160 71.76-160 160v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160V600c0-88.24-71.76-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}