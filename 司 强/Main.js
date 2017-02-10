var React = require("react");
var ReactDOM=require("react-dom");
var reactRouter=require("react-router");
var Router=reactRouter.Router;
var Route=reactRouter.Route;
var browserHistory =reactRouter.browserHistory ;
var IndexRedirect=reactRouter.IndexRedirect;
var HomeContent=require("./js/HomeContent");
var Mainfoot=require("./js/Mainfoot");
var Kind=require("./js/Kind");
var Cart=require("./js/Cart");
var Home=require("./js/Home");
var Detail=require("./js/Detail");
ReactDOM.render( 

    <Router history = {browserHistory} >
        <route path ="/" component={Home} >
        	<IndexRedirect to ="/HomeContent" />
        	<route path ="/Mainfoot" component={Mainfoot} />
        	<route path ="/Kind" component={Kind} />
        	<route path ="/Cart" component={Cart} />
        	<route path ="/Detail" component={Detail} />
        	<route path ="/HomeContent" component={HomeContent} />
        </route>
       
    </Router>
,document.getElementById("app"));