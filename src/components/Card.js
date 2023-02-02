function Card() {
	return (
		<div className="card">
			<img className="favorite" src="./img/unliked.svg" alt="Unliked" />
			<img width={133} height={112} src="./img/sneakers/pos1.png" alt="sneakers" />
			<p className="card__discription">Мужские Кроссовки Nike Blazer Mid Suede</p>
			<div className="card__price">
				<div>
					<span>Цена:</span>
					<p>12 999 руб.</p>
				</div>
				<button>
					<img width={11} height={11} src="/img/plus.svg" alt="add" />
				</button>
			</div>
		</div>
	)
}

export default Card;
