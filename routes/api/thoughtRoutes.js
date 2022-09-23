const router = require("express").Router();
const {
 getAllThought,
 getThoughtById,
 createThought,
 updateThought,
 deleteThought,
 addReaction,
 removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThought).post(createThought);

// the api/thoughts/:id
router
 .route('/:id')
 .get(getThoughtById)
 .put(updateThought)
 .delete(deleteThought);

 // /api/thoughts/:thoughtId/reactions the bonus
 router.route('/:thoughtId/reactions').post(addReaction);

 // /api/thoughts/:thoughtId/reactions/:reactionId
 router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

 module.exports = router;