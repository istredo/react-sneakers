function Header() {
	return (
		<header className="header">
			<div className="headerLeft">
				<img src="/img/logo.png" alt="logo" />
				<div className="headerInfo">
					<h3>React Sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="headerRight">
				<li>
					<img width={18} height={18} src="./img/cart.svg" alt="cart" />
					<span>1205 руб.</span>
				</li>
				<li>
					<img width={18} height={18} src="./img/hearth.svg" alt="liked" />
				</li>
				<li>
					<img width={18} height={18} src="./img/cabinet.svg" alt="cabinet" />
				</li>
			</ul>
		</header>
	)
}

export default Header;
