import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from "../../models/IUser";
import { fetchUsers } from './ActionCreators';

interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: string;
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
}

export const userSlice = createSlice({
	name:'user',
	initialState,
	reducers: {
		// usersFetching (state){
		// 	state.isLoading = true
		// },
		// usersFetchingError (state, action: PayloadAction<string>){
		// 	state.error = action.payload
		// 	state.isLoading = false
		// },
		// usersFetchingSuccess (state, action: PayloadAction<IUser[]>) {
		// 	state.users = action.payload
		// 	state.error = ''
		// 	state.isLoading = false
		// },
	},
	extraReducers: {
		[fetchUsers.fulfilled.type] : (state, action: PayloadAction<IUser[]>) => {
			state.users = action.payload
			state.error = ''
			state.isLoading = false
		},
		[fetchUsers.pending.type] : (state) => {
			state.isLoading = true
		},
		[fetchUsers.rejected.type] : (state, action: PayloadAction<string>) => {
			state.error = action.payload
			state.isLoading = false
		}
	}
}) 

const {actions, reducer} = userSlice
// export const {usersFetching, usersFetchingError, usersFetchingSuccess} = actions
export default reducer