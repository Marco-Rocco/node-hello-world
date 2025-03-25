let message = ''

for (let i = 2; i < process.argv.length; i++) {
    message += `${process.argv[i]} ` ;
}

// console.log(process.argv)
console.log(message);