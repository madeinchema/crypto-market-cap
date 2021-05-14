import { configureStore } from '@reduxjs/toolkit'
import coinsSliceReducer from './slices/coinsSlice'
import marketDataSliceReducer from './slices/marketDataSlice'
import currentCoinSliceReducer from './slices/currentCoinSlice'

export default configureStore({
  reducer: {
    coins: coinsSliceReducer,
    marketData: marketDataSliceReducer,
    currentCoin: currentCoinSliceReducer,
  },
})
