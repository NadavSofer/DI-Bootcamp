let Parser = require('rss-parser');
let parser = new Parser();

let homepage = (req, res) => {
    getData()
        .then(result => {

            res.render('index', { facts: result });
        })
}

let search = (req, res) => {
    getData()
        .then(result => {
            getCategories().then(categories => {
                console.log(categories);
            });
            res.render('search', { thing: 'hello' })
        })
}

const getData = async () => {
    let feed = await parser.parseURL('https://thefactfile.org/feed/');
    return feed.items
};

const getCategories = async () => {
    try {
        const feed = await getData();
        let categories = new Set();
        for (const item of feed) {
            let categoriesArr = item['categories'];
            categories.add(categoriesArr[0]);
        }
        return categories;
    } catch (error) {
        console.log(error);
        return new Set();
    }
};

module.exports = {
    homepage,
    search
}
console.log(getCategories())

