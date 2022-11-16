import socket from "../socket";
import style from "./Form.module.css";
import { useContext } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

const FormMsg = () => {
	const { msg } = useContext(SocketInfoContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			author: {
				name: e.target.userName.value,
				email: e.target.userEmail.value,
				alias: e.target.userAlias.value,
			},
			text: e.target.userText.value,
		};

		socket.emit("cliente:mensaje", data);
	};

	return (
		<div className={style.container}>
			<div className="mb-5">
				<form onSubmit={handleSubmit}>
					<fieldset enable="true">
						<legend>Mensajeria</legend>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								id="email"
								className="form-control"
								placeholder="... email"
								name="userEmail"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								id="name"
								className="form-control"
								placeholder="... name"
								name="userName"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="alias" className="form-label">
								Alias
							</label>
							<input
								type="text"
								id="alias"
								className="form-control"
								placeholder="... alias user"
								name="userAlias"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="text" className="form-label">
								Text
							</label>
							<input
								type="text"
								id="text"
								className="form-control"
								placeholder="... text"
								name="userText"
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Send
						</button>
					</fieldset>
				</form>
			</div>

			<div>
				<h1>Lista de mensajes</h1>
				<div>
					<ul>
						{msg.map((msg) => (
							<li key={msg._id}>
								{msg.author.name} ~ {msg.createdAt} : {msg.text}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default FormMsg;
