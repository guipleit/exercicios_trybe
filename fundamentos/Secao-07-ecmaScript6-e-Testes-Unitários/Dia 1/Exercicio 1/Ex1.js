// //Parte II - Pedido de clientes
// Imagine que você tenha ficado responsável por cuidar do sistema de entrega de um restaurante e que precisasse enviar mensagens para os clientes com a informação da compra. Para isso, use o seguinte código:

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.



const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};




const customerInfo = (order) => {
  const client = order.name
  const employee = order.order.delivery.deliveryPerson
  const phone = order.phoneNumber
  const adress = order.address.street
  const complement = order.address.apartment
  const houseNumber = order.address.number
// 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
  return `Olá ${employee}, entrega para: ${client}, Telefone: ${phone}, R. ${adress}, Nº ${houseNumber}, AP: ${complement}`
};

customerInfo(order);
console.log(customerInfo(order));

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.

const orderModifier = (order) => {
    const newClient = order.name = 'Luiz Silva'
    const newTotal = order.payment.total = 'R$ 50,00.'
    const pizza = Object.keys(order.order.pizza)
    const drink = order.order.drinks.coke.type
    return `Olá ${newClient}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é ${newTotal}`
};

orderModifier(order);
console.log(orderModifier(order))