import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'


interface Props {
    children: string;
}

const ExpanddableText = ({children}: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit) 
        return <Text>{children}</Text>;

    const summary = expanded ? children :  children.substring(0, limit) + '...';
  return (
    <Text>
        {summary} 
        <Button 
            size='xs' 
            fontWeight='bold' 
            marginLeft={1}
            color='#873e23' 
            bgColor='#d9a194' 
            onClick={() => setExpanded(!expanded)}
        >
            {expanded ?  'Show Less' : 'Read More'}
        </Button>
    </Text>
  )
}

export default ExpanddableText;
