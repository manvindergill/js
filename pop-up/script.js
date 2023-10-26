// document.querySelector("#center")
// .addEventListener('mousemove',function(details){
// console.log(details.clientX,details.clientY);
// })

     
// Throttling Function
const throttleFunction=(func, delay)=>{
 
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
     let now = new Date().getTime();
  if(now - prev> delay){
      prev = now;
     return func(...args); 
    }
  }
}
document.querySelector("#center")
.addEventListener("mousemove", throttleFunction((dtls)=>{

  var div = document.createElement('div')
    div.classList.add('imageDiv')
    div.style.left=dtls.clientX+'px';
    div.style.top=dtls.clientY+'px';

    var img =  document.createElement('img')
    img.setAttribute('src','https://images.unsplash.com/photo-1691394526534-2f0b6c7373da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80');
    div.appendChild(img)

    document.body.appendChild(div);

    gsap.to(img, {
        y:"0",
        ease: Power1,
        duration: .5,
    });
    gsap.to(img, {
        y:"100%",
        delay:.9,
        ease: Power2,
        
    });

    setTimeout(() => {
        div.remove();
    }, 1000);   
  
}, 500)
);