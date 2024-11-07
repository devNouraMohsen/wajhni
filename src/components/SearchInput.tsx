import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';


const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const navigat = useNavigate();
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        if (ref.current) {
            setSearchText(ref.current.value);
            navigat('/games');
        }
  
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch />}/>
            <Input
                ref={ref}
                borderRadius={20}
                placeholder='Search games ...'
                variant='filled'
                bg='#fff1e6'
                sx={
                    { 
                    '&::placeholder': { 
                    color: 'gray.500'
                    }
                }}
            />
        </InputGroup>
    </form>

  )
}

export default SearchInput
