const users = async (api) => {
    let url = await fetch(api);
    let response = await url.json();

    return response
}

    module.exports = {
        users
    }
