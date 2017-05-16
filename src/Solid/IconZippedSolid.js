import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconZippedSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconZippedSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1440 160H480c-88.32 0-160 71.6-160 160v1280c0 88.32 71.68 160 160 160h960c88.32 0 160-71.68 160-160V320c0-88.4-71.68-160-160-160zm-160 480h-160v160h160v160h-160v160H960V960h160V800H960V640h160V480H960V320h160v160h160v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}