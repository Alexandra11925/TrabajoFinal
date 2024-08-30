document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.menu-icon').addEventListener('click', function(){
        document.querySelector('.nav-link').classList.toggle('show')
    });
});