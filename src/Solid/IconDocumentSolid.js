import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconDocumentSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconDocumentSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1120 640V240l400 400h-400zm240 800H560v-160h800v160zM560 960h800v160H560V960zm0-320h320v160H560V640zm673.12-480H480c-88.24 0-160 71.84-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V526.88L1233.12 160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}