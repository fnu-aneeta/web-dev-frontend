import React from "react";
//import post from "./post.json";
import PostSummaryListItem from "./PostSummaryListItem";
import {useSelector} from "react-redux";

const selectAllPosts = (state) => state.post.post;

const PostSummaryList = ({title}) => {
    const post = useSelector(selectAllPosts);
    return(
        <ul className="list-group">
            {
                title &&
                <li className="list-group-item">
                    <h5 className="fw-bolder">{title}</h5>
                </li>
            }
    {
        post.map((post, idx) => {
            return(
                <PostSummaryListItem key={idx} post = {post}/>
            );
        })
    }
        </ul>
    );

}
export default PostSummaryList;