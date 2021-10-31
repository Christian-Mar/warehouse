### useState

Hoofdzakelijk een oefening op useState

### Ervaren problemen

Via button geprobeerd om de *setCount* op een item of onderdeel uit te voeren -> lukte niet, gezien *count* reeds toegewezen was aan input-field voor count. 

```js
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
```

```js
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
```