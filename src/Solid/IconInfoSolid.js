import React, { Component } from 'react'
import SVGIcon from '../SVGIcon'

export default class IconInfoSolid extends Component {
  render () {
    return (
      <SVGIcon
        {...this.props}
        name="IconInfoSolid"
        viewBox="0 0 1920 1920"
        src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960.5 728C872.411 728 801 656.589 801 568.5S872.411 409 960.5 409 1120 480.411 1120 568.5 1048.589 728 960.5 728zm151.5 726.999c0 30.928-25.07 56.001-55.994 56.001H864.994c-30.924 0-55.994-25.07-55.994-56.001V934.001C809 903.073 834.07 878 864.994 878h191.012c30.924 0 55.994 25.07 55.994 56.001v520.998zM960 160c-441.828 0-800 358.172-800 800s358.172 800 800 800 800-358.172 800-800-358.172-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
      />
    )
  }
}