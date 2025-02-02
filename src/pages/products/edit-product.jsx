import { useForm } from "react-hook-form";
import { TextInput } from "../../components/inputs/text-input";
import ReactModal from "react-modal";
import { addedProducts, editProduct } from "../../request/request-products";
import { useState } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  },
};

export const EditProduct = (props) => {
  const {
    isModalOpen,
    onCloseModal,
    setProducts,
    id,
    initialValues,
    setIsEdit,
  } = props;
  const [errorForm, setErrorForm] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    editProduct({ ...data, id })
      .then(({ data }) => {
        setProducts((prevValue) => [
          ...prevValue.map((product) => {
            if (product.id === id) {
              return { ...data, id };
            } else {
              return product;
            }
          }),
        ]);
        onCloseModal({ status: false, id: null });
      })
      .catch(() => setErrorForm(true));
  };

  console.log(initialValues);
  return (
    <ReactModal isOpen={isModalOpen} style={customStyles}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <button
            onClick={() => {
              onCloseModal({ status: false, id: null });
              setErrorForm(false);
            }}
          >
            close
          </button>
        </div>
        <div>
          {errorForm ? (
            <div>Произошла ощибка изменения</div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                register={register}
                name={"title"}
                label={"Наименование"}
                validate={{ required: true }}
                errors={errors}
              />
              <TextInput
                register={register}
                errors={errors}
                name={"price"}
                label={"Цена"}
                validate={{ required: true }}
              />
              <button>Изменить продукт</button>
            </form>
          )}
        </div>
      </div>
    </ReactModal>
  );
};
