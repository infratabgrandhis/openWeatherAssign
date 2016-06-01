var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    DropdownButton=Bootstrap.DropdownButton,
    MenuItem=Bootstrap.MenuItem,
    ButtonToolbar=Bootstrap.ButtonToolbar;

var CityDropdown = React.createClass({displayName: "CityDropdown",

    render: function() {

        return (
            React.createElement(ButtonToolbar, null, 
                React.createElement(DropdownButton, {bsStyle: "default", title: "select city", id: "cityDropdown"}, 
                    React.createElement(MenuItem, {eventKey: "1"}, "Action"), 
                    React.createElement(MenuItem, {eventKey: "2"}, "Another action"), 
                    React.createElement(MenuItem, {eventKey: "3", active: true}, "Active Item"), 
                    React.createElement(MenuItem, {divider: true}), 
                    React.createElement(MenuItem, {eventKey: "4"}, "Separated link")
                )
            )
        );
    }
});

module.exports=CityDropdown;