import { Request,Response } from "express"

type Tinstrutores = {
    id:number
    nome:string
    email:string
}

const instrutores :Tinstrutores[] = [{
    id: 1,
    nome:'felipe',
    email:'felipe@gmail.com'
},{
     id:2,
     nome:'Maria',
     email:'maria@gmail.com'

}

]

export function listar (req:Request,res:Response) {
    return res.status(200).json(instrutores)
    
}

// iremos implementar todos os controladores especificos para os instrutores