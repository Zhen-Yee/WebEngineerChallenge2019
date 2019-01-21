import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export const Result = props => {
    let description = escape(props.description);
    let converted_desc = htmlDecode(unescape(description));

    return (
        <div>
            {props.favorited ? <Button icon onClick={props.favorite}><Icon name="star" style={{"color":"green"}}></Icon></Button> : <Button icon onClick={props.favorite}><Icon name="star"></Icon></Button>}
            <li>
                {props.title}<br></br>
                <div dangerouslySetInnerHTML={{
                    __html:
                        converted_desc
                }}></div>
            </li>
        </div>
    );
}

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }