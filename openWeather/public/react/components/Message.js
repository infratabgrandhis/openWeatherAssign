var React = require('react'),
    Bootstrap=require('react-bootstrap');

var Message = React.createClass({displayName: "Message",
    render: function() {
        return (
            React.createElement("strong", null, this.props.message)
        );
    }
});

module.exports=Message;