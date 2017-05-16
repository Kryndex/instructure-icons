import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconRemoveFromCollectionLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconRemoveFromCollectionLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M880 409.32v686.8h160v-686.8l183.44 183.36 113.12-113.12L960 103 583.44 479.56l113.12 113.12L880 409.32zm720 1246.832H320v-320h286.88l160 160h386.24l160-160H1600v320zm-353.12-480l-160 160H833.12l-160-160H160v640h1600v-640h-513.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}