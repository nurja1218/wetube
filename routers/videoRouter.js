import express from "express";
import routes from "../routes"
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => videos);
videoRouter.get(routes.upload, (req, res) => upload);
videoRouter.get(routes.videoDetail, (req, res) => videoDetail);
videoRouter.get(routes.editVideo, (req, res) => editVideo);
videoRouter.get(routes.deleteVideo, (req, res) => deleteVideo);

export default videoRouter;