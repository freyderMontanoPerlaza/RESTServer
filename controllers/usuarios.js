//crear funciones y exportarlas
const { response, request } = require('express');




const usuarioGet = (req = request, res = response) => {

    const { nombre, edad, comuna, ciudad } = req.query;


    return res.status(200).json({
        message: 'get API - controllador',
        nombre,
        edad,
        comuna,
        ciudad
    });
}



const usuarioPost = (req, res = response) => {
    //destructurando del body
    const { nombre, edad } = req.body;
    return res.status(200).json({
        message: 'post API - controllador',
        nombre,
        edad
    });
}






const usuarioPut = (req, res) => {

    const { id } = req.params;


    return res.status(200).json({
        message: 'put API - controllador',
        id

    });
}

const usuarioDelete = (req, res) => {
    return res.status(200).json({
        message: 'put API - controllador'
    });
}

const usuariosPatch = (req, res) => {
    return res.status(200).json({
        message: 'put API - controllador'
    });
}





module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuariosPatch,
    usuarioDelete
}