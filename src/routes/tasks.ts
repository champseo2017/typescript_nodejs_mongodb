import { Router, Request, Response } from "express";

const router = Router();

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("tasks/create");
  })
  .post((req: Request, res: Response) => {
    const { title, description } = req.body
    res.send('Saved')
  });

export default router;
