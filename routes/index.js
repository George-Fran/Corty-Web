const { Router } = require('express');
const router = Router();
const Personalizado = require('../models/Personalizado');

router.get('/', async (req, res) => {
    res.render('index');
});

router.post('/', async (req, res) => {
    try {
        const personalizado = new Personalizado();
        personalizado.linkoriginal = req.body.linkoriginal;
        const nuevoPersonalizado = await personalizado.save();
        res.render('urlcopiar', { link: nuevoPersonalizado });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.get('/:urlcortada', async (req, res) => {
    const { urlcortada } = req.params;

    // Realiza operaciones con el parámetro urlcortada, por ejemplo, busca en la base de datos
    const personalizado = await Personalizado.findOne({ urlcortada });

    if (!personalizado) {
        res.status(404).render('404');
    } else {
        // Renderizar la vista o realizar otras operaciones según tus necesidades
        res.render('urlcortada', { personalizado });
    }
});



module.exports = router;