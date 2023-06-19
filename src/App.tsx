import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import {PostContainer} from "./components/PostContainer";
import {PostContainer2} from "./components/PostContainer2";

function App() {
    // const {users, errors, isLoading} = useAppSelector(state => state.userReducer);
    // const dispatch = useAppDispatch();
    //
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, []);

    return (
    <div className="App">
        {/*{isLoading && (*/}
        {/*    <div className="App">*/}
        {/*        <h1>Идет загрузка</h1>*/}
        {/*    </div>*/}
        {/*)}*/}
        {/*{errors && (*/}
        {/*    <div className="App">*/}
        {/*        <h1>{errors}</h1>*/}
        {/*    </div>*/}
        {/*)}*/}
        {/*{users.map(user => {*/}
        {/*    return (*/}
        {/*        <div key={user.id}>*/}
        {/*            {user.name} - {user.email}*/}
        {/*        </div>*/}
        {/*    );*/}
        {/*})}*/}
        <div style={{display: 'flex'}}>
            <PostContainer />
            <PostContainer2 />
        </div>
    </div>
    );
}

export default App;
