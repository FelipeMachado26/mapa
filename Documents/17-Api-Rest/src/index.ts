import 'dotenv/config'
import  express  from "express";
import rotas from './rotas';
import { json } from 'express';


const servidor = express()

servidor.use(express.json())


servidor.use(rotas)

servidor.listen(process.env.PORT)

