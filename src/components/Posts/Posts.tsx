import {FC, useEffect} from 'react';
import {observer} from "mobx-react-lite";

import {useStores} from "../../stores/root-store-context";

const Posts: FC = observer(() => {
    const {posts: {getPostsAction, posts, error}} = useStores();

    useEffect(() => {
        getPostsAction();
    }, [getPostsAction]);

    if (error) {
        return <div>Something went wrong</div>
    }

    return (
        <div>
            {posts && posts.map(post => (
                <div key={post.id}>
                    <div>{post.id}</div>
                    <div>{post.title}</div>
                </div>
            ))}
        </div>
    )
});

export {Posts};