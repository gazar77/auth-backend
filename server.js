const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

dotenv.config(); // تحميل المتغيرات من ملف .env

const app = express();

// الاتصال بقاعدة البيانات
connectDB();

// ميدل وير
app.use(cors());
app.use(express.json());

// الراوتات
app.use("/api/auth", authRoutes);

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
