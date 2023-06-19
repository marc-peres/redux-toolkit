import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    errors: string;
    count: number;
}
const initialState: UserState = {
    users: [],
    isLoading: false,
    errors: '',
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        // usersFetching(state) {
        //     state.isLoading = true;
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.users = action.payload;
        //     state.errors =  '';
        //     state.isLoading = false;
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.errors =  action.payload;
        //     state.isLoading = false;
        // }
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) =>  {
            state.isLoading = true;
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) =>  {
            state.users = action.payload;
            state.errors =  '';
            state.isLoading = false;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) =>  {
            state.errors =  action.payload;
            state.isLoading = false;
        },
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchUsers(), (state)) => {
    //         state.isLoading = true;
    //     }
    // }
});

export default userSlice.reducer;