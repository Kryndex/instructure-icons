import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconCopyCourseLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconCopyCourseLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1680 400v-80h-640v160h480v1440h160V400zM400 1760H0V0h1440v160H160v1600h240v-480h160v480h240-240v160H400v-160zm160 0h960v160H560v-160zM743.44 696.56L846.88 800H560V400H400v480c0 44.16 35.84 80 80 80h366.88l-103.44 103.44 113.12 113.12L1153.12 880 856.56 583.44 743.44 696.56z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}