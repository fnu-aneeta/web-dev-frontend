import React from "react";
import '../HomeScreen/home.css';

const PostSummaryListItem = (
    {
        post
    }
) => {

    return(
              <li className="list-group-item">

                  {/*{JSON.stringify(post)}*/}
                            <div className="row">
                                <div className="col-10">

                                    <div className="fw-bold">{post.title}</div>

                                   <div>{post.companyName}</div>


                                    <div>
                                        <span>{post && post.address && post.address.city}, </span>
                                        <span>{post && post.address && post.address.state} </span>
                                        <span>({post && post.address && post.address.country})</span>
                                    </div>

                                    <div>
                                        <span style={{"fontSize": "0.8em"}}>
                                            {post && post.salary && post.salary.min} -
                                            {post && post.salary && post.salary.max}
                                        </span>
                                    </div>

                                  <br/>
                                    <h7 className="fw-normal text-color">{post.description}</h7>
                                </div>

                                <div className="col-2 mt-3">
                                    <img className="rounded img-fluid" src={post['logo-image']}
                                         width="75px"
                                         height="75px"/>
                                </div>
                                    {/*<div className="fw-bold">{post.title}</div>*/}

                            </div>
                                {/*<div className="col-3 col-md-2 mt-3">*/}
                                {/*         <img src={post.image}*/}
                                {/*         // alt="qwe"*/}
                                {/*         width="50"*/}
                                {/*         height="50"*/}
                                {/*         className="float-end"*/}
                                {/*         style={{"borderRadius" : "10px"}}/>*/}
                                {/*</div>*/}



              </li>
    );
}
export default PostSummaryListItem;
