const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const { useAsync, utils, errorHandle, } = require('./../core');
const ModelPerson = require('../models/model.person');
// const MindCastHostRequest = require('../models/model.hostRequest');



exports.host = useAsync(async (req, res) => {

    try{

        const host = await MindCastHostRequest.create(req.body)
        return res.json(utils.JParser('Host created successfully', !!host, host));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

})

exports.singleHost = useAsync(async (req, res) => {

    try {
        const host = await MindCastHostRequest.findOne({ _id: req.params.id });
        return res.json(utils.JParser('Host fetch successfully', !!host, host));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

exports.allHost = useAsync(async (req, res) => {

    try {
        const host = await MindCastHostRequest.find();
        return res.json(utils.JParser('Host fetch successfully', !!host, host));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

exports.userHost = useAsync(async (req, res) => {

    try {
        const host = await MindCastHostRequest.find({ userID: req.params.id });
        return res.json(utils.JParser('User Host fetch successfully', !!host, host));
    } catch (e) {
        throw new errorHandle(e.message, 400)
    }
})

exports.deleteHost = useAsync(async (req, res) => {
    try {
        if (!req.body.id) return res.status(402).json({ msg: 'provide the id ' })

        await MindCastHostRequest.deleteOne({ _id: req.body.id })
        return res.json(utils.JParser('Host deleted successfully', true, []));

    } catch (e) {
        throw new errorHandle(e.message, 400)
    }

});