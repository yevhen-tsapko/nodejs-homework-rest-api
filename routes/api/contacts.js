const express = require("express");
const router = express.Router();
const contrs = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { addSchema, toggleFavoriteSchema } = require("../../schemas");
router.get("/", contrs.getAll);
router.get("/:contactId", isValidId, contrs.getById);
router.post("/", validateBody(addSchema), contrs.addCont);
router.delete("/:contactId", isValidId, contrs.removeCont);
router.put(
  "/:contactId",
  isValidId,
  validateBody(addSchema),
  contrs.updateById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(toggleFavoriteSchema),
  contrs.updateById
);
module.exports = router;
