const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1000
        },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });


  // function openForm() {
  //   // console.log("hiii");
  //   document.getElementById('myForm').style.display = "block";
  //   let blur = document.querySelector('#blur').style.display ="block";
  //   console.log(blur);
  // }

  // function closeForm() {
  //   document.getElementById('myForm').style.display = "none";
  //   document.getElementById('blur').style.display ="none";
  // }



   let openform =  document.getElementById('mybtn');
  //  console.log(form);
    openform.addEventListener('click', function(){
      document.getElementById('myForm').style.display = "block";
      document.querySelector('#blur').style.display ="block";    
    })
  
 
let closeform =document.getElementById('clsbtn');
   closeform.addEventListener('click',function(){
    document.getElementById('myForm').style.display = "none";
    document.getElementById('blur').style.display ="none";
   }
   )



   