const authorise = (roll) => { 
    return (req,res,next) => {
        const user = req.user
        let isPermitted = false;
        if(user.roll == "admin"){
            isPermitted = true;
        }
        if(isPermitted){
            return next()
        }
        else{
            return res.status(401).send({message : "You are not authorised person for this"})
        }
    }
}
module.exports = authorise