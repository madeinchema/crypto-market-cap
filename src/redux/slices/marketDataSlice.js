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
  data: [],
  loading: false,
  error: null,
}

export const marketDataSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMarketData.pending]: state => {
      state.loading = true
      state.error = null
    },
    [fetchMarketData.fulfilled]: (state, action) => ({
      data: action.payload,
      loading: false,
      error: null,
    }),
    [fetchMarketData.rejected]: (state, action) => ({
      data: [],
      loading: false,
      error: action.error.message,
    }),
  },
})

export default marketDataSlice.reducer
