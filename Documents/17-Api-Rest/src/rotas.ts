//Roteadorda aplicaçaõ
import {Router} from 'express'
import { listar } from './controladores/instrutores'


const rotas  = Router()

//Listar todos instrutores
rotas.get('/instrutores',listar)


//Criado a API REST:


//Listar todos instrutores


//detralhar as informações de um instrutor
//cadastrar instrutor
//editar um instrutor
//excluir um instrutor


//cadastrar uma aula para um instrutor
//exluir uma aula para um instrutor


export default rotas