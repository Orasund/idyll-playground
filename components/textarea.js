import React from 'react';

class Textarea extends React.Component {

    setValue(event) {
        this.props.updateProps({
            value: event.target.value
        })
    }

    render() {
        return (
            <textarea style={{
                width: "100%"
            }}
                onChange={this.setValue.bind(this)}
                value={this.props.value}
            />
        );
    }
}

export default Textarea;