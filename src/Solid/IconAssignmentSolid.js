import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconAssignmentSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconAssignmentSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1480 1520V800h320v720c0 88.32-71.68 160-160 160s-160-71.68-160-160zm160-1120l160 240h-320l160-240zm-560-160H280c-88.24 0-160 71.76-160 160v1120c0 88.24 71.76 160 160 160h800c88.24 0 160-71.76 160-160V400c0-88.24-71.76-160-160-160zm-80 480H360V560h640v160zm0 320H360V880h640v160zm-240 320H360v-160h400v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}