const express= require('express')
const DevController=require('./controlles/DevController')
const ControllerLikes=require('./controlles/LikeController')
const ControllerDeslikes=require('./controlles/DeslikesController')
const routes = express.Router()



routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)
routes.post('/devs/:devId/likes',ControllerLikes.store)
routes.post('/devs/:devId/dislikes',ControllerDeslikes.store)
module.exports = routes;