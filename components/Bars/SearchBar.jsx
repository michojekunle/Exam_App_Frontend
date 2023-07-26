'use client'

import { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
    <div className='w-[380px] ml-5'>
      <input
        type="text"
        placeholder='Search...'
        className='font-sans w-full border bg-transparent border-gray-300 outline-none placeholder-gray-300 py-2 px-4 rounded-md text-gray-500 text-lg'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
    />
    </div>
  )
}

export default SearchBar
