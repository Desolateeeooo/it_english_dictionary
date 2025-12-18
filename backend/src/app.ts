import session from 'express-session';
import express from 'express';

const app = express();

app.use(
  session({
    secret: "D53gxl41G",
    resave: false,
    saveUninitialized: false,
  })
);