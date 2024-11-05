import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import TopBanner from '../components/TopBanner'
import { ChakraProvider } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <TopBanner />
        <NavBar />
        <Outlet />
        <Footer />
      </ChakraProvider>
       
    </>
  )
}

export default Layout
