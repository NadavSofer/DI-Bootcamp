class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch(){
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
};

let video1 = new Video('title1', 'uploader1', 500);
let video2 = new Video('title2', 'uploader2', 1000);
console.log(video1.watch());
console.log(video2.watch());
let data_list = [['title3', 'uploader3', 1500],['title4', 'uploader4', 5200],['title5', 'uploader5', 400],['title6', 'uploader6', 37],['title7', 'uploader7', 845]];

for (let i = 0; i < data_list.length; i++) {
    const element = data_list[i];
    let inc = new Video(element[0], element[1], element[2]);
    console.log(inc.watch());
}

