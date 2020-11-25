// exports.indexPage = (req, res, next) => {
//     res.render('index', { title: 'Task App', message: 'Hello, World!' })
// }
exports.indexPage = (req, res, next) => {
    res.json({Title: 'Task App', Message: 'Hello, World!', Status: 200});
}