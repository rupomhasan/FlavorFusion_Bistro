import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import Button from "../Menu/Button/Button";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;

  const { user } = useAuth();
  const location = useLocation();
  const axios = useAxios();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const order = {
      email: user.email,
      foodId: _id,
      name: name,
      image: image,
      recipe: recipe,
      price: price,
    };

    if (user && user.email) {
      axios.post("/carts", order).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Food has been ordered",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in ",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="relative">
        <img className="w-full" src={image} alt="Shoes" />
        <span className="absolute top-3 right-3 badge p-3 border-none bg-black text-yellow-500">
          $ {price}
        </span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions flex justify-end">
          <button onClick={handleAddToCart}>
            <Button>Add to Cart</Button>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
