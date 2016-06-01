var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    Table=Bootstrap.Table;

var WeatherTable = React.createClass({displayName: "WeatherTable",
    render: function() {
        return (
            React.createElement(Table, {bordered: true, condensed: true, hover: true}, 
                React.createElement("tbody", null, 
                React.createElement("tr", null, 
                    React.createElement("td", null, "City"), 
                    React.createElement("td", null, this.props.data.name)
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "Weather"), 
                    React.createElement("td", null, this.props.data.weather[0].description)
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "Humidity"), 
                    React.createElement("td", null, this.props.data.main.humidity)
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "Pressure"), 
                    React.createElement("td", null, this.props.data.main.pressure, " hpa")
                ), 
                React.createElement("tr", null, 
                    React.createElement("td", null, "Geo coords"), 
                    React.createElement("td", null, "[ ", this.props.data.coord.lon, ",", this.props.data.coord.lat, " ]")
                )
                )
            )
        );
    }
});

module.exports=WeatherTable;