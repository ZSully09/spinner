const stdOut = process.stdout;
let counter = 100;
let i = 0;
let offset = 200;

const array = [
  "|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "\\   ", "|   \n"];
for (const item of array) {
  setTimeout(() => {
    stdOut.write("\r" + item);
  }, counter + i * offset);
  i++;
}
