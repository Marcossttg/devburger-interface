import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

export function Button({ children, ...props }) {
  return <ContainerButton style={{ marginTop: 60 }}{...props}>{children}</ContainerButton>
}

Button.propTypes = {
  children: PropTypes.string,
}
