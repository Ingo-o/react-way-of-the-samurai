(this["webpackJsonpreact-way-of-the-samurai"]=this["webpackJsonpreact-way-of-the-samurai"]||[]).push([[3],{298:function(t,e,s){},299:function(t,e,s){t.exports={pirate_island:"ProfileInfo_pirate_island__1-UnM",descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",userAvatar:"ProfileInfo_userAvatar__qlIFO"}},300:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__2ifKf",posts:"MyPosts_posts__3tZ1c"}},301:function(t,e,s){t.exports={item:"Post_item__ihtu9"}},306:function(t,e,s){"use strict";s.r(e);var a=s(36),r=s(37),c=s(39),i=s(38),n=s(0),o=s.n(n),u=(s(298),s(299)),j=s.n(u),d=(s.p,s(67)),l=s(97),p=s(128),b=s(1),f=function(t){var e=Object(n.useState)(!1),s=Object(p.a)(e,2),a=s[0],r=s[1],c=Object(n.useState)(t.status),i=Object(p.a)(c,2),o=i[0],u=i[1];Object(n.useEffect)((function(){u(t.status)}),[t.status]);return Object(b.jsx)("div",{children:a?Object(b.jsx)("div",{children:Object(b.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateUserStatus(o)},value:o})}):Object(b.jsx)("div",{onDoubleClick:function(){r(!0)},children:Object(b.jsx)("span",{children:t.status||"No status"})})})},O=function(t){var e=t.profile,s=t.status,a=t.updateUserStatus;return e?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:j.a.descriptionBlock,children:[Object(b.jsx)("img",{src:null!==e.photos.large?e.photos.large:l.a,className:j.a.userAvatar,alt:"Avatar"}),Object(b.jsx)(f,{status:s,updateUserStatus:a}),Object(b.jsx)("div",{children:e.fullName}),Object(b.jsx)("div",{children:e.aboutMe})]})}):Object(b.jsx)(d.a,{})},h=s(95),x=s(33),v=s(300),m=s.n(v),_=s(301),S=s.n(_),g=s.p+"static/media/ava_cartman.17cfc4ad.jpg",k=function(t){var e=t.message,s=t.likesCount;t.id;return Object(b.jsxs)("div",{className:S.a.item,children:[Object(b.jsx)("img",{alt:"Avatar",src:g}),e,Object(b.jsx)("div",{children:Object(b.jsxs)("span",{children:["Likes: ",s]})})]})},U=s(90),P=s(127),N=s(87),w=s(34),y=Object(N.a)(10),A=Object(P.a)({form:"profileAddNewPostForm"})((function(t){return Object(b.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(U.a,{placeholder:"New post text",component:w.b,name:"newPostText",validate:[N.b,y]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})})),B=function(t){var e=t.posts,s=t.addNewPost,a=Object(x.a)(e).reverse().map((function(t){return Object(b.jsx)(k,{message:t.message,likesCount:t.likesCount,id:t.id},t.id)}));return Object(b.jsxs)("div",{className:m.a.postsBlock,children:[Object(b.jsx)("h3",{children:"My posts"}),Object(b.jsx)(A,{onSubmit:function(t){s(t.newPostText)}}),Object(b.jsx)("div",{className:m.a.posts,children:a})]})},I=s(19),C=Object(I.b)((function(t){return{posts:t.profileState.posts}}),{addNewPost:h.a})(B),M=function(t){var e=t.profile,s=t.status,a=t.updateUserStatus;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{profile:e,status:s,updateUserStatus:a}),Object(b.jsx)(C,{})]})},F=s(11),T=s(9),z=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this.props,e=t.getUserProfile,s=t.getUserStatus,a=t.authorizedUserId,r=this.props.match.params.userId;r||(r=a)||this.props.history.push("/login"),e(r),s(r)}},{key:"render",value:function(){var t=this.props,e=t.profile,s=t.status,a=t.updateUserStatus;return Object(b.jsx)(M,{profile:e,status:s,updateUserStatus:a})}}]),s}(o.a.Component);e.default=Object(T.compose)(Object(I.b)((function(t){return{profile:t.profileState.profile,status:t.profileState.status,authorizedUserId:t.authState.id}}),{getUserProfile:h.c,getUserStatus:h.d,updateUserStatus:h.e}),F.f)(z)}}]);
//# sourceMappingURL=3.a17e83b6.chunk.js.map