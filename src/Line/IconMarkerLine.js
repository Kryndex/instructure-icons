import React from 'react'
import SVGIcon from '../SVGIcon'

export default function IconMarkerLine (props) {
  return (
    <SVGIcon
      {...props}
      name="IconMarkerLine"
      viewBox="0 0 1920 1920"
      src={`<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M1016.56 1816.55l479.994-480c15.6-15.6 23.44-36.08 23.44-56.56v-1120c0-44.16-35.84-80-80-80H480.006c-44.159 0-79.999 35.84-79.999 80v1120c0 20.48 7.84 40.96 23.44 56.56l479.995 480c31.28 31.28 81.839 31.28 113.118 0zM560 239.998h800v959.99l-400 399.995-400-399.996V239.998z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>`}
    />
  )
}