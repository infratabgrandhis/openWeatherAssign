var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    DropdownButton=Bootstrap.DropdownButton,
    MenuItem=Bootstrap.MenuItem,
    _=require("underscore"),
    ButtonToolbar=Bootstrap.ButtonToolbar;

var CityDropdown = React.createClass({
    render: function() {
        var self=this;
        return (
            <ButtonToolbar>
                <DropdownButton bsStyle='default' title={this.props.title} id='cityDropdown' onSelect={this.props.dropdownSelection}>
                    {_.map(this.props.cityList,function (iterator){
                        return <MenuItem eventKey={iterator}>{iterator}</MenuItem>
                    })}
                </DropdownButton>
            </ButtonToolbar>
        );
    }
});

module.exports=CityDropdown;