import { useEffect, useState } from "react";

import { useContext } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

import Card from "../Card/Card";
const ContainerProducts = () => {
	const { user } = useContext(SocketInfoContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (user) {
			fetch("https://finalback-production.up.railway.app/api/product/62eb41b", {
				headers: {
					Authorization: `Bearer ${user.authToken}`,
				},
			})
				.then((response) => response.json())
				.then((data) => setProducts(data));
		}
	}, [user]);

	return (
		<div className="container">
			<div className="row">
				{products ? (
					products.map((prod) => (
						<div className="col" key={prod._id}>
							<Card product={prod} />
						</div>
					))
				) : (
					<div>Loading</div>
				)}
			</div>
		</div>
	);
};

export default ContainerProducts;
