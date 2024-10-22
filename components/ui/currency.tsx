'use client'

import { formatter } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface CurrencyProps {
  value: string
}

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return <div>{formatter.format(Number(value))}</div>
}

export default Currency
