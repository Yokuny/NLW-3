module.exports = {
    index(req, res) {
        const city = req.query.city;
        return res.render('index');
    },
    orphanage(req, res) {
        const city = req.query.city;
        return res.render('orphanage');
    },
    orphanages(req, res) {
        const city = req.query.city;
        return res.render('orphanages');
    },
    createOrphanage(req, res) {
        const city = req.query.city;
        return res.render('create-orphanage');
    },

    //tudo aqui envia para o html qualquer dado
    /* const name = "felipe";
    return response.render('index', {name}); */
}