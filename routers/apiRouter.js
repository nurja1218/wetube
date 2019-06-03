import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  postDeleteComment,
  postLatestComment
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.latestComment, postLatestComment);
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.deleteComment, postDeleteComment);

export default apiRouter;