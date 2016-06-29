if (process.argv[2] == null || process.argv[3] == null) {
  console.log('Pass in an argument, dummy!');
} else if (process.argv[2] === process.argv[3]) {
  console.log('They are equal!');
} else {console.log('They are not equal.')};