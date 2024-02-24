import express from "express";
import {
  applyCoupon,
  blockUser,
  createAdmin,
  createOrder,
  createUser,
  deleteUser,
  emptyCart,
  forgotPasswordToken,
  getAllUser,
  getOrders,
  getUser,
  getUserCart,
  getWishlist,
  google,
  logOut,
  loginAdmin,
  loginUser,
  removeFromCart,
  resetPassword,
  saveAddress,
  test,
  unblockUser,
  updateOrderStatus,
  updateUser,
  userCart,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/register", createUser);
router.post("/register-admin", createAdmin);
router.post("/login", loginUser);
router.post("/google", google);
router.post("/admin-login", loginAdmin);
router.post("/cart", verifyToken, userCart);
router.get("/cart", verifyToken, getUserCart);
router.post("/cart/applycoupon", verifyToken, applyCoupon);
router.post("/cart/cash-order", verifyToken, createOrder);
router.delete("/empty-cart", verifyToken, emptyCart);
router.delete("/cart/:productId", verifyToken, removeFromCart);

router.post("/forgot-password-token", forgotPasswordToken);
router.post("/reset-password/:token", resetPassword);
router.post("/update/:id", verifyToken, updateUser);
router.post("/save-address", verifyToken, saveAddress);

router.get("/logout", logOut);
router.get("/all-users", getAllUser);
router.get("/get-orders", verifyToken, getOrders);
router.put(
  "/order/update-order/:id",
  verifyToken,
  verifyAdmin,
  updateOrderStatus
);
router.get("/wishlist", verifyToken, getWishlist);
router.get("/:id", verifyToken, getUser);

router.delete("/:id", verifyToken, deleteUser);
router.post("/block-user/:id", verifyToken, verifyAdmin, blockUser);
router.post("/unblock-user/:id", verifyToken, verifyAdmin, unblockUser);

export default router;
