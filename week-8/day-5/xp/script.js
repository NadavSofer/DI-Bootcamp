const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];


let body = document.getElementsByTagName('body')[0];
body.style.color = 'aliceblue';
body.style.backgroundColor = '#dedede';


//------------------------ navbar --------------------------------------

let nav = document.createElement('nav');
nav.style.padding = '1.5rem 5rem';
nav.style.marginBottom = '5rem'
nav.style.borderBottom = 'solid 1px #b99b00';
nav.style.display = 'flex';
nav.style.alignItems = 'center';
nav.style.backgroundColor = '#04007A'


let title = document.createElement('h1');
title.innerText = 'Robo friends';
title.style.fontSize = '2.5vw';
title.style.marginRight = '4rem';
title.style.fontFamily = "'Orbitron', sans-serif";
title.style.textShadow = 'black 1px 1px'
nav.appendChild(title);

//------------------------ search bar ----------------------------------

let search_bar = document.createElement('input');
search_bar.style.height = '2.5rem';
search_bar.style.width = '35rem';
search_bar.style.fontSize = '1.5rem';
search_bar.style.borderRadius = '5px';
search_bar.style.backgroundColor = '#dedede';
nav.appendChild(search_bar);

body.appendChild(nav);

//------------------------ box container -------------------------------


let main_container = document.createElement('div');
main_container.classList.add('main-container');
main_container.style.display = 'flex';
main_container.style.flexWrap = 'wrap';
main_container.style.width = '70%';
main_container.style.justifyContent = 'center';
main_container.style.margin = '0 auto';
body.appendChild(main_container);


//------------------------ boxes for the robots ------------------------

function createbox(params) {
    for (const robot of params) {
        let robot_box = document.createElement('div');
        robot_box.classList.add('robot-box');
        robot_box.style.backgroundColor = '#02003B';
        robot_box.style.width = 'fit-content';
        robot_box.style.padding = '1rem';
        robot_box.style.margin = '1rem';
        robot_box.style.border = 'solid 1px #b99b00'
        robot_box.style.borderRadius = '10px';
        robot_box.style.fontFamily = "'Roboto', sans-serif";
    
        //--------- img for the robot box ---------
    
        let robot_img = document.createElement('img');
        robot_img.classList.add('robot-img');
        robot_img.setAttribute('src', robot['image']);
        robot_img.style.backgroundColor = '#7f81d9';
        robot_img.style.borderRadius = '50%';
        robot_img.style.marginBottom = '1rem';
        robot_box.appendChild(robot_img);
    
        //--------- name(h2) for the robot box ---------
    
        let robot_name = document.createElement('h2');
        robot_name.classList.add('robot-name');
        robot_name.innerText = robot['name'];
        robot_name.style.marginBottom = '1rem';
        robot_box.appendChild(robot_name);
    
        //--------- email(p) for the robot box ---------
    
        let robot_email = document.createElement('p');
        robot_email.classList.add('robot-email');
        robot_email.innerText = robot['email'];
        robot_email.style.marginBottom = '1rem';
        robot_box.appendChild(robot_email);
    
        main_container.appendChild(robot_box);
    }
}
createbox(robots);
//------------------------ filters for the input ------------------------

let display_list = [];

search_bar.addEventListener('input', () => {

    let filtered_list = robots.filter(Element => Element['name'].toLowerCase().includes(search_bar.value));
    main_container.innerHTML = ''
    createbox(filtered_list);

    main_container.remove;
})


//------------------------ footer ------------------------

let footer = document.createElement('footer');
footer.innerText = 'Nadav Sofer @ 2023';
footer.style.fontSize = '2rem';
footer.style.textAlign = 'center';
footer.style.padding = '1rem';
footer.style.marginTop = '1rem';
footer.style.backgroundColor = '#02003B';
footer.style.fontFamily = "'Roboto', sans-serif";
body.appendChild(footer);