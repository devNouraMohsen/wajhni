import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let badgeColor = score > 75 ? '#cbc0ac' : score > 60 ? 'green' : '#f3dbd3'; // استخدام اللون الجديد

    return (
        <Badge
            bg={badgeColor} 
            color="black" 
            fontSize='14px'
            padding={2}
            borderRadius='4px'
        >
            {score}
        </Badge>
    );
}

export default CriticScore;
