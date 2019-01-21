import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export const Favorite = props => {
    let description = escape(props.description);
    let converted_desc = htmlDecode(unescape(description));
    console.log(converted_desc)
    return (
        <div>
            <Button icon onClick={props.unfavorite}>
                <Icon name="star" style={{ "color": "green" }}></Icon>
            </Button>
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

function htmlDecode(input) {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}