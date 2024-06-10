const Comment = require('../models/comment');

module.exports = {
    async addComment(req, res) {
        try {
            const { content, user } = req.body; 
            const newComment = new Comment({ content, user: user || null});
            await newComment.save();
            res.status(201).json(newComment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    async getAllComments(req, res) {
        try {
            const comments = await Comment.find();
            res.json(comments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async getCommentById(req, res) {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            res.json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async updateComment(req, res) {
        try {
            const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedComment);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    async deleteComment(req, res) {
        try {
            const deletedComment = await Comment.findByIdAndDelete(req.params.id);
            if (!deletedComment) {
                return res.status(404).json({ message: 'Comment not found' });
            }
            res.status(200).json({ message: 'Comment deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
  };
    
