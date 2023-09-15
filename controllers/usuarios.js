//crear funciones y exportarlas
const { response } = require('express');




const  usuarioGet = (req, res) => {
    return res.status(200).json({
        message: 'get API - controllador'
    });
}



const  usuarioPost = (req, res) => {
    return res.status(200).json({
        message: 'post API - controllador'
    });
}

const  usuarioPut = (req, res) => {
    return res.status(200).json({
        message: 'put API - controllador'
    });
}

const  usuarioDelete = (req, res) => {
    return res.status(200).json({
        message: 'put API - controllador'
    });
}

const  usuariosPatch = (req, res) => {
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