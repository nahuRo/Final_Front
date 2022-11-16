import React, { useState, useContext } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

import ItemCart from "../ItemCart/ItemCart";

import "./Cart.css";

const Cart = () => {
	const { cart, clearCart, getTotal, user } = useContext(SocketInfoContext);

	// const [order, setOrder] = useState();
	const [loader, setLoader] = useState(false);

	const createOrder = async () => {
		setLoader(true);
		const ordenCompra = {
			items: cart,
			comprador: {
				name: user.user,
				email: user.email,
			},
			total: getTotal(),
			date: new Date(),
		};

		let data = await fetch("https://finalback-production.up.railway.app/api/order", {
			method: "POST",
			body: JSON.stringify(ordenCompra),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		});
		let response = await data.json();
		if (response) {
			console.log(response);
			setLoader(false);
		}
	};

	if (loader) {
		return (
			<div className="container-loading">
				<h1>Generando pedido, aguarde!</h1>
				<div className="lds-roller">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="cart__details">
				<h2>Articulos</h2>
				<div>
					{cart.map((prod) => (
						<ItemCart key={prod._id} {...prod} />
					))}
				</div>
				<div className="btn__cleanCart">
					<button onClick={clearCart} className="btn__cart">
						Vaciar Carrito
					</button>
				</div>
				<div className="totalCount">
					<h2>Total : $ {getTotal()}</h2>
				</div>
				<div className="btn__createOrder">
					{loader ? (
						<h1>Generando pedido, aguarde!</h1>
					) : (
						<button onClick={() => createOrder()} className="btn__cart">
							Generar Pedido
						</button>
					)}

					{/* <button onClick={() => createOrder()} className="btn__cart">
						Generar Pedido
					</button> */}
				</div>
			</div>
		</div>
	);
};

export default Cart;
