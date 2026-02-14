let input_box = document.getElementById('input-box');
let list = document.querySelector('ul');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
    let inputValue = input_box.value;

    if (inputValue === "") return;

    const newSpan = document.createElement('span');
    newSpan.textContent = inputValue;

    const newButton = document.createElement('button');
    newButton.classList.add("delete-btn");
    newButton.textContent = "Delete";

    newButton.addEventListener('click', function() {
        
    });
    const newlist = document.createElement('li');
    newlist.appendChild(newSpan);
    newlist.appendChild(newButton);
    list.appendChild(newlist);
    input_box.value = '';
    })
});

