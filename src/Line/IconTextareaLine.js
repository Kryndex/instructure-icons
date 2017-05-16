import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconTextareaLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconTextareaLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill-rule="evenodd">
        <path d="M479 1600v-160H319V480h160V320h961v160h479V0h-479v160H479V0H0v480h159v960H0v480h479v-160h963v160h479v-480h-479v160H479z"/>
        <path d="M1601 1520h160V400h-160z"/>
        <path d="M600 730.907V544.7c0-13.134 6.567-19.701 19.7-19.701h680.636c13.134 0 19.701 6.567 19.701 19.7v186.207c0 13.134-6.567 19.7-19.7 19.7h-79.44c-13.557 0-19.7-6.566-18.43-19.7l6.355-101.683h-175.401v676.823h108.037c13.134 0 19.7 6.567 19.7 19.7v63.552c0 13.134-6.566 19.701-19.7 19.701H779.85c-13.134 0-19.7-6.567-19.7-19.7v-63.552c0-7.203 1.482-12.287 4.448-15.253 2.966-2.965 8.05-4.448 15.252-4.448h106.767V629.224H710.579l6.356 101.683c1.27 13.134-4.66 19.7-17.795 19.7H619.7c-13.133 0-19.7-6.566-19.7-19.7z" stroke="#333" stroke-width="3"/>
    </g>
</svg>`}
      />
    )
  }
}