import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconLinkSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconLinkSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M762.573 987.466l-565.587 565.8 169.652 169.717 565.587-565.801-169.652-169.716zm395.774-56.572l565.747-565.72-169.652-169.797-565.747 565.8 169.652 169.717zm565.827-282.86l-28.396-28.327-169.652 169.717 28.316 28.326c15.517 15.523 15.517 40.888 0 56.492l-678.688 678.944c-10.158 10.243-22.076 11.763-28.315 11.763-6.24 0-18.077-1.52-28.316-11.683l-28.315-28.326-169.652 169.796 28.316 28.247c52.87 52.89 123.18 82.017 197.967 82.017s145.096-29.126 197.967-82.017l678.768-678.945c109.101-109.303 109.101-286.861 0-396.005zM225.302 1298.731l-28.316-28.246C144.116 1217.515 115 1147.18 115 1072.364c0-74.816 29.115-145.231 81.986-198.042l678.688-679.025c105.743-105.703 290.192-105.783 395.934.08l28.396 28.246-169.732 169.796-28.235-28.246c-10.159-10.242-22.077-11.762-28.316-11.762-6.159 0-18.077 1.52-28.235 11.682l-678.768 679.025c-10.238 10.162-11.758 22.085-11.758 28.246 0 6.241 1.52 18.164 11.758 28.406l28.236 28.166-169.652 169.796z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}