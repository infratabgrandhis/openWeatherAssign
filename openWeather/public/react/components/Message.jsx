var React = require('react'),
    Bootstrap=require('react-bootstrap');

var Message = React.createClass({
    render: function() {
        return (
            <strong>{this.props.message}</strong>
        );
    }
});

module.exports=Message;