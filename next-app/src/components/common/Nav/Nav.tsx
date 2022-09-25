import React, { useState } from 'react'

import TopNavBar from '../TopNavBar'
import SideMenuBar from '../SideNavBar'

const Nav = () => {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <>
      <TopNavBar openSideBar={() => setShowSideBar(true)} />
      <SideMenuBar
        closeSideBar={() => setShowSideBar(false)}
        isOpen={showSideBar}
      />
    </>
  )
}

export default Nav
