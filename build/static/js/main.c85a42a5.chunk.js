(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/images/sage.jpg","clicked":false},{"id":2,"image":"/assets/images/marigold.jpg","clicked":false},{"id":3,"image":"/assets/images/liquorice.jpg","clicked":false},{"id":4,"image":"/assets/images/herb.jpg","clicked":false},{"id":5,"image":"/assets/images/Clover.jpg","clicked":false},{"id":6,"image":"/assets/images/balinese.jpg","clicked":false},{"id":7,"image":"/assets/images/aloe.jpg","clicked":false}]')},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(14),a(5)),o=a(1),l=a(2),u=a(4),m=a(3),d=(a(15),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={message:"",animating:!1},e.renderMessage=function(){switch(e.state.message){case"correct":return"Great Work!";case"incorrect":return"Wrong!";default:return"Click a plant!"}},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,n=e.topScore,r={animating:!0};r.message=0===a&&0===n?"":0===a&&n>0?"incorrect":"correct",a===this.props.score&&this.state.message===r.message||this.setState(r)}},{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),a}(n.Component));a(16);var f=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand"},r.a.createElement("a",{href:"/"},"Clicky Game")),r.a.createElement(d,{score:e.score,topScore:e.topScore}),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};a(17);var h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(18);var g=function(e){return r.a.createElement("main",{className:"container"},e.children)};a(19);var p=function(e){return r.a.createElement("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};a(20);var v=function(){return r.a.createElement("footer",{className:"footer"})},k=a(8),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:k,score:0,topScore:0},e.handleCorrectGuess=function(t){var a=e.state,n=a.topScore,r=a.score+1,c=Math.max(r,n);e.setState({data:e.shuffleData(t),score:r,topScore:c})},e.handleIncorrectGuess=function(t){e.setState({data:e.resetData(t),score:0})},e.resetData=function(t){var a=t.map((function(e){return Object(i.a)({},e,{clicked:!1})}));return e.shuffleData(a)},e.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n,t--}return e},e.handleItemClick=function(t){var a=!1,n=e.state.data.map((function(e){var n=Object(i.a)({},e);return n.id===t&&(n.clicked||(n.clicked=!0,a=!0)),n}));a?e.handleCorrectGuess(n):e.handleIncorrectGuess(n)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(h,null),r.a.createElement(g,null,this.state.data.map((function(t){return r.a.createElement(p,{key:t.id,id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image})}))),r.a.createElement(v,null))}}]),a}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c85a42a5.chunk.js.map