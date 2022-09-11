// 1.DOM Selection
// 2.Add Event Listner
// 3.Basiv Validation
// 4.Creating Element
// 5.Append


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn')
const booklist = document.querySelector('#book-list')


btn.addEventListener('click', function(f){
    f.preventDefault();

    if(title.value == '' && author.value == '' && year.value == ''){
        alert ('something rong');
    }else{
        const newRow = document.createElement('tr');

        //Creating Title

        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        booklist.appendChild(newRow);
    }
})