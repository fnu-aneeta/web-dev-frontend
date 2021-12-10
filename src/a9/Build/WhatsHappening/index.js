import React, {useState} from "react";
import {useDispatch} from "react-redux";
// import {postNewTweet} from "../../../../services/twitterService";
import {postNewTweet} from "../../services/twitterService";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tweetClickHandler = () => {
        // dispatch({type: 'create-tweet',
        //     tweet: whatsHappening
        // });

        postNewTweet(dispatch, {
            tweet: whatsHappening
        });



        // dispatch({type: 'create-tweet',
        //     tweet: {
        //         tweet: whatsHappening
        //     }
        // });
        //console.log(whatsHappening);
        // dispatch({type: 'create-tweet',
        //     tweet: whatsHappening
        // });
    }
    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        {/*<img src={'https://i.etsystatic.com/17857814/r/il/24aec7/1531067118/il_1588xN.1531067118_mqui.jpg'}*/}
                        {/*     className="rounded-circle"*/}
                        {/*     style={{width: '48px', margin: '16px'}}/>*/}
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "black",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "white"}}
                                  placeholder=" Job Posting">
                        </textarea>
                        <hr/>
                        <span>
                            <a href="#">
                                <i className="far fa-image me-3">
                            </i>
                            </a>
                            <a href="#">
                                <i className="fas fa-chart-bar me-3">
                                </i>
                            </a>
                            <a href="#">
                                <i className="far fa-smile me-3">
                                </i>
                            </a>
                            <a href="#">
                                <i className="far fa-calendar me-3">
                                </i>
                            </a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Post
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;