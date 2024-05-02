//promises = an object manage asyn operation
//pending -> resolved or rejected
//new promise(resolve, reject) =>{asyn}

function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;

      if (dogwalked) {
        resolve("you walk the dog");
      } else {
        reject("you didn't walk the dog");
      }
    }, 1500);
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    const kitchenCleaned = true;

    if (kitchenCleaned) {
      resolve("you clean the kitchen");
    } else {
      reject("you didn't clean the kitchen");
    }
  });
}
function takeoutTrash() {
  return new Promise((resolve, reject) => {
    const trashTakenOut = flase;
    if (trashTakenOut) {
      resolve("you take out the trash");
    } else {
      reject("you didn't take out the trash");
    }
  });
}
//--------method chain--------
walkdog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeoutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("you finish all chores!");
  })
  .catch((error) => {
    console.error(error);
  });

//--------callback hell--------
// walkdog(() => {
//   cleanKitchen(() => {
//     takeoutTrash(() => {
//       console.log("all done");
//     });
//   });
// });
