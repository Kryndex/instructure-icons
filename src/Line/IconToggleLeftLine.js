import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconToggleLeftLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconToggleLeftLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M322 320h400V160H322c-88.24 0-160 71.76-160 160v1280c0 88.24 71.76 160 160 160h400v-160H322V320zm1040-160h-160v160h160V160zm-160 1600h160v-160h-160v160zm400-1600h-80v160h80v80h160v-80c0-88.24-71.76-160-160-160zm0 1440h-80v160h80c88.24 0 160-71.76 160-160v-80h-160v80zm0-880h160V560h-160v160zm0 640h160v-160h-160v160zm0-320h160V880h-160v160zm-536.56-343.44L1168.88 800H882c-176.48 0-320 143.52-320 320h160c0-88.24 71.76-160 160-160h286.88l-103.44 103.44 113.12 113.12L1475.12 880l-296.56-296.56-113.12 113.12zM1042 160H882v400h160V160zM882 1760h160v-560H882v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}