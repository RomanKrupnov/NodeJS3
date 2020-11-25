
exports.indexPage = (req, res, next) => {
    res.json({Title: 'Task App', Message: 'Hello, World!', Status: 200});
}