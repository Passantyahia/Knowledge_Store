let menu = document.querySelector('.head .navbar');
document.querySelector('#bars').onclick = () => {
    menu.classList.toggle('active');
    searchfrm.classList.remove('active');

}
