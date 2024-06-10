const express = require('express');
const router = express.Router();
const commentController = require("../controllers/commentController");

// Routes for Comment CRUD operations
router.post('/addComment', commentController.addComment);
router.get('/comments', commentController.getAllComments);
router.get('/comments/:id', commentController.getCommentById);
router.put('/updateComment/:id', commentController.updateComment);
router.delete('/deleteComment/:id', commentController.deleteComment);



module.exports = router;