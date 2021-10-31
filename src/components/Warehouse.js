import { useState, useEffect } from 'react'
import styles from './Warehouse.module.css';
import { MdEdit, MdCheck, MdDelete} from 'react-icons/md';

const Warehouse = () => {

  const [productList, setProductList] = useState([]); // array als geheel
  const [product, setProduct] = useState(''); // productitem
  const [count, setCount] = useState(''); // aantal productitems
  const [productEditing, setProductEditing] = useState(null); //productitem wijzigen
  const [editingText, setEditingText] = useState('') // tekst wijzigigen 
  const [editingCount, setEditingCount] = useState(''); // aantal wijzigen

	useEffect(() => {
		console.log('count is veranderd')
	}, [count])

  function handleSubmit(e) {
		e.preventDefault();

		const newProduct = {
			id: new Date().getTime(),
			text: product,
			count: count,
		};
		setProductList([...productList, newProduct]);
		setProduct('');
    setCount('');
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
			}
			return item;
		});
		setProductList(updatedProducts);
		setProductEditing(null);
	}

  
	function decrement (id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {setCount((prevcount) => parseInt(prevcount) - 1); console.log(+item.count)}
		return item
	});
	setProductList(updatedProducts);
	setCount('')}
		

  return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
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
							</form>
						) : (
							<div className={styles.itemDisplay}>
								<div>{item.text}</div>
								<div className={styles.countDisplay}>
									<button
										className={styles.countButton}
										type='submit'
										onClick={() => decrement(item.id)
										}
									>
										-
									</button>
									{item.count}
									<input
										value={item.count}
										type='number'
										onChange={(e) => {setCount(e.target.value)}}
									/>
									<button
										className={styles.countButton}
										type='submit'
										onClick={() =>
											setCount(prevcount => parseInt(prevcount) + 1)
										}
									>
										+
									</button>
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
