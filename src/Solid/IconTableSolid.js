import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTableSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTableSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M1569.371 278.625V80.999H1437.62v197.626h-197.627v131.75h197.627V608h131.752V410.375H1767v-131.75zM933.462 502.715v455.368h401.406V744.126h182.715v213.957h3.787v182.715h-3.787v435.487h.947V1759H160V324.734h2.84V320h910.736v182.715H933.462zm-182.715 0v455.368H342.715V502.715h408.032zm182.716 638.083v435.487h401.405v-435.487H933.463zm-182.716 0v435.487H342.715v-435.487h408.032z"/>
    </g>
</svg>`}
      />
    )
  }
}