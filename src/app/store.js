import { configureStore } from '@reduxjs/toolkit'
import contractSlice from './contractSlice'

export const store = configureStore({ reducer: contractSlice })
