
var React = require("react");
var ReactDOM=require("react-dom");
var reactRouter=require("react-router");
var Link=reactRouter.Link;

var Home = React.createClass({
  render() {
    return (
      <div id="page">
       <div id="content">
       		
       		{this.props.children}
       </div>
       <div id="footer">
	        <ul >
	        <li><Link to="/HomeContent">HomeContent</Link></li>
	          <li><Link to="/Mainfoot">Mainfoot</Link></li>
	          <li><Link to="/Kind">Kind</Link></li>
	        </ul>
		</div>
      </div>
    )
  }
})

module.exports = Home;