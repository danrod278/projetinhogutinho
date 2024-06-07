
const {Posts} = require('./dependencias')

async function deletarPost(id){
    console.log('deletando post com id: '+id)
    await Posts.deleteOne({_id:id})
}
module.exports = {deletarPost}