import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button } from "antd";

const ProductForm = ({ addProduct, updateProduct, editingProduct }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editingProduct) {
      form.setFieldsValue(editingProduct);
    } else {
      form.resetFields();
    }
  }, [editingProduct, form]);

  const onFinish = (values) => {
    if (editingProduct) {
      updateProduct(editingProduct._id, values);
    } else {
      addProduct(values);
    }
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: "Please input the product name!" }]}
      >
        <Input placeholder="Product Name" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <Input placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, message: "Please input the price!" }]}
      >
        <InputNumber
          placeholder="Price"
          min={0}
          formatter={(value) => `$ ${value}`}
          className="w-full"
        />
      </Form.Item>

      <Form.Item
        name="picture"
        label="Picture URL"
        rules={[{ required: true, message: "Please input the picture URL!" }]}
      >
        <Input placeholder="Picture URL" />
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: "Please input the category!" }]}
      >
        <Input placeholder="Category" />
      </Form.Item>

      <Form.Item
        name="stockQuantity"
        label="Stock Quantity"
        rules={[
          { required: true, message: "Please input the stock quantity!" },
        ]}
      >
        <InputNumber placeholder="Stock Quantity" min={0} className="w-full" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          {editingProduct ? "Update Product" : "Add Product"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
