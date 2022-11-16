import { useContext, useState } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

import ItemCount from "../ItemCount/ItemCount";

const Card = ({ product }) => {
	const { addProd, getProdCantidad } = useContext(SocketInfoContext);

	const [cantToCart, setCantToCart] = useState(0);

	const handleCart = (cant) => {
		addProd({ ...product, cantidad: cant });
		setCantToCart(cant);
	};

	return (
		<>
			<div className="mt-3">
				<div className="card " style={{ width: "23rem" }}>
					<img
						src={product.thumbnail}
						className="card-img-top"
						style={{ objectFit: "cover", height: "300px" }}
						alt={product.tittle}
					/>
					<div
						className="card-body"
						style={{ width: "100%", height: "220px", padding: "10px" }}
					>
						<p className="card-text">{product.tittle}</p>
						<p className="card-text">$ {product.price}</p>
						<p className="card-text"> Stock: {product.stock - cantToCart}</p>

						<ItemCount
							initial={getProdCantidad(product._id)}
							stock={product.stock}
							onAdd={handleCart}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
