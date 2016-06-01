var React = require('react'),
    ReactDOM = require('react-dom'),
    request=require("superagent"),
    _=require('underscore'),
    CityDropdown=require('./components/CityDropdown'),
    Message=require('./components/Message'),
    WeatherTable=require('./components/WeatherTable');

var HomePage = React.createClass({
    getInitialState:function(){
        return {
            title:'select city',
            message:"Select city to see Weather data",
            data:{}
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
        var dataBlock=(this.state.message==="")?<WeatherTable data={this.state.data}/>:<Message message={this.state.message}/>;
        return (
            <div className="mainContainer">
                <div id="citydropdown">
                    <CityDropdown dropdownSelection={this.dropdownSelection} title={this.state.title}/>
                </div>
                <div>
                    {dataBlock}
                </div>
            </div>
        );
    }
});

ReactDOM.render(<HomePage/>,document.getElementsByTagName('body')[0]);