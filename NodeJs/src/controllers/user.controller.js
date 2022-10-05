const ModelUser = require('../models/USER');

const CtrlUser = {};

CtrlUser.getUsers = async (req, res) => {
    try {
        const USERS = await ModelUser.find({isActive:true});
        return res.json(
            {
                message:`El número de usuarios encontrados son: ${USERS.length}`,
                USERS
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                message:`Hubo un error con el servidor, intente más tarde`,
                errorName: error.name,
                errorBody: error.message
            }
        )
    }
}

CtrlUser.getUser = async (req, res) => {
    try {
        const IDUSER = req.params.idUser;
        const USER = await ModelUser.findOne({$and:[{"_id":IDUSER},{isActive:true}]});
        if(USER != null){
            return res.json(
                {
                    message:`Usuario encontrado`,
                    USER
                }
            )
        }else{
            return res.status(404).json(
                {
                    message:`El usuario no pudo ser encontrado`
                }
            )
        }
    } catch (error) {
        return res.status(500).json(
            {
                message:`Hubo un error con el servidor intente mas tarde`,
                errorName: error.name,
                errorBody: error.message
            }
        )
    }
}

CtrlUser.postUser = async (req, res) =>{
    try {
        const {username, password, email} = req.body;
        if(username.length < 8 || password.length < 8 || email.length < 8){
            return res.status(404).json(
                {
                    message:`La información proporcionada no es la adecuada`,
                    opcionesObligatorias:["email","password",],
                    opcionAdicional:["username"],
                    ERROR:`La longitud de algunas de las opciones deben ser mayor a 8`
                }
            )
        }
        const newUser = new ModelUser({
            username,
            password,
            email
        });
        
        await newUser.save();
        res.json(
            {
                message:`El usuario fue guardado exitosamente`
            }
        )

    } catch (error) {
        return res.status(500).json(`Error interno del server`)
    }
}

CtrlUser.putUser = async (req, res) => {
    try {
        const IDUSER = req.params.idUser;
        const { email, password } = req.body;
        if(!IDUSER || !password || !email){
            return res.status(400).json(
                {
                    message:"No viene id o información en la petición.",
                    opcionesDeCuerpo:["password","email"]
                }
            )
        }
        if(password.length < 8 || email.length < 8){
            return res.status(404).json(
                {
                    message:"La longitud de la contraseña o email debe ser mayor a 8."
                }
            )
        }
        await ModelUser.findOneAndUpdate({$and:[{"_id":IDUSER},{isActive:true}]},{email, password});
        return res.json(
            {
                message:"El usuario fue modificado exitosamente."
            }
        )
    } catch (error) {
        return res.status(500).json(`Error interno del server`)
    }
}

CtrlUser.deleteUser = async (req, res) => {
    try {
        const IDUSER = req.params.idUser;
        if(!IDUSER){
            return res.status(404).json(
                {
                    message:"No se recibe el id del User correctamente"
                }
            )
        }
        await ModelUser.findOneAndUpdate({$and:[{"_id":IDUSER},{isActive:true}]}, {isActive:false});
        return res.json(
            {
                message:"Usuario eliminado correctamente"
            }
        )
    } catch (error) {
        return res.status(500).json(`Error interno del server ${error.name}: ${error.message}`)
    }
}

module.exports = CtrlUser;