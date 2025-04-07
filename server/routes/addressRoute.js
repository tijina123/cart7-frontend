const express = require("express")
const router = express.Router()
const addressController = require("../controllers/addressController")

// address Management
router.get("/", addressController.getAddresses); //→ Get address
router.get("/:id", addressController.getSingleAddress); //→ Get single address
router.get("all/:id", addressController.getAddressByUser); //→ Get address by user
router.post("/add", addressController.addAddress); //→ Add address
router.put("/update/:id", addressController.updateAddress); //→ Update address
router.delete("/remove/:id", addressController.deleteAddress); //→ Remove address



module.exports = router; 