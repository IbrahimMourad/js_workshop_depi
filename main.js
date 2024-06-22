const addForm = document.forms['add-book'];
const list = document.querySelector('#book-list ul');

addForm.addEventListener('submit', function (e) {
  // stop from default behavior -- refresh on submit
  e.preventDefault();

  // getting value from the user
  const value = addForm['add-input'].value;

  // check if user input is longer than 3 chars
  if (value.length > 3) {
    // creating element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = 'Delete';

    // add classNames
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
});

// hide books
const hideCheck = document.querySelector('#hide');
hideCheck.addEventListener('change', function () {
  if (hideCheck.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
});

// search books
const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function (e) {
  const searchValue = searchBar.value.toLowerCase();
  const books = list.querySelectorAll('li');

  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent.toLowerCase();

    if (!title.includes(searchValue)) {
      book.style.display = 'none';
    } else {
      book.style.display = 'block';
    }
  });
});

list.addEventListener('click', function (e) {
  // delete item
  if (e.target.className === 'delete') {
    const li = e.target.parentElement;
    li.remove();
  }

  // mark as done
  if (e.target.classList.contains('name')) {
    e.target.classList.toggle('done');
  }
});

// tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target);

    Array.from(panels).forEach(function (panel) {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

/* function getData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      return res.json();
    })
    .then((res) =>
      res.forEach((el) => {
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        // add text content
        bookName.textContent = el.name;
        deleteBtn.textContent = 'Delete';

        // add classNames
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to DOM
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);
      })
    );
}
 */

// async await

async function renderData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  data.forEach((el) => {
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    bookName.textContent = el.name;
    deleteBtn.textContent = 'Delete';

    // add classNames
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM -
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}
// run function 1
renderData();
