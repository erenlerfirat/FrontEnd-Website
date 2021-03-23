/*NavBar-Menu*/
   const hamburger=document.querySelector('.hamburger');
   const navContainer=document.querySelector('.nav-container');
   const body= document.getElementsByTagName('body')[0];
    

   hamburger.addEventListener('click',()=>{
       navContainer.classList.toggle('open')
   });
   hamburger.addEventListener('click',()=>{
       body.classList.toggle('overFlow');
   })
   



//image gallery
const current=document.querySelector('#current');
const images=document.querySelectorAll('.imgs img');
const opacity=0.6;
//set first img opacity 
images[0].style.opacity=opacity;

images.forEach(img=>img.addEventListener('click',imgclick))

function imgclick(e){
    //set all opacities of images to 1
    images.forEach(img=>(img.style.opacity=1))
//change the source of current element with target elements source
    current.src=e.target.src    
    //set the opacity of current element 0.4
    e.target.style.opacity=opacity;
    //add fadeIn animation class
    current.classList.add('fade-In'); 
    //remove fadeIn animation class
    setTimeout(()=>current.classList.remove('fade-In'),500);
}
//Email Sending API SMTP
function submitForm(e){
    e.preventDefault();
    let name=document.querySelector('#name')
    let email=document.querySelector('#email')
    let message=document.querySelector('#message')
    
    document.querySelector('.contact').reset();
    sendEmail(name,email,message)
}
function sendEmail(name,email,message){
Email.send({
    Host : "smtp.yourisp.com",
    Username : "erenler_firat2@hotmail.com",
    Password : "password",
    To : 'erenler_firat2@hotmail.com',
    From : "erenler_firat2@hotmail.com",
    Subject : `${name} send you a message`,
    Body : `Name : ${name} , Email:${email} , Message:${message}`
}).then(
  message => alert('Your message has been sent to us , thank you for your feedback')
);}

//GoogleMap
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.25339, lng: 10.21362 },
    zoom: 16,
  });
  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 52.25339, lng: 10.21362 },
  });
  marker.addListener("click", toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
