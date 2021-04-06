const AddPopularProduct = (props) => {
  const populars = [
    { text: "pain", emoji: "🥖" },
    { text: "lait", emoji: "🥛" },
    { text: "pizza", emoji: "🍕" },
    { text: "salade", emoji: "🥬" },
    { text: "oranges", emoji: "🍊" },
    { text: "gigot", emoji: "🍖" },
    { text: "champagne", emoji: "🍾" },
    { text: "gâteau", emoji: "🍰" },
    { text: "banane", emoji: "🍌" }
  ]
  const { shopping, addToShoppingList } = props
  return (
    <section>
      <h3 className="h5">Avez vous besoin de ?</h3>
      <div className="mb-3 d-flex flex-wrap align-items-center">
        {populars.map((el) => (
          <button
            key={el.text}
            className="btn btn-outline-success me-2 mb-2 d-flex align-items-center" disable={shopping.includes(el.text)} onClick={() => addToShoppingList(el.text)}
          >
            {el.text}
            <span className="fs-1" role="img" aria-hidden="true">
              {el.emoji}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default AddPopularProduct