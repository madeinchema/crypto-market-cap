import { configureStore } from '@reduxjs/toolkit'
import cryptocurrenciesSliceReducer from './slices/coinsSlice'

export default configureStore({
  reducer: {
    coins: cryptocurrenciesSliceReducer,
  },
})
