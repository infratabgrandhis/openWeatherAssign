var React = require('react'),
    ReactDOM = require('react-dom'),
    request=require("superagent"),
    _=require('underscore'),
    CityDropdown=require('./components/CityDropdown'),
    Message=require('./components/Message'),
    WeatherTable=require('./components/WeatherTable');

var HomePage = React.createClass({displayName: "HomePage",
    getInitialState:function(){
        return {
            title:'select city',
            message:"Select city to see Weather data",
            data:{},
            cityList:['Bangalore','Chennai','Hyderabad','Pune']
        }
    },
    dropdownSelection:function (key) {
        var self=this;
        request
            .get('/weather?city='+key)
            .end(function(err, result){
                if(err){
                    self.setState({message:"something went wrong..",title:key});
                }else{
                    self.setState({data:result.body,title:key,message:""});
                }
            });
    },
    render: function() {
        var dataBlock=(this.state.message==="")?React.createElement(WeatherTable, {data: this.state.data}):React.createElement(Message, {message: this.state.message});
        return (
            React.createElement("div", {className: "mainContainer"}, 
                React.createElement("div", {id: "citydropdown"}, 
                    React.createElement(CityDropdown, {dropdownSelection: this.dropdownSelection, title: this.state.title, cityList: this.state.cityList})
                ), 
                React.createElement("div", null, 
                    dataBlock
                )
            )
        );
    }
});

ReactDOM.render(React.createElement(HomePage, null),document.getElementsByTagName('body')[0]);