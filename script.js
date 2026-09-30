(function(){
var root=document.documentElement,btn=document.getElementById('tbtn'),mq=matchMedia('(prefers-color-scheme:dark)');
function set(t){if(t){root.dataset.theme=t}else{delete root.dataset.theme}}
btn.addEventListener('click',function(){
var cur=root.dataset.theme||(mq.matches?'dark':'light');
set(cur==='light'?'dark':'light')});
})();