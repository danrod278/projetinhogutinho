const {controller, express} = require('./dependencias')

const router = express.Router();

router.delete('/deletePost', (req, res)=>{
    const id = req.body._id
    controller.deletePost(id)
})

module.exports = router