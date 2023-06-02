const input = document.querySelector('.form-email'), 
formButton = document.querySelector('.form-button'), 
form = document.querySelector('form'), 
main = document.querySelector('.normal'), 
success = document.querySelector('.success'),
dismissButton = document.querySelector('.dismiss-button'),
successEmail = document.querySelector('.success-email')

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

formButton.addEventListener('click', function(e) {
    e.preventDefault()

    if(input.value.length === 0){
        console.log(input.value.length)
        form.classList.add('error')
        vibrate()
    }else if(!input.value.match(validRegex)){
        console.log('food')
        form.classList.add('error')
        vibrate()
    }else{
        successEmail.innerText = input.value
        main.classList.add('d-none')
        success.classList.remove('d-none')
        checkEmail(input)
    }

})

dismissButton.addEventListener('click', function(){
    success.classList.add('d-none')
    main.classList.remove('d-none')
})

const vibrate = () => {
    setTimeout(() => {
        input.classList.add('vibrate')
      }, "100");

      setTimeout(() => {
        input.classList.remove('vibrate')
      }, "2000");
}

const checkEmail = (validity) =>{
    if(validity.value.match(validRegex) && form.classList.contains('error')){
        form.classList.remove('error')
    }
}
