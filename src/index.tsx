import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: "Ganho",
					type: "deposit",
					category: "categoria",
					amount: 200,
					createdAt: new Date("2022-09-15 09:01:44"),
				},
				{
					id: 2,
					title: "Despesa",
					type: "withdraw",
					category: "categoria",
					amount: 100,
					createdAt: new Date("2022-09-15 11:01:44"),
				},
			],
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});
		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create("transaction", data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
