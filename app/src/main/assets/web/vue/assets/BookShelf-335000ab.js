import{a2 as $,n as T,o as i,d as l,g as e,F as N,P as J,t as d,c as G,w as V,f as P,M as B,u as s,a3 as D,p as W,i as O,s as X,z as f,O as j,a4 as ee,T as te,k as y,e as S,A as se,L as ae,v as z,I as oe,B as ne}from"./vendor-b9134af1.js";import{d as ce,u as re}from"./loading-895cca8e.js";import{_ as Z,u as ie,A as M}from"./index-aa0dac2e.js";const H=o=>(W("data-v-644f2490"),o=o(),O(),o),le={class:"books-wrapper"},de={class:"wrapper"},ue=["onClick"],he={class:"cover-img"},pe=["src"],_e={class:"info"},ve={class:"name"},ge={class:"sub"},me={class:"author"},fe={key:0,class:"tags"},we={key:1,class:"update-info"},Ae=H(()=>e("div",{class:"dot"},"•",-1)),Ie={class:"size"},ke=H(()=>e("div",{class:"dot"},"•",-1)),Be={class:"date"},ye={key:0,class:"intro"},Se={key:1,class:"dur-chapter"},xe={class:"last-chapter"},Ce={__name:"BookItems",props:["books","isSearch"],emits:["bookClick"],setup(o,{emit:n}){const x=o;$(u=>({ec469ba2:s(w)}));const C=u=>n("bookClick",u),R=u=>/^data:/.test(u)?u:location.origin+"/cover?path="+encodeURIComponent(u),w=T(()=>x.isSearch?"space-between":"flex-start");return(u,E)=>{const c=D;return i(),l("div",le,[e("div",de,[(i(!0),l(N,null,J(o.books,r=>{var A;return i(),l("div",{class:"book",key:r.bookUrl,onClick:m=>C(r)},[e("div",he,[(i(),l("img",{class:"cover",src:R(r.coverUrl),key:r.coverUrl,alt:"",loading:"lazy"},null,8,pe))]),e("div",_e,[e("div",ve,d(r.name),1),e("div",ge,[e("div",me,d(r.author),1),o.isSearch?(i(),l("div",fe,[(i(!0),l(N,null,J((A=r.kind)==null?void 0:A.split(",").slice(0,2),m=>(i(),G(c,{key:m},{default:V(()=>[P(d(m),1)]),_:2},1024))),128))])):B("",!0),o.isSearch?B("",!0):(i(),l("div",we,[Ae,e("div",Ie,"共"+d(r.totalChapterNum)+"章",1),ke,e("div",Be,d(s(ce)(r.lastCheckTime)),1)]))]),o.isSearch?(i(),l("div",ye,d(r.intro),1)):B("",!0),o.isSearch?B("",!0):(i(),l("div",Se," 已读："+d(r.durChapterTitle),1)),e("div",xe,"最新："+d(r.latestChapterTitle),1)])],8,ue)}),128))])])}}},Re=Z(Ce,[["__scopeId","data-v-644f2490"]]);const Ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAECUlEQVRYR7WXTYhcRRDHq3pY9yKrYBQ8KBsjgvHgwRhiQBTjYZm4Xe8NusawhwS/o9GLoKhgBGPAgJd1NdGIXwtZTbRf9Rqzl6gHTVyDeIkIgnEOghAM6oKHzTJd0sO8Zaa338zb7NjwmJn++Ndv+lVVVyOsoM3Ozl69sLBAiHiDc26NUuoKv9w5d14p9aeI/DI4OMgjIyN/lJXFMhOttQ8BgBaR0TLzEXEGAKzW+lCv+V0BmLmGiLtF5M5eQrFxRPxaRCaI6LOi9YUAzPwGADxxMYYjayaJ6MkoZKyTmU8AwF19Mp7LfElEW0LNZTvAzIcBYFufjedy00T0QLt2B4AxZo9S6qX/yXhT1jn3cpqme3IbSwDM/DgAvNlu3Dm3Uyl1HAA2IOJ2EdleEu5Io9H4EBHPVCqVLSISRsMuInrLazUBpqamhoaGhr4TkRsDgLVpmtbzPmPMLQBwOwD4vvzxw8P5IyJztVrtVL4my7L1iPhTx7Yj/jw/P79pfHx8vgmQZdkLiPhK+O8GBgauqVarv5f819FpxpjLlVJ/hYMi8mKSJHubAMz8KwBcF1EYI6IjqwRIlFImonGWiNZhlmVVRDxWYGTVAMx8HwB8EtMXka1orT0gIo9GJrxNRLH+FW8IMx8EgEeW5QDEgx5gTkQ2Bk7yr9b60hVb6rKAmc8BwJWBne+x4P3XiWhtPwGstV9FzpSzHuBvALgsMHaaiDp2ZbUwWZZNIuKuQOcfD7AAAJeEcaq1Xr9ao+3rmdknnscCzQse4LdWEukYazQaa2q12vl+QTDztwCwOdCr+zA8iYi3RQwREdl+ADDz9QDwIwB0OLaInPJRcEhEHoyEyAmt9d39ALDW2lg1hYjv+lfgC4WJgkTxcJIkPcuqbpC+qgKATwvm7PYAGwDgdBeRZ4notYvZCWPMDqXUe13W3to8C6y10yJyv//u6zj/2R6ziPiRiBwt6xPMrBExFZEdRcYR8WOt9bb8MNoKAJ+3Jvtwed05d4dSKtz+c4h4VGsdrRWttZMici8AXFVix+4homNLBUmWZQcQMc/9x4mommXZ84i4t11MKbV5dHR06bxvH5uZmbnZOfdN6O0RmMNE1CxulgCstdeKyBcAcFPrVTyltZ4wxiSVSuXplkhda72zh9P1rClFZFOSJHMdAP5Hq3rxR6eH+IGIvIOuqFlr94nIc10WdRzxy6riAMJnr2nn3JlcME3TppMWNWvtfhF5pmB8WX0RvZgEEEtaYUUbM2KtfUdE/FUubNHipvBmZIxZp5TaDwBprlQGIHLqzSHiPq01x4B7Xk6Z2d8TfDwPlwFozfd1f90598Hi4uKrY2NjFwrzQVkP81nNi/byAWOMv8gOp2n6fhnt/wDqJrRWLmhIrwAAAABJRU5ErkJggg==";const b=o=>(W("data-v-384959c4"),o=o(),O(),o),ze={class:"navigation-wrapper"},Me=b(()=>e("div",{class:"navigation-title-wrapper"},[e("div",{class:"navigation-title"},"阅读"),e("div",{class:"navigation-sub-title"},"清风不识字，何故乱翻书")],-1)),Te={class:"search-wrapper"},Ve={class:"bottom-wrapper"},Pe={class:"recent-wrapper"},be=b(()=>e("div",{class:"recent-title"},"最近阅读",-1)),Le={class:"reading-recent"},Ne={class:"setting-wrapper"},Je=b(()=>e("div",{class:"setting-title"},"基本设定",-1)),De={class:"setting-item"},We={class:"bottom-icons"},Oe={href:"https://github.com/gedoor/legado_web_bookshelf",target:"_blank"},Ze={class:"bottom-icon"},He=["src"],Fe={__name:"BookShelf",setup(o){const n=ie(),{connectStatus:x,connectType:C,newConnect:R,shelf:w}=X(n),u=T(()=>n.config.theme),E=T(()=>u.value==6),c=f({name:"尚无阅读记录",author:"",url:"",chapterIndex:0,chapterPos:0}),r=f(null),{showLoading:A,closeLoading:m,loadingWrapper:F}=re(r,"正在获取书籍信息"),g=f([]),h=f(""),I=f(!1);j(()=>{if(!(I.value&&h.value!="")){if(I.value=!1,g.value=[],h.value==""){g.value=w.value;return}g.value=w.value.filter(t=>t.name.includes(h.value)||t.author.includes(h.value))}});const K=()=>{h.value!=""&&(g.value=[],n.clearSearchBooks(),A(),I.value=!0,M.search(h.value,t=>{try{n.setSearchBooks(JSON.parse(t)),n.searchBooks.forEach(a=>g.value.push(a))}catch(a){throw y.error("后端数据错误"),a}},()=>{m(),g.value.length==0&&y.info("搜索结果为空")}))},Y=()=>{},U=ee(),Q=async t=>{const{bookUrl:a,name:_,author:p,durChapterIndex:v=0,durChapterPos:k=0}=t;await M.saveBook(t),L(a,_,p,v,k)},L=(t,a,_,p,v)=>{a!=="尚无阅读记录"&&(sessionStorage.setItem("bookUrl",t),sessionStorage.setItem("bookName",a),sessionStorage.setItem("bookAuthor",_),sessionStorage.setItem("chapterIndex",p),sessionStorage.setItem("chapterPos",v),c.value={name:a,author:_,url:t,chapterIndex:p,chapterPos:v},localStorage.setItem("readingRecent",JSON.stringify(c.value)),U.push({path:"/chapter"}))};te(()=>{let t=localStorage.getItem("readingRecent");t!=null&&(c.value=JSON.parse(t),typeof c.value.chapterIndex>"u"&&(c.value.chapterIndex=0)),F(n.saveBookProgress().finally(q))});const q=()=>M.getBookShelf().then(t=>{n.setConnectType("success"),t.data.isSuccess?n.addBooks(t.data.data.sort(function(a,_){var p=a.durChapterTime||0,v=_.durChapterTime||0;return v-p})):y.error(t.data.errorMsg),n.setConnectStatus("已连接 "),n.setNewConnect(!1)}).catch(function(t){throw n.setConnectType("danger"),n.setConnectStatus("连接失败"),y.error("后端连接失败"),n.setNewConnect(!1),t});return(t,a)=>{const _=oe,p=D,v=Re;return i(),l("div",{class:z({"index-wrapper":!0,night:s(E),day:!s(E)})},[e("div",ze,[Me,e("div",Te,[S(_,{placeholder:"搜索书籍，在线书籍自动加入书架",modelValue:s(h),"onUpdate:modelValue":a[0]||(a[0]=k=>se(h)?h.value=k:null),class:"search-input","prefix-icon":s(ne),onKeyup:ae(K,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"])]),e("div",Ve,[e("div",Pe,[be,e("div",Le,[S(p,{type:s(c).name=="尚无阅读记录"?"warning":"",class:z(["recent-book",{"no-point":s(c).url==""}]),size:"large",onClick:a[1]||(a[1]=k=>L(s(c).url,s(c).name,s(c).author,s(c).chapterIndex,s(c).chapterPos))},{default:V(()=>[P(d(s(c).name),1)]),_:1},8,["type","class"])])]),e("div",Ne,[Je,e("div",De,[S(p,{type:s(C),size:"large",class:z(["setting-connect",{"no-point":s(R)}]),onClick:Y},{default:V(()=>[P(d(s(x)),1)]),_:1},8,["type","class"])])])]),e("div",We,[e("a",Oe,[e("div",Ze,[e("img",{src:s(Ee),alt:""},null,8,He)])])])]),e("div",{class:"shelf-wrapper",ref_key:"shelfWrapper",ref:r},[S(v,{books:s(g),onBookClick:Q,isSearch:s(I)},null,8,["books","isSearch"])],512)],2)}}},Qe=Z(Fe,[["__scopeId","data-v-384959c4"]]);export{Qe as default};
