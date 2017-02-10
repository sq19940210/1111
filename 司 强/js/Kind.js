var React = require("react");
var ReactDOM=require("react-dom");
var reactRouter=require("react-router");
var Link=reactRouter.Link;
var Detail=require("./Detail")

var Kind=React.createClass({
	render:function(){
		return (
			<div className="detailConten">
				detail378253-980723909080
				<Link to="/Detail" name="lili">Cart</Link>
			</div>
		)
	}
});
module.exports = Kind;