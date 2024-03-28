import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'



dotenv.config();



export const verifyToken = (req, res, next) =>{
    try {
        const token = req.headers['token']

        if(!token){
            return res.status(404).json({
                message: "You do not have access"
            })
        }

        const data = jwt.verify(token, process.env.SECRET)

        req.info = data
        
    } catch (error) {
        return res.json({
            message: error
        })
    }

    next();
}