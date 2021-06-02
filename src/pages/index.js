import Head from 'next/head';
import React, { useState } from "react";
import setProducts from "../store/actions/set-products";
import featchData from "../helpers/featch_data";
import { initializeStore } from '../store/';


const Home = () => {


	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	)
}

export async function getServerSideProps() {//*иницыализация stor'а на сервере
	const reduxStore = initializeStore()
	const { dispatch } = reduxStore

	const data = await featchData()//*получение списка продуктов
	dispatch(setProducts(data))//*вызов action на стороне сервера

	return { props: { initialReduxState: reduxStore.getState() } }
}


export default Home
