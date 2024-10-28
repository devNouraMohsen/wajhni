import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { useEffect } from 'react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    useEffect(() => {
        document.body.style.backgroundColor = colorMode === 'dark' ? '#e4dccc' : '#eed5c5';
        document.body.style.color = colorMode === 'dark' ? 'black' : 'black'; // لون الخط الجديد
    }, [colorMode]);

    return (
        <HStack>
            <Switch 
                colorScheme='green' 
                isChecked={colorMode === 'light'} 
                onChange={toggleColorMode} 
            />
            <Text color={'inherit'}>Change Background Color</Text> {/* استخدام inherit للسماح بلون الخط المحدد */}
        </HStack>
    );
}

export default ColorModeSwitch;
