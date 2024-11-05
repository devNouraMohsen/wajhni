import { HStack, Image } from '@chakra-ui/react'
import wajhni from '../assets/Wajhni.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';


const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Image src={wajhni} boxSize='50px'/>
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
