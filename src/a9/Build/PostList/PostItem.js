import React from "react";
import '../ExploreScreen/explore.css';
import '../HomeScreen/home.css'

const PostItem = (
    {
    posts = {
        time: '2021-10-22',
        color: '@Inspiration4x',
        linkImage: 'https://i.ytimg.com/vi/_nwSmOEiDls/maxresdefault.jpg',
        linkTitle: 'Attract More Attention Sales And Profits',
        linkBody: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...',
        linkText: 'Readmore',
        replies: '4.2k',
        retweets: '3.5k',
        favs: '37.5k'
    }
}
) => {
    return(
        <div>

        <div className="row">
            {/*<div className="col-1 d-grid">*/}
            {/*    <img src={posts.avatarIcon} alt = "Avatar" width="32" className="rounded-circle float-start"/>&nbsp;*/}
            {/*</div>*/}
            <div>
                {/*<div className="fw-bold">{posts.userName}&nbsp;*/}
                    {/*<i className="fas fa-check-circle" style={{"fontSize": "0.9em"}}>&nbsp;</i>*/}
                    {/*<span className="wd-author-handle fw-normal">&nbsp;{posts.handle}*/}
                    {/*    <i className="fa fa-ellipsis-h float-end"></i>*/}
                    {/*</span>*/}
                {/*</div>*/}
               {/*{posts.body}&nbsp;*/}
               {/*    <a className="wd-text-link-inspiration4x">{posts.color}</a>&nbsp;*/}
               {/*     {posts.mission}*/}



                <div className="card wd-card-border img-fluid wd-color-card-body">
        {/*<div className = "card border-left border-right wd-card-rounded-border wd-color-card-body wd-border-top">*/}
            {/*<img src = {posts.linkImage}*/}
            {/*     className={`card-img-top  wd-card-image-border ${posts.linkImage} ? '' : 'wd-card-image-grimmy'}`}/>*/}

            <img src={posts.linkImage}/>

            <div className = {`card-body ${posts.linkBody ? '' : 'd-none'}`}>
                <div className = "card-title">
                    <h6 className="fw-bold">{posts.linkTitle}|{posts.time}</h6>
                    <h7 className = "fw-normal wd-text-body-font">{posts.linkBody}</h7>
                      <br/>
                    <i className="fas fa-link wd-text-body-font">&nbsp;</i>
                    <a className="wd-text-link fw-normal wd-text-body-font" href="https://www.netflix.com/title/81441273">{posts.linkText}</a>

                </div>
            </div>

        </div>


        {/*<div className="wd-icons">*/}
        {/*    <div className="wd-icon-distant">*/}
        {/*        <a className="wd-text-link" href = "/#">*/}
        {/*            <i className="far fa-comment"></i>*/}
        {/*        </a>*/}
        {/*        <span className="wd-numbers">*/}
        {/*            {posts.replies}*/}
        {/*        </span>*/}
        {/*    </div>*/}
        {/*    <div className="wd-icon-distant">*/}
        {/*        <a className="wd-text-link" href = "/#">*/}
        {/*            <i className="fas fa-retweet"></i>*/}
        {/*        </a>*/}
        {/*        <span className="wd-numbers">*/}
        {/*            {posts.retweets}*/}
        {/*        </span>*/}
        {/*    </div>*/}
        {/*    <div className="wd-icon-distant">*/}
        {/*        <a className="wd-text-link" href = "/#">*/}
        {/*            <i className="fa fa-heart wd-icon-heart" aria-hidden="true"></i>*/}
        {/*        </a>*/}
        {/*        <span className="wd-numbers">*/}
        {/*            {posts.favs}*/}
        {/*        </span>*/}
        {/*    </div>*/}
        {/*    <div className="wd-icon-distant">*/}
        {/*        <a className="wd-text-link d-sm-none d-md-inline-block d-lg-inline-block d-xl-inline-block" href = "/#">*/}
        {/*            <i className="fas fa-upload"></i>*/}
        {/*        </a>*/}
        {/*        <span className="wd-numbers"></span>*/}
        {/*    </div>*/}
        {/*</div>*/}
            </div>
        </div>
        <br/>
        </div>

        );


}
export default PostItem;



