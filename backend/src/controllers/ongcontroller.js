const crypto = require('crypto');
const connection = require('../database/connection');

module.export = {
 
    async index(request, response) {
        const ongs = await Connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randombytes(4).tostring('HEX');

await Connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
})
    return response.json({id});
}
};