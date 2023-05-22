(function user(name) {
    let container = document.getElementById('navbarSupportedContent');

    let div = document.createElement('div');
    div.innerText = name;;
    div.style.margin = '10px';
    div.classList.add('text-capitalize', 'text-light');
    container.appendChild(div);

    let img = document.createElement('img');
    img.setAttribute('src', 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-profile-line-black-icon-png-image_691051.jpg');
    img.style.width = '1.25rem';
    img.style.height = '1.25rem';
    container.appendChild(img);
})('thing');