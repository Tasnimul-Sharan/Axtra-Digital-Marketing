import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "antd";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      console.log(response.data, "data");
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  const addProduct = async (product) => {
    const res = await axios.post("http://localhost:5000/api/products", product);
    setProducts([...products, res.data]);
    setIsModalVisible(false);
  };

  const updateProduct = async (id, updatedProduct) => {
    const res = await axios.put(
      `http://localhost:5000/api/products/${id}`,
      updatedProduct
    );
    setProducts(
      products.map((product) => (product._id === id ? res.data : product))
    );
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setProducts(products.filter((product) => product._id !== id));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingProduct(null);
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setIsModalVisible(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end">
        <Button type="primary" onClick={showModal}>
          Add Product
        </Button>
      </div>
      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <ProductForm
          addProduct={addProduct}
          updateProduct={updateProduct}
          editingProduct={editingProduct}
        />
      </Modal>
    </div>
  );
};

export default Products;
