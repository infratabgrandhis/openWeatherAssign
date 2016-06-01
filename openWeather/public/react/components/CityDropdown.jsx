var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    DropdownButton=Bootstrap.DropdownButton,
    MenuItem=Bootstrap.MenuItem,
    ButtonToolbar=Bootstrap.ButtonToolbar;

var CityDropdown = React.createClass({

    render: function() {

        return (
            <ButtonToolbar>
                <DropdownButton bsStyle='default' title='select city' id='cityDropdown'>
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3" active>Active Item</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        );
    }
});

module.exports=CityDropdown;