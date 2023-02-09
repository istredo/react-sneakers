import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites';

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setCartItems] = React.useState([]);
	const [favorites, setFavorites] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState('');
	const [cartOpened, setCartOpened] = React.useState(false);


	React.useEffect(() => {
		axios.get('https://63e0e5af65b57fe6064bf031.mockapi.io/items').then((res) => {
			setItems(res.data);
		});
		axios.get('https://63e0e5af65b57fe6064bf031.mockapi.io/cart').then((res) => {
			setCartItems(res.data);
		});
		axios.get('https://63e227fb3e12b1937638ffc2.mockapi.io/favorites').then((res) => {
			setFavorites(res.data);
		});
	}, []);


	const onCart = (obj) => {
		axios.post('https://63e0e5af65b57fe6064bf031.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj]);
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://63e0e5af65b57fe6064bf031.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	}

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://63e227fb3e12b1937638ffc2.mockapi.io/favorites/${obj.id}`);
			} else {
				const { data } = await axios.post('https://63e227fb3e12b1937638ffc2.mockapi.io/favorites', obj);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в любимые');
		}
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};




	return (
		<div className="wrapper">
			{cartOpened &&
				<Cart items={cartItems} onClose={() => setCartOpened(false)
				} onRemove={onRemoveItem} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className="content">
				<Routes>
					<Route path="favorites" element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} />
					<Route path="/" exact element={<Home
						items={items}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						onChangeSearchInput={onChangeSearchInput}
						onAddToFavorite={onAddToFavorite}
						onCart={onCart}
					/>} />
				</Routes>

			</div>
		</div >
	);
}

export default App;

