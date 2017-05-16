import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconFacebookBoxedSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconFacebookBoxedSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1518.249 960h-259.374v697.375H960V960H816.042V731.859H960V583.667c0-201.343 86.873-321.042 323.582-321.042h272.773v246.82h-222.761c-66.25-.099-74.37 34.471-74.37 98.879l-.349 123.535h298.875L1518.199 960h.05zm-26.9-797H428.7C282.55 163 163 282.55 163 428.7v1062.6c0 146.25 119.55 265.7 265.7 265.7h1062.65c146.1 0 265.65-119.45 265.65-265.7V428.7c0-146.15-119.55-265.7-265.65-265.7z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}