function Cart() {
	return (
		<div style={{ display: 'none' }} className="overlay">
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
	)
}

export default Cart;
