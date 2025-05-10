export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items in your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items that in your list and you are already packed
        ${numPacked} items with total 
        ${percentage}%`}
      </em>
    </div>
  );
}
