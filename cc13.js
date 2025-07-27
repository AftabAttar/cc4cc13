const checkout = {
  items: [],
  total: 0,

  addItem(item) {
   
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price) 
      : Number(item.price);
    
    
    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
      console.log("Invalid price.");
      return;
    }

    this.items.push(item);
    this.total += price;
  },

  getTotal() {
    return Total: $`{parseFloat(this.total).toFixed(2)}`;
  }
};


checkout.addItem({ name: "Coffee Maker", price: "99.95" });  
checkout.addItem({ name: "Milk", price: 3.50 });            
checkout.addItem({ name: "Invalid", price: "abc" });        

console.log(checkout.getTotal());  