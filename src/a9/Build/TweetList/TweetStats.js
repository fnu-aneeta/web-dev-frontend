import React from "react";
import {useDispatch} from "react-redux";
// import {likeTweet} from "../../../../services/twitterService";
import {likeTweet} from "../../services/twitterService";

const TweetStats = (
    {
        tweet
    }
) => {
    const dispatc = useDispatch();
    const likeClickHandler = () => {
        // dispatc({type: 'like-tweet', tweet});

        if(tweet.liked === undefined || tweet.liked === false) {
            tweet.liked = true;
            tweet.stats.likes++;
        }
        else {
            tweet.liked = false;
            tweet.stats.likes--;
        }


        likeTweet(dispatc, tweet);
    };
    if(!tweet || !tweet.stats) return null;
    return (
        <div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2">
            </i>
            {tweet && tweet.stats && tweet.stats.comments}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2">
            </i>
            {tweet && tweet.stats &&tweet.stats.retweets}
        </div>
        <div className="col" onClick={likeClickHandler}>
            {
                    tweet && tweet.stats &&tweet.liked &&
                <i className="fas fa-heart me-2"
                   style={{color: tweet.liked ? 'red': "white"}}>
                </i>
            }
            {
                tweet && !tweet.liked &&
                <i className="far fa-heart me-2"></i>
            }
            {tweet && tweet.stats && tweet.stats.likes}
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2">
            </i>
        </div>
    </div>
    )
}

export default TweetStats;