import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from '../src';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Button>我是按钮</Button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react-root'));
