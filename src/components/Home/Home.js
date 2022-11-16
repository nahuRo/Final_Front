import React from "react";
import { useContext } from "react";
import { SocketInfoContext } from "../../context/SocketsInfoContext";

const Home = () => {
	const { setUser } = useContext(SocketInfoContext);

	setUser(JSON.parse(window.localStorage.getItem("token")));

	return <div>Home</div>;
};

export default Home;
