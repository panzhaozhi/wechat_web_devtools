;!function(require, directRequire){;'use strict';async function chooseFile(a){if(global.autoTest)return{success:!1};const b=global.windowMap.get('MAIN').window,c=document.createElement('input');return c.style.display='none',c.setAttribute('type','file'),a.accept&&c.setAttribute('accept',a.accept),a.multiple&&c.setAttribute('multiple','multiple'),b.document.body.appendChild(c),c.click(),new Promise((a)=>{c.addEventListener('change',(d)=>{b.document.body.removeChild(c),a({success:!0,event:d})}),c.addEventListener('cancel',(d)=>{b.document.body.removeChild(c),a({success:!1,event:d})})})}async function saveFile(a){if(global.autoTest)return{success:!1};const b=global.windowMap.get('MAIN').window.document.body,c=document.createElement('input');return c.style.display='none',c.setAttribute('nwsaveas',a.name||''),c.setAttribute('type','file'),a.accept&&c.setAttribute('accept',a.accept),b.appendChild(c),c.click(),new Promise((a)=>{c.addEventListener('change',(d)=>{b.removeChild(c),a({success:!0,event:d})}),c.addEventListener('cancel',(d)=>{b.removeChild(c),a({success:!1,event:d})})})}module.exports={chooseFile,saveFile};
;}(require("lazyload"), require);