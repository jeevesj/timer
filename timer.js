//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
const args = process.argv;
const newargs = args.slice(2);
const newArray = [];
for(const positives of newargs) {
  if(positives > 0) {
    newArray.push(positives);
  }
}

function timer(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      //console.log('.');
      process.stdout.write('\x07');
    }, 1000 * array[i]);
  }
};

timer(newArray);