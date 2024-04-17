export const ProductService = () => {
  const products = [
    {
      id: "1",
        serialNumber: "121212",
        title: "Lean Startup: Constant Innovation Creates Businesses",
        price: '11.96',
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    },
    {
        id: "2",
        serialNumber: "232323",
        title: "Kenwood kMix Stand Mixer for Baking, 5 Litre Glass Bowl",
        price: '239.00',
        image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
    },
    {
        id: "3",
        serialNumber: "343434",
        title: "Samsung 49' Curved LED Gaming Monitor",
        price: '199.99',
        image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
    },
    {
        id: "4",
        serialNumber: "454545",
        title: "Amazon Echo, Smart speaker with Alexa, Charcoal Fabric",
        price: '98.96',
        image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
    },
    {
        id: "5",
        serialNumber: "565656",
        title: "Mac",
        price: '1099.99',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg3hmMnPJoK6VrfH2pZ2czfbSqJ7ksHcLhPQ&usqp=CAU"
    },
    {
        id: "6",
        serialNumber: "676767",
        title: "Iphone 11",
        price: '1092.89',
        image: "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
    }
  ];

  const getServiceProducts = async () => {
    return products
  }

  return {
    getServiceProducts
  }
}
