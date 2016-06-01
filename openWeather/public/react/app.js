var React = require('react'),
    ReactDOM = require('react-dom'),
    request=require("superagent"),
    CityDropdown=require('./components/CityDropdown'),
    WeatherTable=require('./components/WeatherTable');
    

var HomePage = React.createClass({displayName: "HomePage",
    getInitialState:function(){
        return {
            message:"",
            data:{"coord":{"lon":77.6,"lat":12.98},"weather":[{"id":201,"main":"Thunderstorm","description":"thunderstorm with rain","icon":"11n"}],"base":"cmc stations","main":{"temp":303.15,"pressure":1013,"humidity":51,"temp_min":303.15,"temp_max":303.15},"wind":{"speed":7.7,"deg":180},"clouds":{"all":75},"dt":1464791400,"sys":{"type":1,"id":7823,"message":0.003,"country":"IN","sunrise":1464740536,"sunset":1464786777},"id":1277333,"name":"Bangalore","cod":200}
        }
    },
    componentDidMount:function () {
        var self=this;
        request
            .get('/weather?city=Bangalore')
            .end(function(err, result){
                if(err){
                    self.setState({message:"something went wrong.."});
                }else{
                    self.setState({data:result.body});
                }
            });
    },
    render: function() {
        return (
            React.createElement("div", {className: "mainContainer"}, 
                React.createElement("div", {id: "citydropdown"}

                ), 
                React.createElement("div", null
                    
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(HomePage, null),document.getElementsByTagName('body')[0]);
