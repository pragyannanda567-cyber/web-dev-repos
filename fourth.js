function doHomework() {
return new Promise((resolve, reject) {
setTimeout(() => {
let homeworkDone = true;
if (homeworkDone) {
console.log("Homework is done");
resolve("Homework complete");
} else {
reject("Homework not done");
}
}, 3000);
});
}

function doHomework() {
return new Promise((resolve, reject) {
setTimeout(() => {
let homeworkDone = true;
if (homeworkDone) {
console.log("Homework is done");
resolve("Homework complete");
} else {
reject("Homework not done");
}
}, 3000);
});
}

...
function goToPlayground() {
return new Promise((resolve, reject) => {
setTimeout(() => {
let permission= true;
if (permission) {
console.log(" Went to the playground");
resolve("Playground time!");
} else {
reject(" Not allowed to go out");
}
}, 3000);
});
}

doHomework()
.then((data) => {
console.log(data);
return eatDinner();
})
.then((data) => {
console.log(data); return goToPlayground();
})
.catch((error) => {
console.log("Something went wrong:",error );
})
.finally(() => {
console.log("Day ended Go to sleep");
});