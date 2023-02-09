import Card from '../Card';

function Favorites({ items, onAddToFavorite }) {
	return (
		<>
			<div className="content__top">
				<h1 className="content__title">Мои закладки</h1>
			</div>
			<div className="content__cards">
				{items.map((item, index) => (
					<Card
						key={index}
						liked={true}
						onFavorite={onAddToFavorite}
						{...item}
					/>
				))}
			</div>
		</>
	);
}

export default Favorites