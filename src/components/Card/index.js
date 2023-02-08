import styles from './Card.module.scss';
import React from 'react';

function Card({ imageUrl, title, price, addToFavorite, addToCart }) {
	const [isAdded, setIsAdded] = React.useState(false);

	const handleAdd = () => {
		addToCart({ imageUrl, title, price });
		setIsAdded(!isAdded);
	}

	const [isLiked, setIsLiked] = React.useState(false);

	const handleLike = () => {
		addToFavorite({ imageUrl, title, price });
		setIsLiked(!isLiked);
	}

	return (
		<div className={styles.card}>
			<img className={styles.favorite} onClick={handleLike} src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
			<img width={133} height={112} src={imageUrl} alt="sneakers" />
			<p className={styles.discription}>{title}</p>
			<div className={styles.price}>
				<div>
					<span>Цена:</span>
					<p>{price} руб.</p>
				</div>
				<img width={32} height={32} src={isAdded ? "/img/cart-checked.svg" : "/img/plus.svg"} alt="add" onClick={handleAdd} />
			</div>
		</div >
	)
}
export default Card;