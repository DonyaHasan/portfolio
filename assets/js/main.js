let loader=document.getElementById('loader');
let navlinks=document.querySelectorAll('.nav-link');
let navbar=document.querySelector('.navbar');
//when the page loaded block the loader section
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(function(){
        loader.setAttribute('style','display:none!important');
      //   loader.style.display='none'; because the important not activate here
      document.body.style.overflow='unset';
    },500);
   
});

navlinks.forEach(
   function(ele){
    ele.addEventListener('click',function(e){
        e.preventDefault();
    let id=e.target.attributes.href.value;
    let sec=document.querySelector(id); //return the section of this id 
    let pos=sec.offsetTop; //return the height of section from start page
    window.scroll({top:pos,behavior:"smooth"});
    });
   }
);
//replace background color of navbar
window.addEventListener('scroll',function(e){
    
    e.preventDefault();
    //console.log(document.body.scrollTop); //the height stay 0 so, instead og body we using documentElement
    let pos=document.documentElement.scrollTop; //return the height when i scroll the page of top
    if(pos>=300){
        navbar.setAttribute('style','background:white!important');
     }else{
         navbar.setAttribute('style','background:transparent!important');
     }
});