export const ProductService = () => {
// const products = [
  //   {
  //     id: "1",
  //       serialNumber: "121212",
  //       title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
  //       price: '11.96',
  //       rating: '5',
  //       image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
  //   },
  //   {
  //       id: "2",
  //       serialNumber: "232323",
  //       title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
  //       price: '239.00',
  //       rating: '4',
  //       image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
  //   },
  //   {
  //       id: "3",
  //       serialNumber: "343434",
  //       title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
  //       price: '199.99',
  //       rating: '4',
  //       image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  //   },
  //   {
  //       id: "4",
  //       serialNumber: "454545",
  //       title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
  //       price: '98.96',
  //       rating: '3',
  //       image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
  //   },
  //   {
  //       id: "5",
  //       serialNumber: "565656",
  //       title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
  //       price: '598.92',
  //       rating: '5',
  //       image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
  //   },
  //   {
  //       id: "6",
  //       serialNumber: "676767",
  //       title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
  //       price: '1092.89',
  //       rating: '4',
  //       image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
  //   }
  // ];

  const products = [
    {
      id: '1',
      serialNumber: '121212',
      title: 'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
      price: '11.96',
      rating: '5',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
    },
    {
      id: '2',
      serialNumber: '232323',
      title: 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
      price: '239.00',
      rating: '4',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
    },
    {
      id: '3',
      serialNumber: '343434',
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: '199.99',
      rating: '4',
      image: 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
    }
  ]

  const getServiceProducts = async () => {
    return products
  }

  return {
    getServiceProducts
  }
}
