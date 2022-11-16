import "./ItemCart.css";
import { useContext } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

const ItemCart = ({ tittle, thumbnail, price, _id, cantidad }) => {
	const { removeProd } = useContext(SocketInfoContext);

	return (
		<>
			<div className="BoxViewCartProd">
				<div className="Cont__ImgProd">
					<img src={thumbnail} alt={tittle} />
				</div>
				<div className="Cont__datailsProd">
					<div className="Cont__nameProd">
						<h3>{tittle}</h3>
					</div>
					<div>Cantidad: ${cantidad}</div>
					<div className="Cont__cantProd">
						<div className="Cont__Price">
							<span>${price}</span>
						</div>
					</div>
				</div>
				<div className="Cont__Trash">
					<button onClick={() => removeProd(_id)}>X</button>
				</div>
			</div>
		</>
	);
};

export default ItemCart;
