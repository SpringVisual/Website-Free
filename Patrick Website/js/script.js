const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1215 || document.documentElement.scrollTop > 1215) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// in phone

let mybuttons = document.getElementById("myBtnphone");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1215 || document.documentElement.scrollTop > 815) {
    mybuttons.style.display = "block";
  } else {
    mybuttons.style.display = "none";
  }
}


// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// } 

let image = document.getElementById('aboutimage');
let images = ['img/about.png','img/about2.png','img/about3.png']
setInterval(function(){
	let random = Math.floor(Math.random() * 3);
	image.src = images[random];
}, 3100);



// CONTACT




function contact(){

	event.preventDefault();
	emailjs
	  .sendForm(
		'service_kjkjx13',
		'template_0a9f8xj',
		'#myForm',
		'n4QGe5NY3jRTx2mhs'
	  )
	console.log("Msg Sent")
	alert("Message Sent!")
	document.getElementById("myForm").reset();
	// var frm = document.getElementsById('contact-form')[0];
	// frm.submit(); // Submit the form
	// frm.reset();  // Reset all form data
	// return false; // Prevent page refresh
  
  }

  (function () {
	var serviceswords = ["Developing, Designing, and editing, all in one place","Crushing code and designing site","Pixel-perfect software sorcery"],
	i = 0;
	setInterval(function(){ $('#serviceswords').fadeOut(function(){
		$(this).html(serviceswords[(i = (i + 1) % serviceswords.length)]).fadeIn();
	  }); }, 3000)
  })();
  
  



//  function sendMail() {
  
// 	emailjs.sendForm('service_kjkjx13', 'template_0a9f8xj', '#myForm')
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });

	// const serviceID = "service_kjkjx13";
	// const templateID = "template_0a9f8xj";
	// var params = {
	// 	name: document.getElementById("name").value,
	// 	email: document.getElementById("email").value,
	// 	message: document.getElementById("message").value,
	//   };

	// emailjs.send(serviceID, templateID, params, publicKey);

	// emailjs.send(serviceID, templateID, params)
	// .then(res=>{
	// 	document.getElementById("name").value = "";
	// 	document.getElementById("email").value = "";
	// 	document.getElementById("message").value = "";
	// 	console.log(res);
	// 	alert("Your message sent successfully!!")
  
	// })
	// .catch(err=>console.log(err));
  


  
// function contact(){

// 	event.preventDefault();
// 	emailjs
// 	  .sendForm(
// 		'service_b7wch8q',
// 		'template_nw6qev1',
// 		event.target
// 	  )
// 	console.log("Msg Sent")
// 	document.getElementById("contact-form").reset();
// 	// var frm = document.getElementsById('contact-form')[0];
// 	// frm.submit(); // Submit the form
// 	// frm.reset();  // Reset all form data
// 	// return false; // Prevent page refresh
  
//   }