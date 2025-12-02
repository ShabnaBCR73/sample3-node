let express = require('express');

let app = express();

app.set('view engine' , 'ejs');

const students =[
    {id: 1, name: 'shabna' , course: 'node.js'},
    {id: 2, name: 'nijas' , course: 'react'},
    {id: 3, name: 'Aalim' , course: 'python'}
];

app.get('/' , (req,res) => {
    res.render('table' , {students});
});

app.listen(3000 , () => console.log('server running'));