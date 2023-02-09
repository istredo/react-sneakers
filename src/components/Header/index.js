import styles from './Header.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<header className={styles.header}>
			<Link to="/">
				<div className={styles.headerLeft}>
					<img src="/img/logo.png" alt="logo" />
					<div className={styles.info}>
						<h3>React Sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className={styles.headerRight}>
				<li onClick={props.onClickCart}>
					<img width={18} height={18} src="./img/cart.svg" alt="cart" />
					<span>1205 руб.</span>
				</li>
				<li>
					<Link to="/favorites">
						<img width={18} height={18} src="./img/hearth.svg" alt="liked" />
					</Link>
				</li>
				<li>
					<Link to="/">
						<img width={18} height={18} src="./img/cabinet.svg" alt="cabinet" />
					</Link>
				</li>
			</ul>
		</header >
	)
}

export default Header;
