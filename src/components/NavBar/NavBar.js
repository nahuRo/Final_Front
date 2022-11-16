import { Link } from "react-router-dom";

import { useContext } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

const NavBar = () => {
	const { user, setUser } = useContext(SocketInfoContext);

	const handleLogOuT = () => {
		window.localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Home
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							{user ? (
								<>
									<li className="nav-item">
										<Link to="/mensajes" className="nav-link active">
											Mensajes
										</Link>
									</li>

									<li className="nav-item">
										<Link to="/productos" className="nav-link active">
											Productos
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/cart" className="nav-link active">
											Cart
										</Link>
									</li>
									<li className="nav-item">
										<Link
											onClick={handleLogOuT}
											to="/login"
											className="nav-link active"
										>
											LogOut
										</Link>
									</li>
								</>
							) : (
								<>
									<li className="nav-item">
										<Link to="/login" className="nav-link active">
											Login
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/register" className="nav-link active">
											Register
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
