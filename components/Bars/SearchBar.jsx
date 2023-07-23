'use client'

import { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
    <div className='w-[500px]'>
      <input
        type="text"
        placeholder='Search...'
        className='font-sans w-full border bg-transparent ml-2 border-gray-300 outline-none placeholder-gray-300 py-4 px-5 rounded-md text-gray-500 text-xl'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
    />
    </div>
  )
}

export default SearchBar
