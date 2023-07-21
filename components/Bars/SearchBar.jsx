'use client'

import { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
    <div className='w-[350px]'>
      <input
        type="text"
        placeholder='Search...'
        className='font-sans w-full border bg-transparent border-grey-500 outline-none placeholder-grey-500 py-3 px-5 rounded-md'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
    />
    </div>
  )
}

export default SearchBar
