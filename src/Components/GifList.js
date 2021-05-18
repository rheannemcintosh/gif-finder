/**
 * GifList.js
 * 
 * Component to display a list of all gifs or display no gifs
 * 
 * Author:  Rheanne McIntosh <rheanne.mcintosh@outlook.com>
 * Created: February 2020
 * 
 */

import Gif from "./Gif";
import NoGifs from "./NoGifs";
import React from "react";

const GifList = (props) => {
	const results = props.data;
	let gifs;
	if (results.length > 0) {
		gifs = results.map((gif) => (
			<Gif url={gif.images.fixed_height.url} key={gif.id} />
		));
	} else {
		gifs = <NoGifs />;
	}

	return <ul className="gif-list">{gifs}</ul>;
};

export default GifList;
