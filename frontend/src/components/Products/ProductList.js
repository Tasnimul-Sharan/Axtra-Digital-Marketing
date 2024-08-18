import React from "react";
import { Table, Button } from "antd";

const ProductList = ({ products, deleteProduct, editProduct }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Stock Quantity",
      dataIndex: "stockQuantity",
      key: "stockQuantity",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            onClick={() => editProduct(record)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            className="bg-red-500 text-white hover:bg-red-400 "
            onClick={() => deleteProduct(record._id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return <Table dataSource={products} columns={columns} rowKey="_id" />;
};

export default ProductList;
