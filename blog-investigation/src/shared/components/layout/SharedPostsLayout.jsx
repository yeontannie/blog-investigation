import React from 'react'
import { Outlet } from 'react-router-dom'

function SharedPostsLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SharedPostsLayout