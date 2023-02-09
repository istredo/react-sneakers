import styles from './Card.module.scss';
import React from 'react';

function Card({ id, title, imageUrl, price, onFavorite, onPlus, liked = false }) {
	const [isAdded, setIsAdded] = React.useState(false);
	const [isFavorite, setIsFavorite] = React.useState(liked);

	const onClickPlus = () => {
		onPlus({ id, title, imageUrl, price });
		setIsAdded(!isAdded);
	};

	const onClickFavorite = () => {
		onFavorite({ id, title, imageUrl, price });
		setIsFavorite(!isFavorite);
	};

	return (
		<div className={styles.card}>
			<img className={styles.favorite} onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
			<img width={133} height={112} src={imageUrl} alt="sneakers" />
			<p className={styles.discription}>{title}</p>
			<div className={styles.price}>
				<div>
					<span>Цена:</span>
					<p>{price} руб.</p>
				</div>
				<img width={32} height={32} src={isAdded ? "/img/cart-checked.svg" : "/img/plus.svg"} alt="add" onClick={onClickPlus} />
			</div>
		</div >
	)
}
export default Card;