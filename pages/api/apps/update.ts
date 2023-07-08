import handler from 'lib/handler';
import dbConnect from "lib/dbConnect";
import { isAdminMiddleware } from 'middleware/checkUser';
import nextConnect from 'next-connect';
import { checkUser } from 'lib/checkUser';
import User from "models/user";
import App from "models/app";
import type {App as AppType } from "types/app";

export default nextConnect(handler)
    .use(isAdminMiddleware)
    .post(async (req, res) => {
        try {
            await dbConnect();
            const { userId ,appData } = req.body;
            const existingUser = await User.findById(userId);
            if (!existingUser) {
              return res.status(404).json({ message: 'User not found!' });
            }
          
            const result = await checkUser(req, existingUser);
            if (!result.verified) {
              return res.status(403).json({ verified: result.verified, message: result.message });
            }
            // check if user is admin of not 
            if(result.isAdmin !== true)
            {
                return res.status(403).json({ message: 'You are not authorized to create app!' });
            }
            
            // user is verified
            const isExistingApp  = (await App.findOne({appId:appData.appId})) as AppType | null;
            if(!isExistingApp){
                return res.status(403).json({ message: `App doesn't  exist!` });
            }
            const newAppData:AppType = {
                ...isExistingApp,
                ...appData,
            }
            const newApp = await App.findByIdAndUpdate(isExistingApp._id,newAppData);
            if(!newApp){
                return res.status(403).json({ message: `App doesn't  exist!` });
            }        
      
            // return application
            return res.status(200).json({ message:"App updated successfully" });


        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: error.message ?? "Internal Server Error" });
        }
    })