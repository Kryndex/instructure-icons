import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconMiniArrowUpLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconMiniArrowUpLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M994.034 694.296c-18.796-27.297-49.269-27.3-68.067 0L574.893 1204.13c-18.797 27.296-7.18 49.424 25.959 49.424h718.297c33.133 0 44.757-22.124 25.959-49.424L994.034 694.296z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}