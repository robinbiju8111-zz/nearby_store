import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name: 'Robin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Anvin',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products: [
        {
            
            name: 'Product1',
            category: 'veg',
            image: '/assets/images/products/coconut.jpg',
            price: '20',
            brand: 'brandName',
            rating: 2,
            numreviews: 8,
            stock: 5,
            description: 'High quality Product',
        },
        {
           
            name: 'Product2',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '32',
            brand: 'brand',
            rating: 3,
            numreviews: 6,
            stock: 5,
            description: 'High quality Product2',
        },
        {
            
            name: 'Product3',
            category: 'veg',
            image: '/assets/images/products/caps.jpg',
            price: '10',
            brand: 'brand',
            rating: 2.4,
            numreviews: 3,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product4',
            category: 'veg',
            image: '/assets/images/products/coli.jpg',
            price: '52',
            brand: 'brand',
            rating: 2.9,
            numreviews: 4,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product5',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '50',
            brand: 'brand',
            rating: 3.6,
            numreviews: 5,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product6',
            category: 'veg',
            image: '/assets/images/products/coconut.jpg',
            price: '20',
            brand: 'brandName',
            rating: 2,
            numreviews: 8,
            stock: 10,
            description: 'High quality Product',
        },
        {
            
            name: 'Product7',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '32',
            brand: 'brand',
            rating: 3,
            numreviews: 6,
            stock: 10,
            description: 'High quality Product',
        },
        {
           
            name: 'Product8',
            category: 'veg',
            image: '/assets/images/products/caps.jpg',
            price: '10',
            brand: 'brand',
            rating: 2.4,
            numreviews: 3,
            stock: 30,
            description: 'High quality Product',
        },
        {
            
            name: 'Product9',
            category: 'veg',
            image: '/assets/images/products/coli.jpg',
            price: '52',
            brand: 'brand',
            rating: 2.9,
            numreviews: 4,
            stock: 10,
            description: 'High quality Product',
        },
        {
            
            name: 'Product10',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '50',
            brand: 'brand',
            rating: 3.6,
            numreviews: 5,
            stock: 20,
            description: 'High quality Product',
        },
        {
            
            name: 'Product11',
            category: 'veg',
            image: '/assets/images/products/coconut.jpg',
            price: '20',
            brand: 'brandName',
            rating: 2,
            numreviews: 8,
            stock: 6,
            description: 'High quality Product',
        },
        {
            
            name: 'Product12',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '3212',
            brand: 'brand',
            rating: 3,
            numreviews: 6,
            stock: 8,
            description: 'High quality Product',
        },
        {
            
            name: 'Product13',
            category: 'veg',
            image: '/assets/images/products/caps.jpg',
            price: '10',
            brand: 'brand',
            rating: 2.4,
            numreviews: 3,
            stock: 9,
            description: 'High quality Product',
        },
        {
            
            name: 'Product14',
            category: 'veg',
            image: '/assets/images/products/coli.jpg',
            price: '52',
            brand: 'brand',
            rating: 2.9,
            numreviews: 4,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product15',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '50',
            brand: 'brand',
            rating: 3.6,
            numreviews: 5,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product16',
            category: 'veg',
            image: '/assets/images/products/coconut.jpg',
            price: '20',
            brand: 'brandName',
            rating: 2,
            numreviews: 8,
            stock: 0,
            description: 'High quality Product',
        },
        {
           
            name: 'Product17',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '32',
            brand: 'brand',
            rating: 3,
            numreviews: 6,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product18',
            category: 'veg',
            image: '/assets/images/products/caps.jpg',
            price: '10',
            brand: 'brand',
            rating: 2.4,
            numreviews: 3,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product19',
            category: 'veg',
            image: '/assets/images/products/coli.jpg',
            price: '52',
            brand: 'brand',
            rating: 2.9,
            numreviews: 4,
            stock: 0,
            description: 'High quality Product',
        },
        {
            
            name: 'Product20',
            category: 'veg',
            image: '/assets/images/products/tomoto.jpg',
            price: '50',
            brand: 'brand',
            rating: 3.6,
            numreviews: 5,
            stock: 8,
            description: 'High quality Product',
        },
    ],
};

export default data;