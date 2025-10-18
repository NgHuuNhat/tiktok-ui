import React, { useEffect, useState } from 'react'

export default function useDebounce(value: any, delay: any) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handle = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(handle)
    }, [value])

    return debouncedValue
}