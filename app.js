const mobileIcon = document.querySelector('#btn-icon')
const mobileMenu = document.querySelector('.menu-mobile')

mobileIcon.addEventListener('click', ()=>{
// mobileMenu.classList.toggle('active')
mobileMenu.classList.toggle('visible')
mobileMenu.classList.toggle('hidden')
mobileIcon.classList.toggle('open')

});


const form = document.querySelector('#formtest');
form.addEventListener('submit', async function (e){ 
    try{
            e.preventDefault();
const name = form.elements.name.value;            
const email = form.elements.email.value;
const message = form.elements.message.value;
// const text = form.elements.message.value;
// console.log(email,message)

axios.defaults.headers.post['Content-Type'] = 'application/json';
const res = await axios.post('https://formsubmit.co/ajax/16abc3989ff5c1ebb4c24a4cd32b6d4d', {
    email: email,
    name: name,
    message: message
});
form.reset();
 }catch(err) {
    console.log('error', err)
}
})


