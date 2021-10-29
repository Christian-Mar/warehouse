import { useState } from 'react'
import styles from './Warehouse.module.css';

const Warehouse = () => {

  const [productList, setProductList] = useState([]); // array als geheel
  const [product, setProduct] = useState(''); // productitem
  const [count, setCount] = useState(''); // aantal productitems
  const [productEditing, setProductEditing] = useState(null); //productitem wijzigen
  const [editingText, setEditingText] = useState('') // tekst wijzigigen 
  const [editingCount, setEditingCount] = useState(''); // aantal wijzigen

  return (
		<div className={styles.container}>
			<form>
				<label htmlFor='' className={styles.label}>
					Product: <input />
				</label>
				<label htmlFor='' className={styles.label}>
					Aantal: <input />
				</label>
			</form>
		</div>
	);
}

export default Warehouse
