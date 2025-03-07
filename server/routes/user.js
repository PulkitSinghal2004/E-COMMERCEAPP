import express from "express";
import { loginOrSignup } from '../controller/user.js';

const router = express.Router();

router.post('/login',loginOrSignup)

export default router