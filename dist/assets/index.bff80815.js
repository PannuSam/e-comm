import{j as u,r as a,L as h,A as m,v as f,I as v,R as g,a as p,b as C,c as y,B as N}from"./vendor.0b3f543e.js";const j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};j();const e=u.exports.jsx,o=u.exports.jsxs,x=u.exports.Fragment,d=a.exports.createContext();function b({children:c}){const[r,s]=a.exports.useState([]),l=(t,n)=>{s(i=>[...i,{name:t,price:n}])};return e(d.Provider,{value:{items:r,addToCart:l},children:c})}function L(){const{items:c}=a.exports.useContext(d);return e("nav",{children:o("ul",{children:[e("li",{children:e(h,{to:"/",children:"Products"})}),e("li",{children:e(h,{to:"/checkout",children:o("div",{className:"cart",children:[e(m,{}),e("span",{children:c.length})]})})})]})})}function R(){const{items:c}=a.exports.useContext(d);return o(x,{children:[e("h1",{children:"Checkout"}),e("div",{className:"shopping-bag",children:c.map(r=>o("div",{children:[e("h2",{children:r.name}),e("h3",{children:r.price})]},f()))})]})}function k({name:c,price:r}){const{addToCart:s}=a.exports.useContext(d);return o("div",{className:"card",children:[e("div",{className:"product-box",children:e(v,{})}),o("div",{className:"purchase",children:[e("h3",{children:c}),e("button",{onClick:()=>s(c,r),children:e(m,{})})]}),e("h4",{children:r})]})}function P(){return e("div",{className:"product-list",children:[{name:"vest",price:40},{name:"pants",price:39},{name:"tshirt",price:23},{name:"shirt",price:58},{name:"jeans",price:61},{name:"jumper",price:96},{name:"sweatshirt",price:100},{name:"sweater",price:83}].map(r=>e(k,{name:r.name,price:r.price},f()))})}function I(){return e(x,{children:o(b,{children:[e(L,{}),o(g,{children:[e(p,{path:"/",element:e(P,{})}),e(p,{path:"/checkout",element:e(R,{})})]})]})})}C.render(e(y.StrictMode,{children:e(N,{children:e(I,{})})}),document.getElementById("root"));
