import SearchHeader from '@/components/SearchHeader'
import React from 'react'

function WebImglayout({children}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}

export default WebImglayout