import React from 'react';
import { Button } from 'semantic-ui-react';

class SemanticUI extends React.Component {
    render () {
        return (<div>
            <Button animated='fade'>
                <Button.Content visible>
                    Sign-up for a Pro account
                </Button.Content>
                <Button.Content hidden>
                    $12.99 a month
                </Button.Content>
            </Button>
        </div>);
    }
}

export default SemanticUI;
