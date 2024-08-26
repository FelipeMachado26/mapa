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

// iremos implementar todos os controladores especificos para os instrutores

export function listar (req:Request,res:Response) {
    return res.status(200).json(instrutores)
    
}



export function detalhar (req:Request,res:Response) {
 
    const { id } = req.params

    const instrutor = instrutores.find((item) =>{
        return item.id === Number(id)
    })

    if(!instrutor){
        return res.status(404).json({
            mensagem: 'instrutor nao encontrado(a)'
        })
    }
    return res.status(200).json(instrutores)
}

