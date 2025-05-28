require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('<h1 style="color: red" >Hello World! This is a test4!</h1>');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map