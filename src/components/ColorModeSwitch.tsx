import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    useEffect(() => {
        document.body.style.backgroundColor = colorMode === 'dark' ? '#e4dccc' : '#eed5c5';
    }, [colorMode]);

    return (
        <HStack>
            <Switch 
                colorScheme='green' 
                isChecked={colorMode === 'light'} 
                onChange={toggleColorMode} 
            />
            <Text color={'black'}>Change Background Color</Text>
        </HStack>
    );
}

export default ColorModeSwitch;
