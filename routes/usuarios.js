//definir rutas
const { Router } = require('express');
const { usuarioGet, usuarioPost, usuarioPut, usuariosPatch, usuarioDelete } = require('../controllers/usuarios');
const router = Router();







router.get('/', usuarioGet);
router.post('/', usuarioPost);
router.put('/:id', usuarioPut);
router.patch('/', usuariosPatch);
router.delete('/', usuarioDelete);



module.exports = router;