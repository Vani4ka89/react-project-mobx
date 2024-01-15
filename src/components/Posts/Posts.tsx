import {FC, useEffect} from 'react';
import {observer} from "mobx-react-lite";

import {useStores} from "../../stores/root-store-context";

const Posts: FC = observer(() => {
    const {post: {getPostsAction, posts}} = useStores();

    useEffect(() => {
        getPostsAction();
    }, [getPostsAction]);

    if (!posts) {
        return null;
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
});

export {Posts};