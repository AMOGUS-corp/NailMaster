import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPriceList } from "../../models/IPrceList";
import { fetchPriceList } from './ActionCreators';

interface PriceListState {
	list: IPriceList[];
	error: string;
	isLoading: boolean;
}

const initialState: PriceListState = {
	list: [],
	error: '',
	isLoading: false,
}

export const PriceListSlice = createSlice({
	name:'priceList',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPriceList.fulfilled.type] : (state, action: PayloadAction<IPriceList[]>) => {
			state.list = action.payload
			state.error = ''
			state.isLoading = false
		},
		[fetchPriceList.pending.type] : (state) => {
			state.isLoading = true
		},
		[fetchPriceList.rejected.type] : (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.isLoading = false
		}
	}
}) 

const {actions, reducer} = PriceListSlice
// export const {usersFetching, usersFetchingError, usersFetchingSuccess} = actions
export default reducer