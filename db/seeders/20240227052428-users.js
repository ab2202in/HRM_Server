
'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
    .insertMany ([{
      _id : "65dd74c80697c4fa67d003dd",

      
        first_name : "abin",
        last_name: "sasikumar",
        email : 'abin@gmail.com',
        password : "$2a$12$AEbNZfai5E6otzyyHKW6auQGa1eT9hZN/itftVpHxhh603fVD6B3.",

    }
  ])
  .then((res)=>{
    console.log(res.insertMany)
  })


    
  },

  down: (models, mongoose) => {
    return models.users
    .deleteMany({
      _id : {
        $in : [
          "65dd74c80697c4fa67d003dd",
         

        ]
      }
    })
    .then((res)=>{
      console.log(res.deletedCount)
    });
 
  },
};
