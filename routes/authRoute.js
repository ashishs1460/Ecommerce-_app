import  express from "express";
import{forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router =express.Router()

//routing

//for Resiter || post

router.post('/register',registerController)

//for Login || method POST

router.post('/login',loginController)

//for test 

router.get('/test',requireSignIn,isAdmin,testController)

//forgot password || post 
 
router.post('/forgot-password', forgotPasswordController)


//protected route || user

router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})


//protected route || admin

router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );



export default router