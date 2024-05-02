function walkdog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = false;

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
    const trashTakenOut = true;
    if (trashTakenOut) {
      resolve("you take out the trash");
    } else {
      reject("you didn't take out the trash");
    }
  });
}
async function doChores() {
  try {
    const walkDogResult = await walkdog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeoutTrashResult = await takeoutTrash();
    console.log(takeoutTrashResult);

    console.log("all chores done");
  } catch (error) {
    console.error(error);
  }
}
doChores();
//async= make a function return a promise
//await= make an async function wait for a promise
