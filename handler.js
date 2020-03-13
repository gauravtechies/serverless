'use strict';

// module.exports.hello = (event, context,callback)=>{
//   const response={
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully ',
//       input: event,
//     }),
//   };
  
//   callback(null,response);
//   // callback(new Error("Something went wrong"));
// }; 

// If we pass data from function and that we have to pass like [sls invoke local -f hello -d 'wut up world'] [ sls invoke local -f hello -d '{"first":2, "second":10}']
// module.exports.hello = (event, context,callback)=>{
//   const {first, second} =event;  // value in event comes from command line [sls invoke local -f hello -d '{"first":2, "second":10}'] and then it will get into {first, second}
//   const added =first + second  // then from object they are adding value 
//   const response={
//     statusCode: 200,
//     body: JSON.stringify({
//       // input: event,
//       event: added
//     }),
//   };
  
//   callback(null,response);
//   // callback(new Error("Something went wrong"));
// }; 

// module.exports.hello = (event, context,callback)=>{
//   const {first, second} =event;  // value in event comes from command line [sls invoke local -f hello -d '{"first":2, "second":10}'] and then it will get into {first, second}
//   const added =first + second  // then from object they are adding value 
//   const response={
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Hello there"
//     }),
//   };
  
//   callback(null,response);
//   // callback(new Error("Something went wrong"));
// }; 
  module.exports.hello = (event, context,callback)=>{
    console.log(event.pathParameters.name);
    const reply = `Hello ${event.pathParameters.name}`;
      const response={
      statusCode: 200,
      body: JSON.stringify({
        message: JSON.stringify(reply)
      }),
    };
    callback(null, response);
  }; 
