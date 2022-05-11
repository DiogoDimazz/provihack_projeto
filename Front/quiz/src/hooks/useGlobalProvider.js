import { useState } from 'react'

function useGlobalProvider() {
    const [currentPage, setCurrentPage] = useState('');

    return {
        currentPage,
        setCurrentPage
    }
}

export default useGlobalProvider