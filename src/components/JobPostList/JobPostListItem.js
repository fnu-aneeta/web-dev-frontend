import React from "react";
import './jobpost-list-item.css';
import JobPostStats from "./JobPostStats";
import {useDispatch} from "react-redux";
import {deleteTweet} from "../../a9/services/jobPostService";


const JobPostListItem = ({jobPost}) => {
    const dispatch = useDispatch();
    const onDeleteJobPost = () => {
        deleteTweet(dispatch, jobPost);
    }
    return (
        <li className="list-group-item">
            <table>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={jobPost['logo-image']}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i onClick={onDeleteJobPost} className="fa fa-times fa-pull-right">

                        </i>
                        <span className="fw-bold"><a href={jobPost.url}> {jobPost.title}</a></span>
                        {jobPost.verified && <i className="ms-1 fas fa-badge-check"></i>}
                        <div className="ms-1 text-secondary">
                            <span>{jobPost && jobPost.address && jobPost.address.city}, </span>
                            <span>{jobPost && jobPost.address && jobPost.address.state} </span>
                            <span>({jobPost && jobPost.address && jobPost.address.country})</span>
                        </div>

                        <br/>
                        <div>
                            <ul className="list-group">
                                {
                                    jobPost &&
                                    jobPost.qualifications &&
                                    jobPost.qualifications.map(qualification => <li>{qualification}</li>)
                                }
                            </ul>
                        </div>

                        <JobPostStats stats={jobPost}/>
                    </td>
                </tr>
            </table>
        </li>
    );
};

export default JobPostListItem;