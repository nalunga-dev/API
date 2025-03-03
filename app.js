const addBtn = document.querySelector(".addBtn");
const input = document.querySelector(".inPut");
const Api = "https://api.freeapi.app/api/v1/public/books/book/random";
async function fetchBooks() {
  try {
    const response = await fetch(Api);
    const fetchedBooks = await response.json();
    // console.log(fetchedBooks);
    const title = fetchedBooks.data.volumeInfo.title;
    const data = {
      title: title,
    };
    // console.log(title);
    displayBook(data);
  } catch (error) {
    console.error(error);
  }
}
function displayBook(data) {
  input.textContent = data.title;
}
addBtn.addEventListener("click", () => {
  fetchBooks();
});
