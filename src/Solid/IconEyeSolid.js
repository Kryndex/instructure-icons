import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconEyeSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconEyeSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 1249.714c-160.052 0-289.818-129.647-289.818-289.714S799.948 670.286 960 670.286 1249.818 799.933 1249.818 960 1120.052 1249.714 960 1249.714M960 453c-460.231 0-797 507-797 507s336.769 507 797 507 797-507 797-507-336.769-507-797-507" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}