var questions = [
    {q: 'The sky is blue.', a: 't'},
    {q: 'There are 365 days in a year.', a: 't'},
    {q: 'There are 42 ounces in a pound.', a: 'f'},
    {q: 'The Declaration of Independence was created in 1745.', a: 'f'},
    {q: 'Bananas are vegetables.', a: 'f'}
];
var body = document.body;
var h1El = document.createElement('h1');
h1El.textContent = 'True Or False'
h1El.setAttribute('style', 'margin:auto; width: 50%; text-align:center;');

body.appendChild(h1El);

var score = 0;

