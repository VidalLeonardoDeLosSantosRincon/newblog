import React,{Fragment} from 'react';

import "../assts/css/Post.css";

const Post = (props)=>{
    return(
        <Fragment>
            <div className="ctr-post">
                <div className="ctr-post-img-box">
                    {props.post.text}
                </div>
                <div className="ctr-post-info-box">
                    {props.post.date}
                </div>
            </div>
        </Fragment>
    );
};
export default Post;