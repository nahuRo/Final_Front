import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { SocketInfoContext } from "../../context/SocketsInfoContext";

const Login = () => {
	const { setUser, user } = useContext(SocketInfoContext);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		fetch("https://finalback-production.up.railway.app/api/user/login", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				window.localStorage.setItem("token", JSON.stringify(data));
				setUser(data);
			});
	};

	if (user) return <Navigate to="/cart" />;

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card mt-4 text-center">
					<div className="card-header">Login</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									type="email"
									name="email"
									placeholder="email"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									name="password"
									placeholder="password"
									className="form-control"
								/>
							</div>
							<button className="btn btn-primary w-100 mt-4">Enviar</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
