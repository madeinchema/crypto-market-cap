import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCryptoGlobalDataFromApi } from '../../utilities/api'

export const fetchMarketData = createAsyncThunk(
  'marketData/fetchMarketData',
  async () => {
    const response = await getCryptoGlobalDataFromApi()
    return response
  }
)

const initialState = {
  data: undefined,
  loading: false,
  error: undefined,
}

export const marketDataSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMarketData.pending]: state => {
      state.loading = true
      state.error = undefined
    },
    [fetchMarketData.fulfilled]: (state, action) => ({
      data: action.payload,
      loading: false,
      error: undefined,
    }),
    [fetchMarketData.rejected]: (state, action) => ({
      data: undefined,
      loading: false,
      error: action.error.message,
    }),
  },
})

export default marketDataSlice.reducer
