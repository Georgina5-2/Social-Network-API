const userNames=[
    "Diana",
    "Adam",
    "Stella",
    "Gianna",
    "Henry",
    "Benson",
    "Heather",
    "Emily",
    "Sydney",
    "Wyatt",
]

const thoughtsArr=[
    "Having real friends is the greatest luxury. Being a true friend is the greatest quality of a man",
    
    "It is more valuable to have a few true friends than to be in the company of many fake people",

    "Friends are the chosen family you love as well as the real family",

    "A true friend accepts all your imperfections and picks up the scattered pieces of your soul",

    "Not all people are your friends, be careful who you trust. Someone may abuse your kindness",

    "Always be a friend who will lend a hand in trouble. It is easy to be a good friend when everything is great",

    "A true friend helps you take off your mask and expose your soul",

    "It is sad when the best friends from childhood separate and become strangers. What do you think",

    "Your friend is your mirror. Choose friends wisely",

    "Why is a building called a building when it has already been built",

    "If you hit yourself and it hurts, are you strong or weak",

    "Has anyone ever died of laughter",

    "Brushing your teeth is the only time you clean your skeleton",

    "Do different species of animals communicate with each other, or they need a translator",

    "If you try to rob a bank, you wont have problems with bills for the next ten years, whether you succeed in the robbery or not",

    "What if dogs lick us because they know we have bones inside of us",

    "What if Im not good enough",

    "Loneliness may be painful, but you need to learn to feel comfortable even when you are alone with yourself",

    "Why does love have to hurt? When you lose somebody, your heart breaks into a million pieces and it takes some time to assemble it. However, it will never be the same as before it broke",

    "It is okay to feel empty inside. It is our soul that rests and refreshes",

    "Being gentle and crying is not a weakness. Being gentle, fragile, and allowing yourself to cry shows just how strong you are",

    "It hurts when you see that you are not as important to someone as he is to you",

    "It is sad when it is difficult for you, and there is no one around you who will support you. Thats why you have to be strong and overcome everything on your own",

 
]

const reactionsArr = [
    "LOL",
    "That's hilarious!",
    "So silly!",
    "Very thoughtful indeed!!",
    "not funny",
]

const getRandomItem=(arrayData)=>arrayData[Math.floor(Math.random()*arrayData.length)];
const getRandomThoughts=(integr)=>{
    const results=[];
    for(let i=0;i<integr;i++){
        results.push({
            thoughtText:getRandomItem(thoughtsArr),
            userName:getRandomItem(userNames),
            reactions:[...getRandomReactions(3)],
        });
    }
    return results;
}

const getRandomReactions=(integr)=>{
    const results=[];
    for(let i=0;i<integr;i++)
    {
        results.push({
            reactionBody:getRandomItem(reactionsArr),
            userName:getRandomItem(userNames),
        });
        return results;
    }


}

module.exports={userNames,getRandomThoughts};

