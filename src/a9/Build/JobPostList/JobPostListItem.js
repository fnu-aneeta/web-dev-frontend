import React from "react";
import './jobpost-list-item.css';
import JobPostStats from "./JobPostStats";
import {useDispatch} from "react-redux";
import {deleteTweet} from "../../services/twitterService";


const JobPostListItem = ({tweet}) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        // dispatch({type: 'delete-tweet', tweet})
        deleteTweet(dispatch, tweet);

    }
    return(
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={tweet['logo-image']}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={deleteTweetClickHandler} className="fa fa-times fa-pull-right">

                        </i>
                        <span className="fw-bold">{tweet.userName}</span>
                        {tweet.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <span className="ms-1 text-secondary">@{tweet.handle}</span>
                        <div>
                            {tweet.tweet}
                        </div>
                        <JobPostStats tweet={tweet}/>
                    </td>
                </tr>
            </table>
        </li>
    );
};

export default JobPostListItem;