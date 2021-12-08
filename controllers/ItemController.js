
const item = require('../Item')
exports.show = (req, res ) => {
    const id = req.params.id

    let data = {}
    data.title = '商品データ'
    if (item.values[id]) {
        data.item = item.values[id]
    }
    res.render('item/show.ejs', data)
}