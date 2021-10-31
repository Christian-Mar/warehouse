import { useState } from 'react'
import styles from './Warehouse.module.css';
import { MdEdit, MdCheck, MdDelete} from 'react-icons/md';

const Warehouse = () => {

  const [productList, setProductList] = useState([]); // array als geheel
  const [product, setProduct] = useState(''); // productitem
  const [count, setCount] = useState(0); // aantal productitems
	const [unit, setUnit] = useState(''); // eenheid
  const [productEditing, setProductEditing] = useState(null); //productitem veranderen
  const [editingText, setEditingText] = useState('') // tekst veranderen
  const [editingCount, setEditingCount] = useState(''); // aantal veranderen
	const [editingUnit, setEditingUnit] = useState(''); // eenheid veranderen

	function handleSubmit(e) {
		e.preventDefault();

		const newProduct = {
			id: new Date().getTime(),
			text: product,
			count: count,
			unit: unit
		};
		setProductList([...productList, newProduct]);
		setProduct('');
    setCount('');
		setUnit('');
	}

  function deleteProduct(id) {
		let updatedProducts = [...productList].filter(item => item.id !== id);
		setProductList(updatedProducts);
	}

  function submitEdits (id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {
				item.text = editingText;
        item.count = editingCount;
				item.unit = editingUnit;
			}
			return item;
		});
		setProductList(updatedProducts);
		setProductEditing(null);
	}

  
	function decrement (id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {item.count--}
		return item
	});
	setProductList(updatedProducts);
	}

	function increment(id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {
				item.count++;
			}
			return item;
		});
		setProductList(updatedProducts);
	}
		

  return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor='productName' className={styles.label}>
					Nieuw product:
					<input
						className={styles.inputProduct}
						type='text'
						name='productName'
						onChange={e => setProduct(e.target.value)}
						value={product}
						required='required'
					/>
				</label>
				<label htmlFor='productCount' className={styles.label}>
					Aantal:
					<input
						className={styles.inputCount}
						type='number'
						name='productCount'
						onChange={e => setCount(e.target.value)}
						value={count}
						required='required'
					/>
					<select
						className={styles.inputUnit}
						type='text'
						name='unit'
						value={unit}
						onChange={e => setUnit(e.target.value)}
						required='required'
					>
						<option disabled value=''>
							Kies eenheid
						</option>
						<option value='kg'>kg</option>
						<option value='stuks'>stuks</option>
						<option value='dozen'>dozen</option>
						<option value='palletten'>palletten</option>
					</select>
				</label>
				<button className={styles.confirmationNewInput} type='submit'>
					Opname in de lijst
				</button>
			</form>

			{productList.map(item => (
				<div key={item.id} className={styles.item}>
					<div className={styles.itemText}>
						{item.id === productEditing ? (
							<form onSubmit={handleSubmit} className={styles.itemTextInput}>
								<input
									className={styles.itemInputText}
									type='text'
									onChange={e => setEditingText(e.target.value)}
									placeholder='product'
									required='required'
								/>
								<input
									className={styles.itemInputCount}
									type='number'
									onChange={e => setEditingCount(e.target.value)}
									placeholder='aantal'
									required='required'
								/>
								<select
									className={styles.itemInputUnit}
									type='text'
									name='unit'
									onChange={e => setEditingUnit(e.target.value)}
									required='required'
								>
									<option disabled value=''>
										Kies eenheid
									</option>
									<option value='kg'>kg</option>
									<option value='stuks'>stuks</option>
									<option value='dozen'>dozen</option>
									<option value='palletten'>palletten</option>
								</select>
							</form>
						) : (
							<div className={styles.itemDisplay}>
								<div className={styles.textDisplay}>{item.text}</div>
								<div>
									<div className={styles.countDisplay}>
										<button
											className={styles.countButton}
											type='submit'
											onClick={() => decrement(item.id)}
										>
											-
										</button>
										<div className={styles.count}>{item.count}</div>

										<button
											className={styles.countButton}
											type='submit'
											onClick={() => increment(item.id)}
										>
											+
										</button>
										<div className={styles.unit}>{item.unit}</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<div className={styles.actions}>
						{item.id === productEditing ? (
							<button
								className={styles.itemButton}
								onClick={() => submitEdits(item.id)}
							>
								Bevestig&nbsp;&nbsp; <MdCheck />
							</button>
						) : (
							<button
								className={styles.itemButton}
								onClick={() => setProductEditing(item.id)}
							>
								Wijzig&nbsp;&nbsp; <MdEdit />
							</button>
						)}

						<button
							className={styles.itemButton}
							onClick={() => deleteProduct(item.id)}
						>
							Verwijder&nbsp;&nbsp; <MdDelete />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Warehouse;
