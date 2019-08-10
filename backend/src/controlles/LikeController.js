const Dev  =require('../model/dev')
module.exports={

   async store(req,res){
        const{devId} = req.params;
        const{user}=req.headers;

        const loged = await Dev.findById(user)
        const target = await Dev.findById(devId)

        if(!target){
            return  res.status(400).json({error:"dev not exits"})
        }

        if(target.likes.includes(loged._id)){
            console.log('deu macth')
        }

        loged.likes.push(target._id)
        await loged.save();
        return res.json(loged)
        
    }
}