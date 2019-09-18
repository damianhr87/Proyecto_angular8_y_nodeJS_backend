import { app } from './app/app';
import express = require('express');

const port = 4500;

app.listen(port, () =>  console.log('Express server listening on port ' + port));
