var React = require("react");
var ReactDOM=require("react-dom");
var reactRouter=require("react-router");
var Link=reactRouter.Link;

var Detail=React.createClass({
	getInitialState:function(){
		console.log(this.props.name)
		return {
			
		}
	},
	render:function(){
		return (
			<div className="kindConten">
				分类吃
				<Link to="/Cart">Cart</Link>
			</div>
		)
	}
});
module.exports = Detail;