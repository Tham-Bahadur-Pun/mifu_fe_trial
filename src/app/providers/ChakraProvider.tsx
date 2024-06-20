'use client'
import React from 'react'
import { ChakraProvider as Provider } from '@chakra-ui/react'
import theme from '../theme'

const ChakraProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider theme={theme}>
        {children}
    </Provider>
  )
}

export default ChakraProvider