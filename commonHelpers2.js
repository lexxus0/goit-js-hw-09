import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const s=document.querySelector(".feedback-form"),a=s.elements.email,l=s.elements.message,m=s.querySelector('button[type="submit"]');document.addEventListener("DOMContentLoaded",function(){const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),a.value=e.email,l.value=e.message)});s.addEventListener("input",function(t){e={email:a.value,message:l.value},localStorage.setItem("feedback-form-state",JSON.stringify(e)),a.value.trim()!==""||l.value.trim()!==""?m.disabled=!1:(m.disabled=!0,alert("Fill please all fields"))});s.addEventListener("submit",function(t){t.preventDefault(),a.value.trim()!==""&&l.value.trim()!==""?(console.log(e),localStorage.removeItem("feedback-form-state"),a.value="",l.value="",e={email:"",message:""}):alert("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map
