let container_colors = document.getElementsByClassName('container-colors')[0];

const hexColors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF",
    "#C0C0C0", "#808080", "#800000", "#808000", "#008000", "#800080",
    "#008080", "#000080", "#FF4500", "#FF8C00", "#FFD700", "#ADFF2F",
    "#32CD32", "#4682B4", "#6A5ACD"
];

let color_choice = '';


for (let i = 0; i < 21; i++) {
    let color_box = document.createElement('div');
    color_box.style.backgroundColor = hexColors[i]
    color_box.classList.add('color-box')
    container_colors.appendChild(color_box);
    color_box.addEventListener('click', () => {
        color_choice = hexColors[i];
    })
};

let grid_container = document.getElementsByClassName('grid-container')[0];
let grid_width = 50;
let grid_height = 25;


for (let i = 0; i < grid_height; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < grid_width; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);

        box.addEventListener('mouseover', ()=> {
            box.style.backgroundColor = color_choice;
        })
    }
    grid_container.appendChild(row);
}