const menuToggle=document.querySelector(".menu-toggle");
const primaryNav=document.querySelector("#primary-nav");
if(menuToggle&&primaryNav){
 menuToggle.addEventListener("click",()=>{const open=primaryNav.classList.toggle("is-open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");});
 primaryNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{primaryNav.classList.remove("is-open");menuToggle.setAttribute("aria-expanded","false");menuToggle.setAttribute("aria-label","Open navigation menu");}));
}
document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector("#enquiry-form");
if(form){
 form.addEventListener("submit",e=>{
  e.preventDefault(); if(!form.reportValidity())return;
  const d=new FormData(form);
  const subject=encodeURIComponent("AirSon Agri Foods enquiry: "+(d.get("interest")||"General"));
  const body=encodeURIComponent(`Name: ${d.get("name")}\nCompany: ${d.get("company")||"Not provided"}\nEmail: ${d.get("email")}\nEnquiry: ${d.get("interest")}\n\nMessage:\n${d.get("message")}`);
  const email="REPLACE-WITH-YOUR-EMAIL@example.com";
  const note=document.querySelector("#form-note");
  if(email.includes("REPLACE-WITH-YOUR-EMAIL")){note.textContent="Demo form: valid details entered. Add your real business email in js/script.js before publishing.";return;}
  window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
  note.textContent="Your email app should open with a draft. Review and send it there.";
 });
}
