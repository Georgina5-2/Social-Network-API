const{User,Thought}=require('../Models');


module.exports={
    //get all users
    async getUsers(req,res){
        try{
            const userData=await User.find();
            return res.json(userData);
        }
        catch(err){
            res.status(500).json.err;
        }
    },
    //get a single user
    async getSingleUser(req,res){
        try{
            const userData=await User.findOne({_id:req.params.userId})
            .select("-__v")
            .populate("thoughts")
            //.populate({path:friends,select:"-thoughts"});
        if(!userData){
            res.status(400).json({message:`OOPS,No such user found!`});
            return;        
        }
        res.status(200).json(userData);
    }
    catch(err){
        res.status(500).json(err);
    }
},

async createUser(req,res){
    try{
        const userData=await User.create(req.body);
        res.status(200).json(userData);
    }
    catch(err){
        res.status(500).json(err);
    }
},

async updateUser(req,res){
    try{
        const userData= await User.findOneAndUpdate(
            {_id:req.params.userId},
            {$set:req.body},
            {runValidators:true,new:true},
        )
        if(!userData){
            res.status(400).json({message:`OOPS,No such user found!`});
            return;
        }
        res.status(200).json({message:`User's info updated!`});
    }
    catch(err){
        res.status(500).json(err);
    }

},

async deleteUser(req,res){
    try{
        const userData=await User.findOneAndDelete({_id:req.params.UserId});
        if(!userData){
            res.status(400).json({message:`No such user found!`});
            return;
        }
        const thoughtsData= await Thought.deleteMany({$in:userData.username});
        res.status(200).json({message:`User deleted successfully`});
    }
    catch(err)
    {
        res.status(400).json(err);
    }
},

async addFriend(req,res){
    try{
        const userData=await User.findOneAndUpdate(
            {_id:req.params.userId},
            {$addToSet:{friends:req.params.friendId}},
            {runValidators:true, new:true},
            )
        if(!userData){
            res.status(400).json({message:'No such user found!'});
            return;
        }
        const friendData= await User.findOneAndUpdate(
            {_id:req.params.friendId},
            {$addToSet:{friends:req.params.userId}},
            {runValidators:true,new:true},
            )
            if(!friendData){
                res.status(400).json(err);
                return;
            }
            res.status(200).json({message:'New friend has been added!'});
        }
        catch(err){
            res.status(500).json(err);
        }
},

async removeFriend(req,res){
    try{
        const userData= await User.findOneAndUpdate(
            {_id:req.params.userId},
            {$pull:{friends:req.params.friendId}},
            {runValidators:true,new:true}
        )
        if(!userData){
            res.status(400).json({message:`No such user found`});
            return;
        }
        
        const friendData=await User.findOneAndUpdate(
            {_id:req.params.friendId},
            {$pull:{friends:req.params.userId}},
            {runValidators:true,new:true},
        
        )
        res.status(200).json('User data deleted successfully!');
        }
        catch(err){
            res.status(500).json(err);
        }
}
};





