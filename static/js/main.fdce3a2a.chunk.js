(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){},32:function(e,t,n){e.exports=n(85)},37:function(e,t,n){},38:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=(n(37),n(4)),s=n(5),u=n(8),h=n(6),l=n(9),d=n(7),f=n(16),m=n.n(f),p=(n(22),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={data:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"updateMarkdown",value:function(e){var t=this;fetch(e).then(function(e){return e.text()}).then(function(e){return m()(e,{sanitize:!0})}).then(function(e){t.setState({data:{__html:e}})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"md-doc",dangerouslySetInnerHTML:this.state.data})}}]),t}(c.a.Component)),b=n(20),v=(n(38),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).changeDoc=n.changeDoc.bind(Object(l.a)(n)),n.changeBranch=n.changeBranch.bind(Object(l.a)(n)),n.state={branches:[],docs:[]},n.doc=null,n.branch="master",n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.repo.listBranches().then(function(t){e.setState({branches:t.data})})}},{key:"updateURL",value:function(){var e=this;this.branch&&this.doc&&this.props.repo.getContents(this.branch.name,this.doc.path,!1).then(function(t){e.props.onURL(t.data.download_url)})}},{key:"changeDoc",value:function(e){this.doc=e,this.updateURL()}},{key:"changeBranch",value:function(e){var t=this;this.branch=e,this.props.repo.getContents(this.branch.name,"info.json","false").then(function(e){t.setState({docs:e.data.docs},t.updateURL)})}},{key:"render",value:function(){return c.a.createElement("header",{className:"doc-selector"},c.a.createElement("div",{className:"refspec"},"Branch:",c.a.createElement(b.a,{options:this.state.branches,getOptionLabel:function(e){return e.name},onChange:this.changeBranch})),c.a.createElement("div",{className:"document"},"Document:",c.a.createElement(b.a,{options:this.state.docs,getOptionLabel:function(e){return e.name},onChange:this.changeDoc})))}}]),t}(c.a.Component)),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).onURL=n.onURL.bind(Object(l.a)(n)),n._doc=c.a.createRef(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onURL",value:function(e){this._doc.current.updateMarkdown(e)}},{key:"render",value:function(){return c.a.createElement("header",{className:"DocViewer"},c.a.createElement(v,{repo:this.props.repo,onURL:this.onURL}),c.a.createElement(p,{ref:this._doc}))}}]),t}(c.a.Component),j=n(13),g=(n(42),n(29)),k=n.n(g),E=n(30),w=n.n(E),y=n(31),D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={data:null},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateMarkdown(this.props.urls)}},{key:"updateMarkdown",value:function(e){var t=this;y.map(e,function(e){return fetch(e).then(function(e){return e.text()}).then(function(e){return m()(e,{sanitize:!0})})}).then(function(e){var n=w.a.execute(e[0],e[1]);t.setState({data:{__html:n}})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"md-doc",dangerouslySetInnerHTML:this.state.data})}}]),t}(c.a.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).onChangeBase=n.onChangeBase.bind(Object(l.a)(n)),n.onChangeDiff=n.onChangeDiff.bind(Object(l.a)(n)),n._diff=c.a.createRef(),n.urls=[null,null],n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onChangeBase",value:function(e){this.urls[0]=e,this.updateDiff()}},{key:"onChangeDiff",value:function(e){this.urls[1]=e,this.updateDiff()}},{key:"updateDiff",value:function(){this.urls[0]&&this.urls[1]&&this._diff.current.updateMarkdown(this.urls)}},{key:"render",value:function(){return c.a.createElement("header",{className:"DiffViewer"},"Document 1:",c.a.createElement(v,{repo:this.props.repo,onURL:this.onChangeBase}),"Document 2:",c.a.createElement(v,{repo:this.props.repo,onURL:this.onChangeDiff}),c.a.createElement(D,{ref:this._diff}))}}]),t}(c.a.Component);var L=function(){var e=new k.a({username:"TIMVRAKAS",token:"496052d84361126df057edb22030a0d2c227b6c5"}).getRepo("Timvrakas","ASSU-LegalDiff");return c.a.createElement("div",{className:"App"},c.a.createElement(j.d,null,c.a.createElement(j.b,null,c.a.createElement(j.a,null,"View Documents"),c.a.createElement(j.a,null,"Compare Versions")),c.a.createElement(j.c,null,c.a.createElement(O,{repo:e})),c.a.createElement(j.c,null,c.a.createElement(C,{repo:e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.fdce3a2a.chunk.js.map