var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    DropdownButton=Bootstrap.DropdownButton,
    MenuItem=Bootstrap.MenuItem,
    _=require("underscore"),
    ButtonToolbar=Bootstrap.ButtonToolbar;

var CityDropdown = React.createClass({displayName: "CityDropdown",
    render: function() {
        var self=this;
        return (
            React.createElement(ButtonToolbar, null, 
                React.createElement(DropdownButton, {bsStyle: "default", title: this.props.title, id: "cityDropdown", onSelect: this.props.dropdownSelection}, 
                    _.map(this.props.cityList,function (iterator){
                        return React.createElement(MenuItem, {eventKey: iterator}, iterator)
                    })
                )
            )
        );
    }
});

module.exports=CityDropdown;