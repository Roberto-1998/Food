const homeButton=document.querySelector('.home .content .button');
const navbar=document.querySelector('.navbar');
const navLinks=document.querySelector(' .nav-links-container .nav-links');
const brand=document.querySelector('.brand h4');
const links=document.querySelectorAll('.nav-links-container .nav-links li a');
const bars=document.querySelector('.navbar i');






window.addEventListener('scroll', ()=>{

    if(scrollY>10){
        navbar.style.background='white';
      /*   navbar.style.padding='30px 30px'; */
        brand.style.color='black';
        links.forEach((link)=>{
            link.style.color='black';
        })
        bars.style.color='black';
    }
    else {
        navbar.style.background='none';
      /*   navbar.style.padding='40px 30px'; */
        brand.style.color='white';
        links.forEach((link)=>{
            link.style.color='white';
        })
        bars.style.color='white';
    }

})
bars.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})

