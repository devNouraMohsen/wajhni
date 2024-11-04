import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from './services/hooks/usePlatforms'
import { Platform } from './services/hooks/useGames';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null; 
}
const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
   <Menu>
        <MenuButton bg='#fff1e6' textColor='gray.500' as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || 'Platforms'  }
        </MenuButton>
        <MenuList>
           {data?.results.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList> 
   </Menu>
  )
}

export default PlatformSelector;
