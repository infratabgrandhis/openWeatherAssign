var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    DropdownButton=Bootstrap.DropdownButton,
    MenuItem=Bootstrap.MenuItem,
    ButtonToolbar=Bootstrap.ButtonToolbar;

var CityDropdown = React.createClass({displayName: "CityDropdown",
    render: function() {
        return (
            React.createElement(ButtonToolbar, null, 
                React.createElement(DropdownButton, {bsStyle: "default", title: this.props.title, id: "cityDropdown", onSelect: this.props.dropdownSelection}, 
                    React.createElement(MenuItem, {eventKey: "Bangalore"}, "Bangalore"), 
                    React.createElement(MenuItem, {eventKey: "Hyderabad"}, "Hyderabad"), 
                    React.createElement(MenuItem, {eventKey: "Chennai"}, "Chennai"), 
                    React.createElement(MenuItem, {eventKey: "Pune"}, "Pune")
                )
            )
        );
    }
});

module.exports=CityDropdown;