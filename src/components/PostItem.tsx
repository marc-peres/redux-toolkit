import {IPost} from "../models/IPost";
import React, {FC, JSX} from "react";

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

export const PostItem: FC<PostItemProps> = ({ post, update, remove }): JSX.Element => {
    const handleRemovePost = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post);
    }

    const handleUpdatePost = (event: React.MouseEvent) => {
        event.stopPropagation();
        const title= prompt() || '';

        update({...post, title: title});
    }

    return (
        <div className={'post'} onClick={handleUpdatePost}>
            {post.id}. {post.title}
            <button onClick={handleRemovePost}>DELETE</button>
        </div>
    );
};
