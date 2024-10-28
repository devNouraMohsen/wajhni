import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    SortOrder: string; 
}
const SortSelector = ({onSelectSortOrder, SortOrder}: Props) => {
    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Data added' },
        { value: 'name', label: 'Name' },
        { value: '-release_date', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];
    const currentSortOrder = sortOrders.find((order) => order.value === SortOrder);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
               order by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList> 
        </Menu>
       )
}

export default SortSelector
