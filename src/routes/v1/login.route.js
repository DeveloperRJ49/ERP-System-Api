const mongosoe = require("mongoose");
const express = require("express");

const subAdmin = require("../../models/subadmin.model");
const admin = require("../../models/admin.model");
const student = require("../../models/student.model");
const faculty = require("../../models/faculty.model");
//const { constructFromObject } = require("sib-api-v3-sdk/src/ApiClient"); //mane nai khabar
//const { JsonWebTokenError } = require("jsonwebtoken");

const route = express.Router();

route.post("/1", async (req, res, next) => {
    const token = jwt.sign(
        {
            "aavu": "ha"  //setting token expiry time limit.
        },
        "NKOJE;BUJKLBJK######&&&&CNDJKP((0-))(***HBUI32BJK2L NKL@@@NKbjklb chjk"
    );
    const response = new Respoce(res);
    const body = req.body;
    console.log(body)
    let userRole = [];
    await student.findOne({ enrollment_number: body.username })
        .then(result => {
            if (result != null) {
                userRole.push('student')
                username = body.username;
            }
        })
    await faculty.findOne({ username: body.username })
        .then(result => {
            if (result != null) {
                userRole.push('faculty')
                username = result._id;
            }
        })

    await subAdmin.findOne({ username: body.username })
        .then(result => {
            if (result != null) {
                userRole.push('subAdmin')
                username = result._id;
            }
        })

    await admin.findOne({ username: body.username })
        .then(result => {
            if (result != null) {
                userRole.push('admin')
                username = result._id;
            }
        })
    if (userRole.length > 1) {
        req.session.isAuth = false;
        req.session.role = userRole;
        req.session.save();
        response.sendCookie(["isAuth", "vf"]);
        response.addInRespoce([["message", "Select Role"], ["role", userRole], ["token", token]])
        response.sendResponce(200);
    } else if (userRole.length == 1) {
        response.addInRespoce([["message", "Select Role"], ["role", userRole], ["token", token]])
        response.sendResponce(200);
    } else if (userRole.length == 0) {
        response.addInRespoce([["message", "username not found"]])
        response.sendResponce(301);
    }
})



//TODO

const jwt = require("jsonwebtoken");

route.post("/2", (req, res, next) => {
    const token = jwt.sign(
        {
            "aavu": "ha"  //setting token expiry time limit.
        },
        "NKOJE;BUJKLBJK######&&&&CNDJKP((0-))(***HBUI32BJK2L NKL@@@NKbjklb chjk"
    );
    const response = new Respoce(res);
    console.log(req.headers.Authorization);
    switch (req.body.role) {
        case "student":
            student.findOne({ $and: [{ enrollment_number: req.body.username }, { password: req.body.password }] })
                .then(result => {
                    if (result != null) {
                        req.session.isAuth = true;
                        req.session.username = result.enrollment_number;
                        req.session.role = req.body.role;
                        req.session.save();
                        response.sendCookie(["isAuth", "true"]);
                        response.sendCookie(["role", req.body.role])
                        response.addInRespoce([["message", "Login Succ"], ["result", result], ["token", token]])
                        response.sendResponce(200);
                    } else {
                        response.addInRespoce([["message", "Login Succ"], ["result", result]])
                        response.sendResponce(301);
                    }
                })
                .catch(err => {
                    response.addInRespoce([["message", "Login Fail"], ["error", err]])
                    response.sendResponce(301);
                })

            break;
        case "faculty":
            faculty.findOne({ $and: [{ username: req.body.username }, { password: req.body.password }] })
                .then(result => {
                    if (result != null) {
                        console.log(req.sessionID);
                        req.session.isAuth = true;
                        req.session.username = result._id;
                        req.session.role = req.body.role;
                        req.session.save();
                        console.log(req.sessionID);
                        response.sendCookie(["isAuth", "true"]);
                        response.sendCookie(["role", req.body.role])
                        response.addInRespoce([["message", "Login Succ"], ["result", result], ["token", token]])
                        response.sendResponce(200);
                    } else {
                        response.addInRespoce([["message", "Login Fail"]])
                        response.sendResponce(301);
                    }
                })
                .catch(err => {
                    response.addInRespoce([["message", "Login Fail"], ["error", err]])
                    response.sendResponce(301);
                })
            break;
        case "subAdmin":
            subAdmin.findOne({ $and: [{ username: req.body.username }, { password: req.body.password }] })
                .then(result => {
                    if (result != null) {
                        req.session.isAuth = true;
                        req.session.username = result._id;
                        req.session.role = "subAdmin";
                        req.session.save();
                        response.sendCookie(["isAuth", "true"]);
                        response.sendCookie(["role", "apc"])
                        response.addInRespoce([["message", "Login Succ"], ["result", result], ["token", token]])
                        response.sendResponce(200);
                    } else {
                        response.addInRespoce([["message", "Login fail"]])
                        response.sendResponce(301);
                    }
                })
                .catch(err => {
                    response.addInRespoce([["message", "Login Fail"], ["error", err]])
                    response.sendResponce(301);
                })
            break;
        case "admin":
            admin.findOne({ $and: [{ username: req.body.username }, { password: req.body.password }] })
                .then(result => {
                    if (result != null) {
                        req.session.isAuth = true;
                        req.session.username = result._id;
                        req.session.role = req.body.role;
                        req.session.save();
                        response.sendCookie(["isAuth", "true"]);
                        response.sendCookie(["role", req.body.role])
                        response.addInRespoce([["message", "Login Succ"], ["result", result], ["token", token]])
                        response.sendResponce(200);
                    } else {
                        response.addInRespoce([["message", "Login Succ"], ["result", result]])
                        response.sendResponce(301);
                    }
                })
                .catch(err => {
                    response.addInRespoce([["message", "Login Fail"], ["error", err]])
                    response.sendResponce(301);
                })
            break;
        case "mainAdmin":
            mainAdmin.findOne({ $and: [{ username: req.body.username }, { password: req.body.password }] })
                .then(result => {
                    if (result != null) {
                        console.log(req.sessionID);
                        req.session.isAuth = true;
                        req.session.username = result._id;
                        req.session.role = "mainAdmin";
                        req.session.save();
                        console.log(req.sessionID);
                        response.sendCookie(["isAuth", "true"]);
                        response.sendCookie(["role", "coe"])
                        response.addInRespoce([["message", "Login Succ"], ["result", result], ["token", token]])
                        response.sendResponce(200);
                    } else {
                        response.addInRespoce([["message", "Login Succ"], ["result", result]])
                        response.sendResponce(301);
                    }
                })
                .catch(err => {
                    response.addInRespoce([["message", "Login Fail"], ["error", err]])
                    response.sendResponce(301);
                })
            break;
        default:
        // code block
    }
})
module.exports = route;