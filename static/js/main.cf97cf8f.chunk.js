(this.webpackJsonphousify=this.webpackJsonphousify||[]).push([[0],{13:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),n=i(3),c=i.n(n),r=(i(13),i(1)),o=function(e){var t=e.data;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"house-card-container",children:[Object(r.jsx)("img",{src:t.img}),Object(r.jsx)("h2",{children:t.title}),Object(r.jsx)("p",{children:t.dsc})]},t.id)})},u=i(7);var d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{className:"nav",children:Object(r.jsx)("div",{className:"company-logo",children:Object(r.jsx)("p",{children:"Housify"})})}),Object(r.jsx)("section",{className:"search-engine-section",children:Object(r.jsxs)("div",{className:"search-container",children:[Object(r.jsx)("div",{className:"background-img"}),Object(r.jsx)("div",{className:"image-overlay",children:Object(r.jsx)("form",{children:Object(r.jsx)("input",{className:"search-engine-input"})})})]})}),Object(r.jsx)("section",{className:"house-card-section",children:u.Cards.map((function(e){return Object(r.jsx)(o,{data:e})}))})]})},l=i(2),m=Object(l.b)({name:"posts",initialState:[{id:"1",title:"First Post!",content:"Hello!"},{id:"2",title:"Second Post!",content:"Some text"}],reducers:{postAdded:function(e,t){e.push(t.payload)}}}),j=(m.actions.postAdded,m.reducer),h=Object(l.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1}}}),p=(h.actions.increment,h.reducer),b=Object(l.a)({reducer:{posts:j,counter:p}}),v=i(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(v.a,{store:b,children:Object(r.jsx)(d,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e){e.exports=JSON.parse('{"Cards":[{"id":1,"title":"Sell","dsc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi","img":"./images/house1.png"},{"id":2,"title":"Buy","dsc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi","img":"./images/house2.png"},{"id":3,"title":"Rent","dsc":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi","img":"./images/house3.png"}]}')}},[[19,1,2]]]);
//# sourceMappingURL=main.cf97cf8f.chunk.js.map