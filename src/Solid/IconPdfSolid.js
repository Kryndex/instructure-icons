import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconPdfSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconPdfSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M670 1038.92h36.341c20.025 0 36.342-18.126 36.342-40.46S726.366 958 706.34 958H670v80.92zm-.333 161.08H597V877h109c60.095 0 109 54.345 109 121.125s-48.905 121.125-109 121.125h-36.333V1200zM1324 957.75V877h-145.333c-40.076 0-72.667 36.257-72.667 80.75V1200h72.667v-121.125h109v-80.75h-109V957.75H1324zM924 958v161.84c40.085 0 72.683-36.293 72.683-80.92 0-44.587-32.598-80.92-72.683-80.92zm-.333-81c80.151 0 145.333 72.433 145.333 161.5S1003.818 1200 923.667 1200H851V877h72.667zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80zm-1120-80H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}