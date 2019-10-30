import React,{Fragment} from 'react';

import "../../assts/css/Content.css";

const Content = (props)=>{
    return(
        <Fragment>
            <div className="ctr">
                {props.body}
            </div>
        </Fragment>
    );       
};
export default Content;