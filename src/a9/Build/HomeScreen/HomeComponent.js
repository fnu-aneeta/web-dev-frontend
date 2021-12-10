import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const HomeComponent = ({
                  active = 'for you'
                  }
) =>
{
    const isActive = (active, path) => `nav-link text-color ${active === path? 'active' : ''}`
    return(
   <div>
            <div className="row mb-2">
                <div className="col-10">
                    <i className="fas fa-search magnifying-glass"></i>
                    <input className="form-control rounded-pill position-search"
                           placeholder="          Search Twitter"/>
                </div>
                <div className="col-2">
                    <i className="fas fa-cog fa-2x cog-color"></i>
                </div>
           </div>

            {/*<ul className="nav nav-tabs">*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className={isActive(active, 'for you')} href="#">*/}
            {/*            <span className="d-lg-block d-md-4 d-xl-4 col-xxl-4">For you</span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className={isActive(active, 'trending')} href="#">*/}
            {/*            <span className="d-lg-block d-md-4 d-xl-4 col-xxl-4">Trending</span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className={isActive(active, 'news')} href="#">*/}
            {/*            <span className="d-lg-block d-md-4 d-xl-4 col-xxl-4">News</span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className={isActive(active, 'sports')} href="#">*/}
            {/*            <span className="d-lg-block d-md-4 d-xl-4 col-xxl-4">Sports</span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className={isActive(active, 'entertainment')} href="#">*/}
            {/*            <span className="d-sm-none d-md-block">Entertainment</span>*/}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*</ul>*/}

    <div className="card mt-2">
                    <img src="https://www.apa.org/images/2021-11-career-science_tcm7-299000_w640_n.png"
                         className="card-img-top"/>
                    <div className="lr">
                        <p>Find the Career You Deserve</p>
                    </div>

    </div>
       <PostSummaryList/>
</div>
  );
}
export default HomeComponent;
