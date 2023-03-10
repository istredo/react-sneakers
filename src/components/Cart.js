function Cart({ onClose, onRemove, items = [] }) {
	return (
		<div className="overlay">
			<div className="cart">
				<h2 className="">Корзина <img className="remove-icon" onClick={onClose} src="./img/remove.svg" alt="remove" /></h2>

				{
					items.length > 0 ?
						<>
							<div className="cart__items">
								{items.map((item) => (
									<div key={item.id} className="cart__item">
										<img width={70} height={70} className="mini-logo" src={item.imageUrl} alt="Sneakers" />
										<div className="cart__disc">
											<p>{item.title}</p>
											<b>{item.price} руб.</b>
										</div>
										<img onClick={() => onRemove(item.id)} className="remove-icon" src="./img/remove.svg" alt="remove" />
									</div>
								))}
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
						</> :
						<div className="cart__empty">
							<img width={120} height={120} src="./img/box.png" alt="empty cart"></img>
							<h2>Корзина пустая</h2>
							<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
							<button className="GreenBtn"><img src="./img/arrow.svg" alt="arrow" />Вернуться назад</button>
						</div>
				}
			</div>
		</div>
	)
}


export default Cart;
