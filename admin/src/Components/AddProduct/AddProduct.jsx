import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const API_BASE = "http://localhost:4000"; // ajuste se sua porta/host for outro

export const AddProduct = () => {
  const [image, setImage] = useState(null); // File para preview e upload
  const [loading, setLoading] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",          // aqui vai a URL depois do upload
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails((prev) => ({ ...prev, [name]: value }));
  };

  const imageHandler = (e) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const Add_Product = async () => {
    try {
      if (!productDetails.name || !productDetails.new_price || !productDetails.old_price || !image) {
        alert("Preencha nome, preços e selecione uma imagem.");
        return;
      }

      setLoading(true);

      // 1) Upload da imagem
      const form = new FormData();
      // ⚠️ o backend espera o campo chamado 'product'
      form.append("product", image);

      const upRes = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        body: form,
      });
      const upData = await upRes.json();
      if (!upRes.ok || !upData?.image_url) {
        throw new Error("Falha no upload da imagem.");
      }

      // 2) Enviar o produto com a URL da imagem
      const payload = {
        name: productDetails.name,
        category: productDetails.category,
        image: upData.image_url,                           // << URL final
        new_price: Number(productDetails.new_price),
        old_price: Number(productDetails.old_price),
      };

      const prodRes = await fetch(`${API_BASE}/addproduct`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const prodData = await prodRes.json();

      if (!prodRes.ok || !prodData?.success) {
        throw new Error(prodData?.error || "Falha ao salvar produto.");
      }

      console.log("Produto criado:", prodData.product);
      alert("Produto adicionado com sucesso!");

      // Reset simples
      setProductDetails({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      alert(err.message || "Erro ao adicionar produto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Nome do Produto</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Escreva Aqui"
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Preço</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="Escreva aqui"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Promoção</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="Escreva aqui"
          />
        </div>
      </div>

      <div className="addproduct-itemfield">
        <p>Categoria</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className="add-product-selector"
        >
          <option value="women">Mulheres</option>
          <option value="men">Homens</option>
          <option value="kid">Crianças</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumnail-img"
            alt="Pré-visualização"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          accept="image/*"
          hidden
        />
      </div>

      <button onClick={Add_Product} className="addproduct-btn" disabled={loading}>
        {loading ? "Enviando..." : "Adicionar"}
      </button>
    </div>
  );
};

export default AddProduct;
