const express= require('express');
require('dotenv').config();

const app= express();




app.get('/', (req, res) => {
    res.send('Hello World');
}
)
app.get('/twitter', (req, res) => {
    res.send('Hello World efte')

});
app.get('/login', (req, res) => {
    res.send('<h1>please login at eftes world</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(`Examples listening on port ${process.env.PORT}`);
});


