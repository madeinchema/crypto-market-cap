import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCoinsRankingFromApi } from '../../utilities/api'

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await getCoinsRankingFromApi('usd')
  return response
})

const initialState = {
  data: [],
  loading: false,
  error: null,
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCoins.pending]: state => {
      state.loading = true
      state.error = null
    },
    [fetchCoins.fulfilled]: (state, action) => ({
      data: action.payload,
      loading: false,
      error: null,
    }),
    [fetchCoins.rejected]: (state, action) => ({
      data: [],
      loading: false,
      error: action.error.message,
    }),
  },
})

export default coinsSlice.reducer
