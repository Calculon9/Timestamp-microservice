
const post = (req, res) => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(req.body.date) || /\d{12,}/.test(req.body.date)) {
        let date = new Date(parseInt(req.body.date));
        let utc = date.toUTCString();
        let unixKey = date.getTime();
        res.json({ "unix": unixKey, "UTC": utc });
    } else if (req.body.date === '') {
        let date = new Date();
        let utc = date.toUTCString();
        let unixKey = date.getTime();
        res.json({ "unix": unixKey, "UTC": utc });
    } else {
        res.json({ error: "Invalid Date" });
    }
}

const get = (req, res) => {
    if (/^\d{4}-\d{2}-\d{2}$/.test(req.params.date) || /\d{12,}/.test(req.params.date)) {
        let date = new Date(parseInt(req.params.date));
        let utc = date.toUTCString();
        let unixKey = date.getTime();
        res.json({ "unix": unixKey, "utc": utc });
    } else {
        res.json({ error: "Invalid Date" });
    }
}

const getDefault = (req, res) => {
    let date = new Date();
    let utc = date.toUTCString();
    let unixKey = date.getTime();
    res.json({ "unix": unixKey, "UTC": utc });
}

module.exports = {
    post,
    getDefault,
    get
}