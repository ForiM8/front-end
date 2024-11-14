import BackBlocks from "../../components/backBlocks";
import ProductsBlock from "../../components/productsBlock/productsBlock";
import { useEffect, useState } from "react";
import { CreateProduct } from "./create-product";
import { getProducts } from "../../request/request-products";
import { CardProduct } from "../../components/cards/cards-product";
import { removeOneProduct } from "../../request/request-products";
import { EditProduct } from "./edit-product";
import "./products.scss"

export const Products = () => {

  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEdit, setIsEdit] = useState({ status: false, id: null });

  const addProduct = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    getProducts()
      .then(({ data }) => {
        setProducts(data.map((elem) => ({ ...elem, price: 10 })));
      })
      .catch(() => null);
  }, []);

  const removeProduct = (id) => {
    removeOneProduct(id)
      .then(({ }) => {
        setProducts((prevValue) =>
          prevValue.filter((product) => product.id !== id)
        );
      })
      .catch(() => alert("Ошибка"));
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="container">
      <div className="container__products">
        <BackBlocks />

        <div className="container__products__header">
          <div className="container__products__header-text">Заметки</div>
          <button onClick={addProduct} className="container__products__header-new_product" style={{ cursor: "pointer" }}>Новый продукт</button>
        </div>

        <div className="container__products__products">

          {products.map((product) => (
            <CardProduct
              {...product}
              key={product.id}
              name={product.title}
              price={product.price}
              onRemove={removeProduct}
              onEdit={setIsEdit}
            />
          ))}

          <CreateProduct
            setProducts={setProducts}
            onCloseModal={onCloseModal}
            isModalOpen={isModalOpen}
          />{isEdit.status && (
            <EditProduct
              setProducts={setProducts}
              onCloseModal={setIsEdit}
              isModalOpen={isEdit.status}
              initialValues={
                products.filter((product) => product.id === isEdit.id)[0]
              }
              setIsEdit={setIsEdit}
              id={isEdit.id}
            />
          )}



        </div>
      </div>
    </div>

    // <div>
    //   <button onClick={addProduct}>Добавить продукт</button>
    //   <span style={{ marginLeft: 16, fontSize: 20, fontWeight: 600 }}>
    //     {products.length}
    //   </span>
    //   <div style={{ display: "flex", gap: 8, margin: "40px 20px" }}>
    //     {products.map((product) => (
    //       <CardProduct
    //         {...product}
    //         key={product.id}
    //         name={product.title}
    //         price={product.price}
    //         onRemove={removeProduct}
    //         onEdit={setIsEdit}
    //       />
    //     ))}
    //   </div>
    //   <CreateProduct
    //     setProducts={setProducts}
    //     onCloseModal={onCloseModal}
    //     isModalOpen={isModalOpen}
    //   />
    //   {isEdit.status && (
    //     <EditProduct
    //       setProducts={setProducts}
    //       onCloseModal={setIsEdit}
    //       isModalOpen={isEdit.status}
    //       initialValues={
    //         products.filter((product) => product.id === isEdit.id)[0]
    //       }
    //       setIsEdit={setIsEdit}
    //       id={isEdit.id}
    //     />
    //   )}
    // </div>
  );


};
