import React, { createElement } from 'react';
import Message from "../Message/Message";

export class MessageField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { textAreaValue: ''}
        this.messages = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let message = this.state.textAreaValue;
            //[this.state.textAreaValue];
        this.messages.push(message);
        this.setState({textAreaValue: ''});
        console.log(this.messages);
    }


   handleChange(event) {
       this.setState({ textAreaValue: event.target.value });
   }

    render() {
        let messages = this.messages.map((message, index) => <Message text={message} key={index} />);
        return (
            <div>
                <div>{messages}</div>
                <p>Enter your message here:</p>
                <textarea name="message" id="textarea-message" value={this.state.textAreaValue} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Send</button>
            </div>
        );
    }
}
