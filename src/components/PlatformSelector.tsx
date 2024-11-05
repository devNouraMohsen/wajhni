import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from './services/hooks/usePlatforms'
import usePlatform from './services/hooks/usePlatform';
import useGameQueryStore from '../store';


const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameQueryStore(s => s.setPlatformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
   <Menu>
        <MenuButton bg='#fff1e6' textColor='gray.500' as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || 'Platforms'  }
        </MenuButton>
        <MenuList>
           {data?.results.map((platform) => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList> 
   </Menu>
  )
}

export default PlatformSelector;
