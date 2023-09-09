/**
 * 
 */
const {userBodyGuard} = require('../middleware/middleware.protects');

const express = require('express');
const router = express.Router();
const CoreError = require('./../core/core.error');
const {  userSettings, singleUser, deleteUser,userHomeData, audit, singleAudit, deleteAudit, allUser, changePassword } = require('../controller/controller.user');
const { editCertificates, certificate, singleCertificate, allCertificate, userCertificate, deleteCertificate } = require('../controller/controller.certificate');
const { education, editEducation, singleEducation, allEducation, userEducation, deleteEducation } = require('../controller/controller.education');
const { editLanguage, language, singleLanguage, allLanguage, userLanguage, deleteLanguage } = require('../controller/controller.language');

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
router.delete('/certificate/deletes', deleteCertificate);

//Education
router.put('/education/edit', editEducation);
router.post('/education', education);
router.get('/education/:id', singleEducation);
router.get('/education/all', allEducation);
router.get('/education/user/:id', userEducation);
router.delete('/education/deletes', deleteEducation);

//Language
router.put('/language/edit', editLanguage);
router.post('/language', language);
router.get('/language/:id', singleLanguage);
router.get('/language/all', allLanguage);
router.get('/language/user/:id', userLanguage);
router.delete('/language/deletes', deleteLanguage);

/**
 * Export lastly
 */
router.all('/*', (req, res) => {
    throw new CoreError(`route not found ${req.originalUrl} using ${req.method} method`, 404);
})

module.exports = router;
