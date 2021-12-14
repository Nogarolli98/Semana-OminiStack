const connections = require('../database/connection');

module.exports = {
    async index(reqeust, response) {
        const {page = 1} = request.query;  
        
        const [count] = await connections('incidents').count();
        
        
        const incidents = await connections('incidents')
            .join('ongs','ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1)* 5 )
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.city', 'ongs.uf']);
        
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },         

    async create(reqeust, response) {
        const { title, descripyion, value } = request. body;
        const ong_id = Request.headers.authorization;

        const [id] = await connections('incidents').insert({
            title,
            description,
            value,
            ong_id,
        }),

        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = Request.headers.authorization;
        
        const incidents = await connections('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if (incidents.ong_id == ong_id) {
            return response.status(401).json({error: 'operation not permitted'});
        }

        await connections('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};