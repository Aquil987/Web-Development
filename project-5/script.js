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


  function openForm() {
    console.log("hiii");
    document.getElementById('myForm').style.display = "block";
    document.getElementById('blur').style.body.backgroundColor= "red";
  }

  function closeForm() {
    document.getElementById('myForm').style.display = "none";
  }