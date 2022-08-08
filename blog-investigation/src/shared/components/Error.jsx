import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

function Error() {
  return (
    <div>
        <h3>{useTranslation('Error')}</h3>
        <h3>404</h3>
    </div>
  )
}

export default Error