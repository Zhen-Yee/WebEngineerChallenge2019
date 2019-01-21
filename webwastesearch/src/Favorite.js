import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export const Favorite = props => {
    return (
        <div>
            <Button icon onClick={props.favorite}>
                <Icon name="star outlined"></Icon>
            </Button>
            <li>
                {props.title}<br></br>
                {props.description}
            </li>
        </div>
    );
}