import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTextLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTextLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1490 160H434c-72.864 0-132 59.733-132 133.333V560h264V426.667h264v1066.666H566V1760h792v-266.667h-264V426.667h264V560h264V293.333c0-73.6-59.136-133.333-132-133.333" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}