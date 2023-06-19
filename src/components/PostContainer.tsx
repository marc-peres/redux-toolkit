import React, {useEffect, useState} from 'react';
import { postAPI } from "../services/PostsService";
import {PostItem} from "./PostItem";
import {IPost} from "../models/IPost";

export const PostContainer= () => {
    const [limit, setLimit] = useState(10);
    // refetch - для принудительного обновления
    const {data: posts, isLoading, error, refetch} = postAPI.useFetchAllPostsQuery(limit);

    // pollingInterval - аналог WebSocket - будет отправлять повторный запрос через промежуток времени
    // const {data: posts, isLoading, error} = postAPI.useFetchAllPostsQuery(limit, {
    //     pollingInterval: 1000,
    // });

    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();

    useEffect(() => {
        setTimeout(() => {
            setLimit(3);
        }, 2000);
    }, [])

    const handleRemove = (post: IPost) => {
        deletePost(post);
    };
    const handleUpdate = (post: IPost) => {
        updatePost(post);
    };

    return (
        <div className={'post__list'}>
            {/*<button onClick={() => refetch()}>REFETCH</button>*/}
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка</h1>}
            {posts && posts.map(post => <PostItem update={handleUpdate} remove={handleRemove} key={post.id} post={post} />)}
        </div>
    );
};
