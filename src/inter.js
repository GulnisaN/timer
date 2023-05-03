import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date()
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                currentTime: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="time">
                Current time: {this.state.currentTime.toLocaleTimeString()}
            </div>
        );
    }
}


export default Timer;
