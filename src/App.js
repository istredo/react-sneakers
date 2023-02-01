function App() {
	return (
		<div className="wrapper">
			<div className="overlay">
				<div className="cart">
					<h2 className="">Корзина <img className="remove-icon" src="./img/remove.svg" alt="remove" /></h2>
					<div className="cart__items">
						<div className="cart__item">
							<img width={70} height={70} className="mini-logo" src="./img/sneakers/pos2.png" alt="Sneakers" />
							<div className="cart__disc">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img className="remove-icon" src="./img/remove.svg" alt="remove" />
						</div>
						<div className="cart__item">
							<img width={70} height={70} className="mini-logo" src="./img/sneakers/pos4.png" alt="Sneakers" />
							<div className="cart__disc">
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>8 999 руб.</b>
							</div>
							<img className="remove-icon" src="./img/remove.svg" alt="remove" />
						</div>
					</div>
					<div className="calc">
						<ul >
							<li>
								<span>Итого:</span>
								<div></div>
								<b>21 498 руб.</b>
							</li>
							<li>
								<span>Налог 5%:</span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
						<button className="GreenBtn">Оформить заказ <img src="./img/arrow.svg" alt="arrow" /></button>
					</div>
				</div>
			</div>

			<header className="header">
				<div className="headerLeft">
					<img src="/img/logo.png" />
					<div className="headerInfo">
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className="headerRight">
					<li>
						<img width={18} height={18} src="./img/cart.svg"></img>
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={18} height={18} src="./img/hearth.svg"></img>
					</li>
					<li>
						<img width={18} height={18} src="./img/cabinet.svg"></img>
					</li>
				</ul>
			</header>
			<div className="content">
				<div className="content__top">
					<h1 className="content__title">Все кроссовки</h1>
					<div className="content__search">
						<img src="./img/search.svg" alt="Search" />
						<input placeholder="Поиск ..." />
					</div>
				</div>
				<div className="content__cards">
					<div className="card">
						<img className="favorite" src="./img/unliked.svg" alt="Unliked" />
						<img width={133} height={112} src="./img/sneakers/pos1.png"></img>
						<p className="card__discription">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="card__price">
							<div>
								<span>Цена:</span>
								<p>12 999 руб.</p>
							</div>
							<button>
								<img width={11} height={11} src="/img/plus.svg" />
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="./img/sneakers/pos2.png"></img>
						<p className="card__discription">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="card__price">
							<div>
								<span>Цена:</span>
								<p>12 999 руб.</p>
							</div>
							<button>
								<img width={11} height={11} src="/img/plus.svg" />
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="./img/sneakers/pos3.png"></img>
						<p className="card__discription">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="card__price">
							<div>
								<span>Цена:</span>
								<p>12 999 руб.</p>
							</div>
							<button>
								<img width={11} height={11} src="/img/plus.svg" />
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="./img/sneakers/pos4.png"></img>
						<p className="card__discription">Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className="card__price">
							<div>
								<span>Цена:</span>
								<p>12 999 руб.</p>
							</div>
							<button>
								<img width={11} height={11} src="/img/plus.svg" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
