import { HStack, Image } from '@chakra-ui/react'
import wajhni from '../assets/Wajhni.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={wajhni} boxSize='50px'/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
