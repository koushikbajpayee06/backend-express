const adminAuth = (req, res, next)=>{
    console.log("Admin auth is getting Checked!!!!");
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
};
const userAuth = (req, res, next)=>{
    console.log("Admin auth is getting Checked!!!!");
    const token = "xyze";
    const isUserAuthorized = token ==="xyze";
    if(!isUserAuthorized){
        res.status(401).send("Unauthorized request");
    }
    else{
        next();
    }
};

module.exports={
    adminAuth,
    userAuth
}

