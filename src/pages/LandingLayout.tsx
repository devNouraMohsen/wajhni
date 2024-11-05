import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import TopBanner from '../components/TopBanner'
import { ChakraProvider } from '@chakra-ui/react'

const LandingLayout = () => {
  return (
    <>
      <ChakraProvider>
        <TopBanner />
        <Outlet />
        <Footer />
      </ChakraProvider>
       
    </>
  )
}

export default LandingLayout;
