import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconFolderLockedLine extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconFolderLockedLine"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M851.68 240H320c-88.32 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240m0 160l55.76 139.44C931.76 600.16 990.56 640 1056 640h544v880H320V400h531.68M733.333 902.857v91.429h-16.525c-42.42 0-76.808 34.385-76.808 76.805v212.104c0 42.418 34.384 76.805 76.801 76.805H1123.2c42.416 0 76.801-34.385 76.801-76.805v-212.104c0-42.419-34.39-76.805-76.808-76.805h-16.525v-91.429c0-100.571-84-182.857-186.667-182.857s-186.667 82.286-186.667 182.857zM920 811.43c52.267 0 93.333 40.228 93.333 91.428v91.429H826.667v-91.429c0-51.2 41.066-91.428 93.333-91.428z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}