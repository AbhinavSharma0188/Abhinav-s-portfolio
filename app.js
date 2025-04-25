/*navbar code*/
let navh1=document.querySelector(".nav-h1");
let body=document.querySelector("body");
let navoptions=document.querySelector(".nav-options");
let navbtn=document.querySelector(".nav-button");
let herosectionrightimage=document.querySelector(".herosection-right-abhinav");
let aboutrightskills=document.querySelector(".about-right-skills");
let aboutrightlist=document.querySelector(".about-right-list");
navh1.addEventListener("click",function(){
    body.style.backgroundColor="black";
    navh1.style.display="none";
    navoptions.style.display="none";
    navbtn.style.display="none";
    body.innerHTML=`<h1>PORTFOLIO</h1>`;
    body.style.color="palegreen";
    body.style.display="flex";
    body.style.alignItems="center";
    body.style.justifyContent="center";
    body.style.fontSize="80px";

    
})
let originalsrc="abhinav1.jpg";
    let changesrc="abhinav2.jpg";
herosectionrightimage.addEventListener("click",function(){
    
    if(herosectionrightimage.src.includes(originalsrc)){
        herosectionrightimage.src="abhinav2.jpg";
       
    }
     else{
        herosectionrightimage.src="abhinav1.jpg"; 
        
    }
    

});
aboutrightskills.addEventListener("click",function(){
    aboutrightlist.style.display="block"
    
})
//services part
let servicesbox1=document.querySelector(".services-box-1");
let servicesbox2=document.querySelector(".services-box-2");
let servicesbox3=document.querySelector(".services-box-3");
let learn1=document.querySelector(".learn1");
let learn2=document.querySelector(".learn2");
let learn3=document.querySelector(".learn3");

servicesbox1.addEventListener("mouseover",function(){
    servicesbox1.style.backgroundColor="palegreen";
    servicesbox1.style.color="black";

});
servicesbox1.addEventListener("mouseout",function(){
    servicesbox1.style.backgroundColor="black";
    servicesbox1.style.color="palegreen";

});
learn1.addEventListener("click",function(){
    alert("all details coming soon.....");
});
servicesbox2.addEventListener("mouseover",function(){
    servicesbox2.style.backgroundColor="palegreen";
    servicesbox2.style.color="black";

});

servicesbox2.addEventListener("mouseout",function(){
    servicesbox2.style.backgroundColor="black";
    servicesbox2.style.color="palegreen";

});
learn2.addEventListener("click",function(){
    alert("all details coming soon.....");
});
servicesbox3.addEventListener("mouseover",function(){
    servicesbox3.style.backgroundColor="palegreen";
    servicesbox3.style.color="black";

});
servicesbox3.addEventListener("mouseout",function(){
    servicesbox3.style.backgroundColor="black";
    servicesbox3.style.color="palegreen";

});
learn3.addEventListener("click",function(){
    alert("all details coming soon.....");
});
let submitbutton=document.querySelector(".submitbutton")
submitbutton.addEventListener("click",function(){
    alert("form submitted thank you for your interest in our services!");
    
});
document.querySelectorAll('a[href="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelectorAll(this.getAttribute('href')).scrollIntoView({
    behaviour:"smooth"
})
    })
})
