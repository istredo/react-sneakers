import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/pages/Home'
import Test from './components/pages/Test'

function App() {
	const [items, setItems] = React.useState([])
	// const [likes, setLikes] = React.useState([])
	const [cartOn, setCartOn] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartItems, setCartItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://63e0e5af65b57fe6064bf031.mockapi.io/items')
			.then((res) => res.json())
			.then((json) => setItems(json));
		axios.get('https://63e0e5af65b57fe6064bf031.mockapi.io/cart').then((res) => {
			setCartItems(res.data);
		})
	}, []);


	const onCart = (item) => {
		axios.post('https://63e0e5af65b57fe6064bf031.mockapi.io/cart', item)
		setCartItems(prev => [...prev, item]);
	};

	const onRemoveCart = (id) => {
		axios.delete(`https://63e0e5af65b57fe6064bf031.mockapi.io/cart/${id}`)
		console.log(id)
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	}

	// const onFavorites = (item) => {
	// 	axios.post('https://63e227fb3e12b1937638ffc2.mockapi.io/favorites', item)
	// 	setLikes(prev => [...prev, item]);
	// };

	const OnSearchInput = (event) => {
		setSearchValue(event.target.value)
	}




	return (
		<div className="wrapper">
			{cartOn && <Cart items={cartItems} onClose={() => setCartOn(false)} onRemove={onRemoveCart} />}
			<Header onClickCart={() => setCartOn(true)} />
			<div className="content">
				<Routes>
					<Route path="/" element={<Test />} />
				</Routes>
				<div className="content__top">
					<h1 className="content__title"> {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
					<div className="content__search">
						<img src="./img/search.svg" alt="Search" />
						<input onChange={OnSearchInput} value={searchValue} placeholder="Поиск ..." />
						{searchValue && <img onClick={() => setSearchValue('')} className="search__clear" src="./img/remove.svg" alt="remove" />}
					</div>
				</div>
				<div className="content__cards">
					{items
						.filter((obj) => obj.title.toLowerCase().includes(searchValue))
						.map((obj, index) => (
							<Card
								key={index}
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
								addToCart={(item) => onCart(item)}
								addToFavorite={() => console.log('Лайкнули')} />
						))}
				</div>
			</div>
		</div >
	);
}

export default App;

