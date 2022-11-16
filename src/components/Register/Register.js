import { useState } from "react";

import { Navigate } from "react-router-dom";
const Register = () => {
	const [registered, setRegistered] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userDates = {
			email: e.target.email.value,
			password: e.target.password.value,
			name: e.target.name.value,
			address: e.target.address.value,
			age: e.target.age.value,
			phone: e.target.phone.value,
		};
		const data = await fetch(
			"https://finalback-production.up.railway.app/api/user/register",
			{
				method: "POST",
				body: JSON.stringify(userDates),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const response = await data.json();

		setRegistered(response.email);
	};

	if (registered) return <Navigate to="/login" />;

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card mt-4 text-center">
					<div className="card-header">Register</div>
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
							<div className="form-group">
								<input
									type="text"
									name="name"
									placeholder="User Name"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="address"
									placeholder="User Address"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<input
									type="number"
									name="age"
									placeholder="User Age"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<input
									type="number"
									name="phone"
									placeholder="User Phone"
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

export default Register;
