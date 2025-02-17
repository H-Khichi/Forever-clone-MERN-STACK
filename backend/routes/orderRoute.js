import express from 'express'
import  {placeOrder,allOrders,userOrders,updateOrderStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'
const  orderRouter= express.Router()
//for admin
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateOrderStatus)


//payment features
orderRouter.post('/place',authUser,placeOrder)
// orderRouter.post('/place',authUser,placeOrderStripe)
// orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
//user feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter;