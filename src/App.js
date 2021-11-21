/**
 * App.js
 *
 * Application to display and saerch for gifs
 *
 * Author:  Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 * Created: February 2020
 *
 */

import axios from "axios";
import GifList from "./Components/GifList";
import React, { Component } from "react";
import SearchForm from "./Components/SearchForm";

import "./App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
			loading: true,
		};
	}

	componentDidMount() {
		axios
			.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
			.then((response) => {
				this.setState({
					gifs: response.data.data,
					loading: false,
				});
			})
			.catch((error) => {
				console.log("Error fetching and parsing data", error);
			});
	}

	performSearch = (query) => {
		axios
			.get(
				`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`
			)
			.then((response) => {
				this.setState({
					gifs: response.data.data,
				});
			})
			.catch((error) => {
				console.log("Error fetching and parsing data", error);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">GifSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loading ? (
						<p>Loading...</p>
					) : (
						<GifList data={this.state.gifs} />
					)}
				</div>
			</div>
		);
	}
}
