import { HStack, Image } from '@chakra-ui/react'
import wajhni from '../assets/Wajhni.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';


interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
        <Image src={wajhni} boxSize='50px'/>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
