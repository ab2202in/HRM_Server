'use strict';

module.exports = {
  up: (models, mongoose) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.Test.bulkWrite([
        {
          insertOne: {
            document: {
              name: 'first test'
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
    */
    return models.users
    .insertMany([
      {
        _id: "65dd792357bafc18dba412f5",
        name: "aadhi",
        email : "aadhi007@gmail.com",
        password : "$2a$12$mNybG4QHRJPHN6vQ5ab1dOiFZvFbVgorNqEMemgOQOh8CIH37onyq"
      }
    ])
  },

  down: (models, mongoose) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return models.users([
        {
          deleteOne: {
             _id: {
              $in :[
                "65dd792357bafc18dba412f5"
              ]
            
            }
          }
        }
      ]).then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
    
  }
};
