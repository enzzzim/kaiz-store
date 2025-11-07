const port = 4000;
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

// Conexão ao banco de dados MongoDB
mongoose.connect(
  "mongodb+srv://enzimskx:240790@clusterkaiz.d2stnep.mongodb.net/kaizweb"
);

// Criação da API

// Armazenamento de Imagens

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Endpoint para as imagens

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    sucess: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port" + port);
  } else {
    console.log("Error : " + error);
  }
});

// Schema

const Product = mongoose.model("Product", {
  id:        { type: Number, required: true },
  name:      { type: String, required: true },
  image:     { type: String, required: true },
  category:  { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date:      { type: Date,   default: Date.now },
  aviable:   { type: Boolean, default: true },
});

// 
app.post("/addproduct", async (req, res) => {
  try {
    const products = await Product.find({});
    let id;

    if (products.length > 0) { 
      const last_product = products[products.length - 1]; 
      id = last_product.id + 1;
    } else {
      id = 1; 
    }

    const { name, image, category, new_price, old_price } = req.body;

    // validação de campos obrigatórios
    if (
      !name ||
      !image ||
      !category ||
      new_price == null ||
      old_price == null
    ) {
      return res.status(400).json({
        success: false,
        error: "Campos obrigatórios faltando",
      });
    }

    // cria e salva o produto
    const product = new Product({
      id,
      name,
      image,
      category,
      new_price,
      old_price,
    });

    await product.save();

    return res.status(201).json({
      success: true,
      product, 
    });
  } catch (err) {
    console.error("Erro ao salvar produto:", err);
    return res.status(500).json({
      success: false,
      error: "Erro interno no servidor",
    });
  }
});

// API para deletar os produtos

app.delete('/products/:id', async (req, res) => {
  const id = Number(req.params.id);
  const deletedProduct = await Product.findOneAndDelete({ id });
  if (!deletedProduct) return res.status(404).json({ success: false, error: "Produto não encontrado" });
  res.json({ success: true, message: "Produto removido", product: deletedProduct });
});

// API para puxar todos os produtos

app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({}); // ✅ corrigido
    console.log("Todos os produtos buscados com sucesso");
    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
    res.status(500).json({
      success: false,
      error: "Erro interno no servidor",
    });
  }
});
