import { useState, createContext, useEffect } from "react";
import socket from "../components/socket";

export const SocketInfoContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [msg, setMsg] = useState([]);
	const [user, setUser] = useState(null);
	const [cart, setCart] = useState([]);

	const clearCart = () => setCart([]);

	const getTotal = () => {
		let total = 0;
		cart.forEach((prod) => {
			total += prod.cantidad * prod.price;
		});

		return total;
	};

	const IsInCart = (id) => {
		return cart.some((prod) => prod._id === id);
	};

	const removeProd = (id) => {
		const products = cart.filter((prod) => prod._id !== id);
		setCart(products);
	};

	const getProdCantidad = (id) => {
		return cart.find((prod) => prod._id === id)?.cantidad;
	};

	const addProd = (prodToAdd) => {
		if (IsInCart(prodToAdd._id)) {
			const newProds = cart.map((prod) => {
				if (prod._id === prodToAdd._id) {
					const newProd = {
						...prod,
						cantidad: prodToAdd.cantidad,
					};
					return newProd;
				} else {
					return { ...prod, cantidad: 1 };
				}
			});
			setCart(newProds);
		} else {
			setCart([...cart, prodToAdd]);
		}
	};

	useEffect(() => {
		socket.on("server:mensaje", (mensajes) => {
			setMsg(mensajes);
		});
	}, []);

	return (
		<SocketInfoContext.Provider
			value={{
				msg,
				user,
				getProdCantidad,
				setUser,
				cart,
				getTotal,
				setCart,
				removeProd,
				clearCart,
				addProd,
			}}
		>
			{children}
		</SocketInfoContext.Provider>
	);
};
