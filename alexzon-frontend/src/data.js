import img from './images/slimshirt.jpg'

export default {
    products:[{
        _id: 1,
        name: 'Slim Shirt',
        category: 'Shirts',
        image: `${img}`,
        price: 60,
        brand: 'nike',
        rating: 4.5,
        numReviews: 10,
        description: 'lorem ipsum blah blah blah'
    },
    {   
        _id: 2,
        name: 'Fit Shirt',
        category: 'Shirts',
        image: `${img}`,
        price: 45,
        brand: 'nike',
        rating: 4.0,
        numReviews: 10,  
        description: 'lorem ipsum blah blah blah'
    },
    {   
        _id: 3,
        name: 'Big Pant',
        category: 'Pants',
        image: `${img}`,
        price: 100,
        brand: 'nike',
        rating: 4.9,
        numReviews: 10,
        description: 'lorem ipsum blah blah blah'
    }
]
}