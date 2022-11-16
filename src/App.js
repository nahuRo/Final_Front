import FormMsg from "./components/FormMsg/FormMsg";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";
import ContainerProducts from "./components/ContainerProducts/ContainerProducts";

import { Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/SocketsInfoContext";
import Cart from "./components/Cart/Cart";

function App() {
	return (
		<div>
			<CartContextProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<h1>WELCOME</h1>} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/mensajes" element={<FormMsg />} />
					<Route path="/productos" element={<ContainerProducts />} />

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</CartContextProvider>
		</div>
	);
}

export default App;
