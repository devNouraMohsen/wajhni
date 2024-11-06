import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import TopBanner from '../components/TopBanner'
import { Box, ChakraProvider } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
      <ChakraProvider>
        <TopBanner />
        <NavBar />
        <Box padding={5}>
          <Outlet />
        </Box>
        <Footer />
      </ChakraProvider>
       
    </>
  )
}

export default Layout
