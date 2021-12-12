import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import JobPostListItem from "./JobPostListItem";
import {fetchAllTweets} from "../../services/twitterService";

const selectAllTweets = (state) => state.tweets.tweets;

const JobPostList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <JobPostListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default JobPostList;