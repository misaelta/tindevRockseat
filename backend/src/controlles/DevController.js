const axios = require('axios')
const Dev = require('../model/dev')
module.exports ={

    async index(req,res){
        const {user}= req.headers

        const loged = await Dev.findById(user)

        const users = await Dev.find({
            $and:[
                {_id:{ $ne:user}},
                {_id:{$nin:loged.likes}},
                {_id:{$nin:loged.deslikes}}

            ]
        })
            return res.json(users)
    },

   async store(req,res){
        const {userName}  = req.body;


        const userExits = await Dev.findOne({user:userName})
        if(userExits){
            return res.json(userExits)
        }
        const response = await axios.get(`https://api.github.com/users/${userName}`)
       
        const {name ,bio,avatar_url:avatar} = response.data

        const dev = await Dev.create({
            name,
            user:userName,
            bio,
            avatar
         })
         return res.json(dev)
    }

}