import {FC, useEffect} from 'react';
import {postsStore} from "../../stores/posts-store";

const Posts: FC = () => {
    const {getPostsAction, posts} = postsStore;

    useEffect(() => {
        getPostsAction();
    }, [getPostsAction]);

    if (posts?.state === 'pending') {
        return <div>Loading!..</div>
    }
    if (posts?.state === 'rejected') {
        return <div>Error</div>
    }

    console.log(posts);

    return (
        <div>

        </div>
    )

    // return posts.case({
    //     pending:()=><div>Loading!..</div>,
    //     rejected:()=><div>Error!..</div>,
    //     fulfilled:(value)=>(
    //         <div>{value[0].body}</div>
    //     ),
    // });
};

export {Posts};