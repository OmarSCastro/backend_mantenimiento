const express = require('express');
// const validatorHandler = require('../middlewares/validator.handler');
const generalService = require('../services/general.service');
const router = express.Router();
const service = new generalService
// router.get('/', async(req, res, next) => {
//     try {
//         await service.find();
//     } catch (error) {
//         next(error)
//     }
// });
// router.post('/one', 
//     // validatorHandler(createFirmaSchema, 'body'),
//     async(req, res, next) => {
//     try {
//         const body = req.body;
//         console.log(body);
//         const newRegistro = await service.createOne(body);
//         res.status(200).json(newRegistro)
//     } catch (error) {
//         next(error)
//     }
// });




router.post('/new', 
    // validatorHandler(createFirmaSchema, 'body'),
    async(req, res, next) => {
    try {
        const body = req.body;
        const newRegistro = await service.create(body);
        res.status(200).json(newRegistro)
    } catch (error) {
        next(error)
    }
});

router.post('/update', 
    // validatorHandler(createFirmaSchema, 'body'),
    async(req, res, next) => {
    try {
        const body = req.body;
        const newRegistro = await service.update(body);
        res.status(200).json(newRegistro)
    } catch (error) {
        next(error)
    }
});

// router.get('/id_firma', 
//     validatorHandler(getFirmaSchema, 'params'),
//     async(req, res, next) => {
//     try {
//         const {id_firma} = req.params;
//         const firma = await service.findOne(id_firma);
//         res.status(200).json(firma)
//     } catch (error) {
//         next(error)
//     }
// });

// router.post('/', 
//     validatorHandler(createFirmaSchema, 'body'),
//     async(req, res, next) => {
//     try {
//         const body = req.body;
//         const newFirma = await service.create(body);
//         res.status(200).json(newFirma)
//     } catch (error) {
//         next(error)
//     }
// });

// router.patch('/id_firma', 
//     validatorHandler(getFirmaSchema, 'params'),
//     validatorHandler(updateFirmaSchema, 'body'),
//     async(req, res, next) => {
//     try {
//         const {id_firma} = req.params;
//         const body = req.body;
//         const firma = await service.update(id_firma, body);
//         res.status(200).json(firma);
//     } catch (error) {
//         next(error)
//     }
// });

// router.delete('/id_firma', 
//     validatorHandler(deleteFirmaSchema, 'params'),
//     async(req, res, next) => {
//     try {
//         const {id_firma} = req.params;
//         await service.delete(id_firma);
//         res.status(200).json(id_firma);
//     } catch (error) {
//         next(error)
//     }
// });

module.exports = router;