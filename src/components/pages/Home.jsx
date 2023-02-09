import Card from '../Card';

function Home({
	items,
	searchValue,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onCart,
}) {
	return (
		<>
			<div className="content__top">
				<h1 className="content__title"> {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
				<div className="content__search">
					<img src="./img/search.svg" alt="Search" />
					<input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
					{searchValue && <img onClick={() => setSearchValue('')} className="search__clear" src="./img/remove.svg" alt="remove" />}
				</div>
			</div>
			<div className="content__cards">
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item, index) => (
						<Card
							key={index}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onCart(obj)}
							{...item}
						/>
					))}
			</div>
		</>
	)
};

export default Home