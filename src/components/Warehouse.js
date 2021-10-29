import { useState } from 'react'
import styles from './Warehouse.module.css';

const Warehouse = () => {

  const [productList, setProductList] = useState([]); // array als geheel
  const [product, setProduct] = useState(''); // productitem
  const [count, setCount] = useState(''); // aantal productitems
  const [productEditing, setProductEditing] = useState(null); //productitem wijzigen
  const [editingText, setEditingText] = useState('') // tekst wijzigigen 
  const [editingCount, setEditingCount] = useState(''); // aantal wijzigen

  function handleSubmit(e) {
		e.preventDefault();

		const newProduct = {
			id: new Date().getTime(),
			text: product,
			count: count,
		};
		setProductList([...productList].concat(newProduct));
		setProduct('');
    setCount('');
	}

  return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<label htmlFor='productName' className={styles.label}>
					Nieuw product:
					<input
						className={styles.inputProduct}
						type='text'
						onChange={e => setProduct(e.target.value)}
						value={product}
					/>
				</label>
				<label htmlFor='productCount' className={styles.label}>
					Aantal:
					<input
						className={styles.inputCount}
						type='text'
						onChange={e => setCount(e.target.value)}
						value={count}
					/>
				</label>
				<button className={styles.confirmationNewInput} type='submit'>
					Opname in de lijst
				</button>
			</form>
		</div>
	);
}

export default Warehouse
