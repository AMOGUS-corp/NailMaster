import axios from 'axios';
import { IPriceList } from '../../models/IPrceList';
import { AppDispatch } from './../store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPriceList = createAsyncThunk(
	'priceList/fetchPriceList',
	async (_, thunkAPI) => {
		try{
			const response = await axios.get('/data1.json')
			return Object.values(response.data).flat()
		}catch{
			return thunkAPI.rejectWithValue('Price list fetching error')
		}
	}
)