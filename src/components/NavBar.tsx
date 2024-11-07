import { HStack, Image } from '@chakra-ui/react'
import wajhni from '../assets/Wajhni.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <HStack padding='10px'>
        <Link to='/games'>
          <Image src={wajhni} boxSize='50px' />
        </Link>
        
        <SearchInput />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
