import Card from './components/Card';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
	return (
		<div className="wrapper">
			<Cart />
			<Header />
			<div className="content">
				<div className="content__top">
					<h1 className="content__title">Все кроссовки</h1>
					<div className="content__search">
						<img src="./img/search.svg" alt="Search" />
						<input placeholder="Поиск ..." />
					</div>
				</div>
				<div className="content__cards">
					<Card />
					<div className="card">
						<img width={133} height={112} src="./img/sneakers/pos2.png" alt="sneakers" />
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
					<div className="card">
						<img width={133} height={112} src="./img/sneakers/pos3.png" alt="sneakers" />
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
					<div className="card">
						<img width={133} height={112} src="./img/sneakers/pos4.png" alt="sneakers" />
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
				</div>
			</div>
		</div>
	);
}

export default App;
