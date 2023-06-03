const connection=require('../config/connection');
const{User,Thought}=require('../Models');
const{userNames,getRandomThoughts}=require('./data');

connection.on("error",(err)=>err);
connection.once('open',async()=>{
    console.log("connected");
    //await User.deleteMany({});
    await Thought.deleteMany({});
    const users=[];
    const thoughts=getRandomThoughts(2);
    for(let i=0;i<userNames.length;i++){
        const userName=`${userNames[i]}${Math.floor(Math.random()*90)}`;
        const email=`${userNames[i]}${Math.floor(Math.random()*90)}@email.com`;
        users.push({
            userName,
            email
        });
       
    }
  
    //await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

   
    console.info("Done with seeding");
    process.exit(0);
})