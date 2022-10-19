const book = {
  title: "",
  author: "Ryan holiday",
};

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData);
