const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful ")).catch(err => console.log('err'));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

// customers  schema
const customerSchema = new Schema({
  name: String,
  Orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
});

const Customer = mongoose.model("Customers", customerSchema);
const addCustomer = async () => {
  let cust1 = new Customer({
    name: "nand kumar"
  })
  let order1 = await Order.findOne({ item: "samosha", price: 12 });
  let order2 = await Order.findOne({ item: "cholacte", price: 1 });
  cust1.Orders.push(order1);
  cust1.Orders.push(order2);
  let result = await cust1.save();
  console.log(result);

};
addCustomer();

// delete custmer
const deleteCustomer = async () => {
  let result = await Customer.findOneAndRemove({ name: "nand kumar" });
}
deleteCustomer();

// orders Schema
const orderSchema = new Schema({
  order: String,
  price: Number
});

const Order = mongoose.model("Order", orderSchema);

const addOrders = async () => {
  let res = await Order.insertMany(
    [
      { item: "samosha", price: 12 },
      { item: "cholacte", price: 1 },
      { item: "dal", price: 32 },
      { item: "paneer", price: 42 }
    ]
  )
  console.log(res);
}
addOrders();
// pre middleware
// customerSchema.Pre("findOneAndDelete", async () => {
//   console.log("pre middleware");
// })

// post middleware
CustomerSchema.Post("findOneAndDelete", async () => {
  if (customer.Orders.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.Orders } })
    console.log(res);
  }
}
)

// function
const findCustomer = async () => {
  let result = await Customer.find({}).populate("order");
  console.log(result[0]);
};


const addCust = async () => {
  let newCust = new Customer({
    name: "nand kumar"

  });
  let newOrder = new Order({
    item: "samosha",
    price: 12
  });
  newCust.Orders.push(newOrder);
  await newOrder.save();
  await newCust.save();
  console.log("added new customer");
}
addCust();