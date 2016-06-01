var React = require('react');

var HomePage = React.createClass({displayName: "HomePage",

      render: function() {

        return (
            React.createElement("div", {className: "mui-app-content-canvas"}, "Test"
            )
        );
        }
});

module.exports = HomePage;
