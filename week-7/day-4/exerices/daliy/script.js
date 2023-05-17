const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let list_planets = document.getElementsByClassName('listPlanets')[0];
for (let i = 0; i < planets.length; i++) {
    let add_div = document.createElement('div');
    add_div.classList.add('planet', `${planets[i].toLowerCase()}`);
    list_planets.appendChild(add_div);
};
