(this["webpackJsonpdirective-service-client"]=this["webpackJsonpdirective-service-client"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"host":"https://directory-service-server.herokuapp.com","port":433}')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),d=n(3),i=n.n(d),o=(n(13),n(4)),s=n(5),l=n(8),r=n(7),u=n(6),h=(n(14),n(0)),m=u.host,f=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).authenticate=function(){fetch(m+"/login",{method:"GET",headers:{username:"reactapp"}}).then((function(e){return e.ok?e.json():null})).then((function(e){c.setState({token:e.token,selectedNodeId:"root"},(function(){c.getData()}))}))},c.unauthenticate=function(){fetch(m+"/logout",{method:"GET",headers:{token:c.state.token}})},c.getData=function(){fetch(m+"/folder/"+c.state.selectedNodeId,{method:"GET",headers:{token:c.state.token}}).then((function(e){return e.ok?e.json():(c.authenticate(),null)})).then((function(e){if(e){var t={id:e.id,name:e.name,children:e.children.map((function(e){return{id:e.id,name:e.name}}))};c.setState({selectedFolder:t})}}))},c.itemClicked=function(e){c.setState({selectedNodeId:e.id,addItemSelected:!1},(function(){c.getData()}))},c.backClicked=function(){c.setState({})},c.addItemClicked=function(){c.setState({addItemSelected:!0,newItemName:"New Folder"},(function(){c.newItemTextField.current.focus()}))},c.addItemSaveClicked=function(){c.setState({addItemSelected:!1},(function(){fetch(m+"/folder",{method:"PUT",body:JSON.stringify({folderRequest:{name:c.state.newItemName,parentId:c.state.selectedNodeId}}),headers:{"Content-Type":"application/json",token:c.state.token}}).then((function(e){if(!e.ok)return c.authenticate(),null;c.getData()}))}))},c.addItemCancelClicked=function(){c.setState({newItemName:"New Folder",addItemSelected:!1})},c.onNewItemNameChange=function(e){c.setState({newItemName:e.target.value})},c.rootClicked=function(){c.setState({selectedNodeId:"root",addItemSelected:!1},(function(){c.getData()}))},c.deleteItemClicked=function(e){fetch(m+"/folder/"+e.id,{method:"DELETE",body:JSON.stringify({folderRequest:{parentId:c.state.selectedNodeId}}),headers:{"Content-Type":"application/json",token:c.state.token}}).then((function(e){if(!e.ok)return c.authenticate(),null;c.getData()}))},c.state={selectedFolder:{name:"root",children:[]},selectedNodeId:"",addItemSelected:!1,newItemName:"New Folder",token:""},c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.authenticate(),this.newItemTextField=a.a.createRef()}},{key:"render",value:function(){var e,t=this,n=[],c="This folder is empty";return this.state.selectedFolder.children.length>0&&(n=this.state.selectedFolder.children.map((function(e){return Object(h.jsxs)("div",{className:"item",onClick:function(){return t.itemClicked(e)},children:[Object(h.jsx)("div",{className:"itemText",children:e.name}),"root"!==e.id?Object(h.jsx)("div",{className:"deleteButton",onClick:function(n){n.stopPropagation(),t.deleteItemClicked(e)},children:"Delete"}):""]})}))),""!==this.state.selectedNodeId&&(e=Object(h.jsx)("div",{className:"footer",children:Object(h.jsx)("div",{className:"addButton",onClick:this.addItemClicked,children:"Add a folder"})})),this.state.addItemSelected&&n.push(Object(h.jsxs)("div",{className:"addItemSection",children:[Object(h.jsx)("input",{ref:this.newItemTextField,className:"addItemTextField",type:"text",onFocus:function(e){return e.target.select()},value:this.state.newItemName,onChange:this.onNewItemNameChange}),Object(h.jsx)("div",{className:"addItemSaveButton",onClick:this.addItemSaveClicked,children:"Save"}),Object(h.jsx)("div",{className:"addItemCancelButton",onClick:this.addItemCancelClicked,children:"Cancel"})]})),n.length>0&&(c=n),Object(h.jsxs)("div",{className:"pageContent",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"headerLeftButtons",children:[Object(h.jsx)("div",{className:"backButton",onClick:this.backClicked,children:"Back"}),Object(h.jsx)("div",{className:"backButton",onClick:this.rootClicked,children:"Root"})]}),Object(h.jsx)("div",{className:"headerText",children:this.state.selectedFolder.name})]}),Object(h.jsx)("div",{className:"itemsContainer",children:c}),e]})}}]),n}(a.a.Component);n.p,n(16);var j=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,d=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),d(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),k()}],[[17,1,2]]]);
//# sourceMappingURL=main.7444ab97.chunk.js.map