/**
 * 
 */
const {userBodyGuard} = require('../middleware/middleware.protects');

const express = require('express');
const router = express.Router();
const CoreError = require('./../core/core.error');
const {  userSettings, singleUser, deleteUser,userHomeData, audit, singleAudit, deleteAudit, allUser, changePassword } = require('../controller/controller.user');
const { editCertificates, certificate, singleCertificate, allCertificate, userCertificate, deleteCertificate } = require('../controller/controller.certificate');

/**
 * auth routes
 */

router.put('/setting/:id', userSettings);
router.get('/single/:id', singleUser);
router.get('/users', allUser);
router.get('/user/home/:id', userHomeData);
router.post('/change/password', changePassword);
router.delete('/delete', deleteUser);


//CERTIFICATE
router.put('/certificate/edit', editCertificates);
router.post('/certificate', certificate);
router.get('/certificate/:id', singleCertificate);
router.get('/certificate/all', allCertificate);
router.get('/certificate/user/:id', userCertificate);
router.delete('/certificate/delete/:id', deleteCertificate);


/**
 * Export lastly
 */
router.all('/*', (req, res) => {
    throw new CoreError(`route not found ${req.originalUrl} using ${req.method} method`, 404);
})

module.exports = router;
