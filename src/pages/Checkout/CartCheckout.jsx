const CartCheckout = ({ cart }) => {
  return (
    <main>
      <table>
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!error && !isLoading && cart && (cart.products || []).map((item) => (
            <tr className="cartTR" key={item.productId}>
              {/* <td>{item.productId}</td> */}

              {/* <td>
                <input
                  type="checkbox"
                  id="" />
              </td> */}

              <td>
                {data.find((product) =>
                  (product.id === item.productId))?.title || 'Unknown Product'}
              </td>
              <td>
                {data.find((product) =>
                  (product.id === item.productId))?.price || 0}
              </td>

              <td>
                <input 
                  type="number" 
                  value={itemQuantities[item.productId] || item.quantity}
                  onChange={(event) => handleQuantityChange(item.productId, event)}
                />
              </td>

              <td>{data.find((product) => product.id === item.productId).price * (itemQuantities[item.productId] || item.quantity)}</td>

              {handleGrandTotal(item.productId, item.quantity)}

              <td>
                <button
                  onClick={() => handleDeleteItem(item.productId)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default CartCheckout
