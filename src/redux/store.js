import { configureStore } from '@reduxjs/toolkit'
import coinsSliceReducer from './slices/coinsSlice'
import marketDataSliceReducer from './slices/marketDataSlice'

export default configureStore({
  reducer: {
    coins: coinsSliceReducer,
    marketData: marketDataSliceReducer,
  },
})
