import express from "express";

export const userRouter = express.Router();
//express의 라우터 함수를 사용함과 동시에 export해주기도 함
userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));