var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    DropdownButton=Bootstrap.DropdownButton,
    MenuItem=Bootstrap.MenuItem,
    ButtonToolbar=Bootstrap.ButtonToolbar;

var CityDropdown = React.createClass({
    render: function() {
        return (
            <ButtonToolbar>
                <DropdownButton bsStyle='default' title={this.props.title} id='cityDropdown' onSelect={this.props.dropdownSelection}>
                    <MenuItem eventKey="Bangalore">Bangalore</MenuItem>
                    <MenuItem eventKey="Hyderabad">Hyderabad</MenuItem>
                    <MenuItem eventKey="Chennai">Chennai</MenuItem>
                    <MenuItem eventKey="Pune">Pune</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        );
    }
});

module.exports=CityDropdown;