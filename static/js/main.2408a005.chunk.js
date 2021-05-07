(this["webpackJsonpdirective-service-client"]=this["webpackJsonpdirective-service-client"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('{"host":"https://directory-service-server.herokuapp.com","port":433}')},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),d=n.n(i),s=(n(13),n(4)),o=n(5),l=n(8),r=n(7),u=n(6),m=(n(14),n(0)),h=u.host,f=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).authenticate=function(){fetch(h+"/login",{method:"GET",headers:{username:"reactapp"}}).then((function(e){return e.ok?e.json():null})).then((function(e){a.setState({token:e.token,selectedNodeId:"root",isLoading:!1},(function(){a.getData()}))}))},a.unauthenticate=function(){fetch(h+"/logout",{method:"GET",headers:{token:a.state.token}})},a.getData=function(){a.setState({isLoading:!0},(function(){fetch(h+"/folder/"+a.state.selectedNodeId,{method:"GET",headers:{token:a.state.token}}).then((function(e){return e.ok?e.json():(a.authenticate(),null)})).then((function(e){if(e){var t={id:e.id,name:e.name,children:e.children.map((function(e){return{id:e.id,name:e.name}}))};a.setState({selectedFolder:t,isLoading:!1})}}))}))},a.itemClicked=function(e){a.setState({selectedNodeId:e.id,addItemSelected:!1},(function(){a.getData()}))},a.backClicked=function(){a.setState({})},a.addItemClicked=function(){a.setState({addItemSelected:!0,newItemName:"New Folder"},(function(){a.newItemTextField.current.focus()}))},a.addItemSaveClicked=function(){a.setState({addItemSelected:!1},(function(){fetch(h+"/folder",{method:"PUT",body:JSON.stringify({folderRequest:{name:a.state.newItemName,parentId:a.state.selectedNodeId}}),headers:{"Content-Type":"application/json",token:a.state.token}}).then((function(e){if(!e.ok)return a.authenticate(),null;a.getData()}))}))},a.addItemCancelClicked=function(){a.setState({newItemName:"New Folder",addItemSelected:!1})},a.onNewItemNameChange=function(e){a.setState({newItemName:e.target.value})},a.rootClicked=function(){a.setState({selectedNodeId:"root",addItemSelected:!1},(function(){a.getData()}))},a.deleteItemClicked=function(e){fetch(h+"/folder/"+e.id,{method:"DELETE",body:JSON.stringify({folderRequest:{parentId:a.state.selectedNodeId}}),headers:{"Content-Type":"application/json",token:a.state.token}}).then((function(e){if(!e.ok)return a.authenticate(),null;a.getData()}))},a.state={selectedFolder:{name:"root",children:[]},selectedNodeId:"",addItemSelected:!1,newItemName:"New Folder",token:"",isLoading:!1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0},(function(){e.authenticate(),e.newItemTextField=c.a.createRef()}))}},{key:"render",value:function(){var e,t=this,n=[],a=Object(m.jsx)("div",{className:"emptyMessage",children:"This folder is empty"});return this.state.selectedFolder.children.length>0&&(n=this.state.selectedFolder.children.map((function(e){return Object(m.jsxs)("div",{className:"item",onClick:function(){return t.itemClicked(e)},children:[Object(m.jsx)("div",{className:"itemText",children:e.name}),"root"!==e.id?Object(m.jsx)("div",{className:"deleteButton",onClick:function(n){n.stopPropagation(),t.deleteItemClicked(e)}}):""]})}))),""!==this.state.selectedNodeId&&(e=Object(m.jsx)("div",{className:"footer",children:Object(m.jsx)("div",{className:"addButton",onClick:this.addItemClicked,children:"Add a folder"})})),this.state.addItemSelected&&n.push(Object(m.jsxs)("div",{className:"addItemSection",children:[Object(m.jsx)("input",{ref:this.newItemTextField,className:"addItemTextField",type:"text",onFocus:function(e){return e.target.select()},value:this.state.newItemName,onChange:this.onNewItemNameChange}),Object(m.jsx)("div",{className:"addItemSaveButton",onClick:this.addItemSaveClicked}),Object(m.jsx)("div",{className:"addItemCancelButton",onClick:this.addItemCancelClicked})]})),n.length>0&&(a=n),Object(m.jsxs)("div",{className:"pageContent",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsxs)("div",{className:"headerLeftButtons",children:[Object(m.jsx)("div",{className:"backButton",onClick:this.backClicked}),Object(m.jsx)("div",{className:"rootButton",onClick:this.rootClicked})]}),Object(m.jsx)("div",{className:"headerText",children:this.state.selectedFolder.name})]}),Object(m.jsxs)("div",{className:"itemsContainer",children:[this.state.isLoading&&Object(m.jsx)("div",{className:"loading"}),a]}),e]})}}]),n}(c.a.Component);n.p,n(16);var j=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,d=t.getTTFB;n(e),a(e),c(e),i(e),d(e)}))};d.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j,{})}),document.getElementById("root")),k()}],[[17,1,2]]]);
//# sourceMappingURL=main.2408a005.chunk.js.map