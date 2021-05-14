import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getCoinDataFromApi,
  getCoinPriceDataFromApi,
} from '../../utilities/api'

export const fetchCurrentCoin = createAsyncThunk(
  'currentCoin/fetchCurrentCoin',
  async coinId => {
    const coinDataResponse = await getCoinDataFromApi(coinId)
    const coinPriceDataResponse = await getCoinPriceDataFromApi(coinId)

    return { ...coinDataResponse, ...coinPriceDataResponse }
  }
)

const initialState = {
  data: {},
  loading: false,
  error: undefined,
}

export const currentCoinSlice = createSlice({
  name: 'currentCoin',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentCoin.pending]: state => {
      state.loading = true
      state.error = undefined
    },
    [fetchCurrentCoin.fulfilled]: (state, action) => ({
      data: action.payload,
      loading: false,
      error: undefined,
    }),
    [fetchCurrentCoin.rejected]: (state, action) => ({
      data: [],
      loading: false,
      error: action.error.message,
    }),
  },
})

export default currentCoinSlice.reducer
