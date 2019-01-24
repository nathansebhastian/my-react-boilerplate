import React from "react";
import ReactDOM from "react-dom";
import "./style/main.less";

class Welcome extends React.Component {
    render () {
        return (
            <>
            <h1 className="header">Hello World from React boilerplate</h1>
            <p>Visit my repository at <a href="https://github.com/nsebhastian/my-react-boilerplate">GitHub</a></p>
            </>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
