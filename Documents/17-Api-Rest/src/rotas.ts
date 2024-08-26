//Roteadorda aplicaçaõ
import {Router} from 'express'
import { detalhar, listar } from './controladores/instrutores'


const rotas  = Router()
//Criado a API REST:

//Listar todos instrutores
rotas.get('/instrutores',listar)

//detalhar as informações de um instrutor
rotas.get('/instrutores/:id',detalhar)

//cadastrar instrutor


//editar um instrutor
//excluir um instrutor


//cadastrar uma aula para um instrutor
//exluir uma aula para um instrutor


export default rotas