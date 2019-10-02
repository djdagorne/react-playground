function doTask(name) {
  const p = new Promise((resolve, reject) => {
    console.log(`${name} has started`);
    const duration =   Math.floor(Math.random() * 5000);
    setTimeout(() => {
      resolve(`${name} has ended after ${duration} milliseconds`);
    }, duration);
  });
  return p;
}

Promise   //Composition example, all ABC need to finish before D starts
  .all([
    doTask('A'),
    doTask('B'),
    doTask('C')
  ])
  .then(results => {
    //first console.log the results
    results.forEach(result => console.log(result));
    return doTask('D');
  })
  .then(result => {
    console.log(result);
  });

//             doTask('B')   //chaining example, B then C then D are done in order, asynchronously
//             .then(result => {
//                 console.log(result);
//                 return doTask('C');
//             })
//             .then(result => {
//                 console.log(result);
//                 return doTask('D');
//             })
//             .then(result => {
//                 console.log(result);
//             });

// doTask('E')
//   .then(result => {
//     console.log(result);
//   });

// doTask('F')
//   .then(result => {
//     console.log(result);
//   });