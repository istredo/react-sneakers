import Card from '../Card';

function Home(searchValue, OnSearchInput, setSearchValue, items, onCart) {
	return (
		<div className="content">
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
	);
}

export default Home;