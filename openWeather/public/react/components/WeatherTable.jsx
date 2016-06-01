var React = require('react'),
    Bootstrap=require('react-bootstrap'),
    Table=Bootstrap.Table;

var WeatherTable = React.createClass({
    render: function() {
        return (
            <Table bordered condensed hover>
                <tbody>
                <tr>
                    <td>City</td>
                    <td>{this.props.data.name}</td>
                </tr>
                <tr>
                    <td>Weather</td>
                    <td>{this.props.data.weather[0].description}</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{this.props.data.main.humidity}</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{this.props.data.main.pressure} hpa</td>
                </tr>
                <tr>
                    <td>Geo coords</td>
                    <td>[ {this.props.data.coord.lon},{this.props.data.coord.lat} ]</td>
                </tr>
                </tbody>
            </Table>
        );
    }
});

module.exports=WeatherTable;