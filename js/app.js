const express = require ('express');
const app = express();

app.get('/',(req.res)=>{
	res.send('Estas ne la pagina inicio')
	console.log('estas en la pagina inicio')
})
