/**
 * Created by Rayr Lee on 2019/7/11.
 */
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {Button} from 'react-rayr-component';

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>我是按钮</Button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react-root'));
