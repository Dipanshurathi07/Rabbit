const express = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
var app = express()
const connectDB = require("./config/db.js")
const userRouter = require("./routes/userRoutes.js")
const productRouter = require("./routes/productRoutes.js");
const cartRouter = require("./routes/cartRoutes.js");
const uploadRouter = require("./routes/uploadRoutes.js");
const checkOut = require("./routes/checkoutRoutes.js");
const order = require("./routes/orderRoutes.js");
const Subscriber = require("./routes/subscriber.js");
const adminRouter = require("./routes/adminRoutes.js");
const orderAdmin = require("./routes/orderAdminRoute.js");

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://rabbit-psi.vercel.app",
  "https://rabbit-3zab.onrender.com",
  "https://rabbit-gpul.vercel.app/"
];

app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || /^http:\/\/localhost:\d+$/.test(origin) || /^https:\/\/.*\.vercel\.app$/.test(origin)) {
      callback(null, true);
      return;
    }

    callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.options(/.*/, cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});
connectDB();
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/checkout", checkOut)
app.use("/api/order", order);
app.use("/api/upload",uploadRouter);
app.use("/api/subscriber",Subscriber);
app.use("/api/admin/users",adminRouter);
app.use("/api/admin/products",productRouter)
app.use("/api/admin/orders",orderAdmin)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

