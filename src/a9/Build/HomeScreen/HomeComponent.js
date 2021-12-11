import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import history from "../../../utils/history";

const HomeComponent = ({
                  active = 'for you'
                  }) =>
{
    const searchString = React.createRef();
    const onSearch = () => {
        if(searchString.current.value) {
            history.push(`/home?search=${searchString.current.value}`);
        }else{
            history.push('/home');
        }
        history.go();

    }
    const isActive = (active, path) => `nav-link text-color ${active === path? 'active' : ''}`
    return(
   <div>
            <div className="row mb-2">
                <div className="col-10">
                    <i className="fas fa-search magnifying-glass"></i>
                    <input ref={searchString} className="form-control rounded-pill position-search"
                           placeholder="          Search Jobs"/>
                </div>
                <div className="col-2">
                    <i className="fas fa-cog fa-2x cog-color" onClick={onSearch}></i>
                </div>
           </div>

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
