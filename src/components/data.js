/* Img Chairs */
import chair1 from '../img/products/chair-1.jpg'
import chair2 from '../img/products/chair-2.jpg'
import chair3 from '../img/products/chair-3.jpg'
/* Img Electronics */
import electronics1 from '../img/products/electronics-1.jpg';
import electronics2 from '../img/products/electronics-2.jpg';
import electronics3 from '../img/products/electronics-3.jpg';
import electronics4 from '../img/products/electronics-4.jpg';
/* Img Furnitures */
import furnitures1 from '../img/products/furniture-1.jpg';
import furnitures2 from '../img/products/furniture-2.jpg';
import furnitures3 from '../img/products/furniture-3.jpg';
/* Img Kitchen */
import kitchen1 from "../img/products/kitchen-1.jpg";
import kitchen2 from "../img/products/kitchen-2.jpg";
import kitchen3 from "../img/products/kitchen-3.jpg";
import kitchen4 from "../img/products/kitchen-4.jpg";
/* Img Lamps */
import lamp1 from "../img/products/lamp-1.jpg";
import lamp2 from "../img/products/lamp-2.jpg";
import lamp3 from "../img/products/lamp-3.jpg";
/* Img Skin Care */
import sc1 from "../img/products/skincare-1.jpg";
import sc2 from "../img/products/skincare-2.jpg";
import sc3 from "../img/products/skincare-3.jpg";
import sc4 from "../img/products/skincare-4.jpg";
import sc5 from "../img/products/skincare-5.jpg";

export const data = [
    {
        id: 1,
        nameProduct: 'Chair Blue',
        description: 'The Chair Blue features a modern and elegant design with a contemporary style that makes it perfect for a variety of spaces, from homes to offices and waiting rooms. It boasts an ergonomic design that ensures comfort and support during long periods of use.',
        priceProduct: 50,
        urlImg: chair1,
        quantity: 1,
        categorie: 'Chairs',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Gesha Mapor'},
            info3:{title:'Material',text:'Fabric/Synthetic Leather'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 7,
        nameProduct: 'Chair Black',
        description: 'Elevate your space with our sleek and sophisticated Chair Black. Designed with a timeless black finish and ergonomic features, this chair seamlessly blends style and comfort. Whether for your home office or workspace, the Chair Black adds a touch of elegance to any environment.',
        priceProduct: 30,
        urlImg: chair2,
        quantity: 1,
        categorie: 'Chairs',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Gesha Mapor'},
            info3:{title:'Material',text:'Fabric/Synthetic Leather'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 8,
        nameProduct: 'Chair Sky',
        description: 'Introducing the Chair Sky, a symbol of serenity and comfort. Embrace relaxation and style with this beautifully designed chair, featuring a calming sky blue hue and ergonomic construction. Whether you´re working, lounging, or simply enjoying a moment of tranquility, the Chair Sky provides the perfect blend of functionality and elegance.',
        priceProduct: 70,
        urlImg: chair3,
        quantity: 1,
        categorie: 'Chairs',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Gesha Mapor'},
            info3:{title:'Material',text:'Fabric/Synthetic Leather'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 2,
        nameProduct: 'USB 8GB',
        description: 'The 8 GB USB Flash Drive is your perfect companion for storing and transporting your important files conveniently and securely. With a storage capacity of 8 gigabytes, this USB drive provides ample space for documents, photos, music, and more, all in a compact and portable device.',
        priceProduct: 20,
        urlImg: electronics1,
        quantity: 1,
        categorie: 'Electronics',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Guz Frony'},
            info3:{title:'Compatibility',text:'Devices with USB 2.0/3.0 port'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 9,
        nameProduct: 'Butikk Phone',
        description: 'Introducing the Butikk Phone, a stylish and feature-rich smartphone designed to meet all your communication and entertainment needs. With its sleek design, vibrant display, and powerful performance, the Butikk Phone is the perfect companion for your daily adventures.',
        priceProduct: 189,
        urlImg: electronics2,
        quantity: 1,
        categorie: 'Electronics',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Guz Frony'},
            info3:{title:'Processor',text:'Octa-core'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 10,
        nameProduct: 'Mac Book Pro Edition Butikk',
        description: 'Experience the pinnacle of performance and innovation with the MacBook Pro Edition Butikk. Designed for professionals and creatives alike, this powerful laptop combines cutting-edge technology with sleek aesthetics to elevate your productivity and creativity to new heights.',
        priceProduct: 230,
        urlImg: electronics3,
        quantity: 1,
        categorie: 'Electronics',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Guz Frony'},
            info3:{title:'Operating System',text:'macOS Monterey'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 11,
        nameProduct: 'Headphones Black XS',
        description: 'Immerse yourself in music like never before with the Headphones Black XS. These sleek and stylish headphones deliver crystal-clear sound quality and superior comfort, making them the perfect choice for music lovers and audiophiles alike. Whether you´re commuting, working out, or relaxing at home, the Headphones Black XS will elevate your listening experience to new heights.',
        priceProduct: 68,
        urlImg: electronics4,
        quantity: 1,
        categorie: 'Electronics',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Guz Frony'},
            info3:{title:'Cable Length',text:'3 feet long'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 3,
        nameProduct: 'Heavenly Large Sofa',
        description: 'Experience ultimate comfort and luxury with our Heavenly Large Sofa. Crafted with meticulous attention to detail and designed for relaxation, this sofa is the perfect centerpiece for any living room or entertainment space. Sink into its plush cushions and unwind after a long day, or gather with loved ones for cozy movie nights and memorable conversations.',
        priceProduct: 108,
        urlImg: furnitures1,
        quantity: 1,
        categorie: 'Furnitures',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Malco Mejia'},
            info3:{title:'Cushion Filling',text:'High-density foam'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    }, {
        id: 12,
        nameProduct: 'Long Black Sofa Bed',
        description: 'Transform your living space with our Long Black Sofa Bed, a versatile and stylish piece of furniture that combines comfort and functionality. This sleek sofa seamlessly transitions from day to night, offering ample seating during the day and easily converting into a cozy bed for overnight guests. Whether you´re hosting gatherings or accommodating visitors, the Long Black Sofa Bed is the perfect solution for modern living.',
        priceProduct: 196,
        urlImg: furnitures2,
        quantity: 1,
        categorie: 'Furnitures',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Malco Mejia'},
            info3:{title:'Upholstery',text:'Black fabric/leatherette'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 13,
        nameProduct: 'Small Wooden Table',
        description: 'Add a touch of rustic charm to your space with our Small Wooden Table. Crafted from high-quality wood and designed for versatility, this compact table is perfect for small living areas, bedrooms, or as a stylish accent piece anywhere in your home. Whether used as a side table, nightstand, or plant stand, its timeless design and sturdy construction make it a practical and elegant addition to any decor.',
        priceProduct: 34,
        urlImg: furnitures3,
        quantity: 1,
        categorie: 'Furnitures',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Malco Mejia'},
            info3:{title:'Material',text:'Wood pine'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 4,
        nameProduct: 'Cutlery And Napkin Box',
        description: 'Keep your dining table organized and stylish with our Cutlery and Napkin Box. This elegant and practical organizer is perfect for storing your cutlery, napkins, and other dining essentials in one convenient place. Whether you´re hosting a dinner party or enjoying a casual meal with family and friends, this versatile box adds a touch of sophistication to any table setting.',
        priceProduct: 12,
        urlImg: kitchen1,
        quantity: 1,
        categorie: 'Kitchen',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Tachad Porchell'},
            info3:{title:'Material',text:'Stainless steel'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 14,
        nameProduct: 'Prima Mixer Duo',
        description: 'Elevate your baking and cooking experience with the Prima Mixer Duo. This versatile kitchen appliance combines the power of a stand mixer and a hand mixer in one convenient package, giving you the flexibility to tackle a wide range of recipes with ease. From whipping cream and kneading dough to mixing batter and beating eggs, the Prima Mixer Duo is your ultimate kitchen companion.',
        priceProduct: 21,
        urlImg: kitchen2,
        quantity: 1,
        categorie: 'Kitchen',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Tachad Porchell'},
            info3:{title:'Color',text:'Black and Grey'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 15,
        nameProduct: 'Spatula',
        description: 'Introducing our Silicone Spatula, the essential tool for every kitchen. Crafted from high-quality food-grade silicone, this versatile utensil is perfect for a wide range of cooking and baking tasks. Whether you´re flipping pancakes, stirring sauces, or scraping bowls clean, the Silicone Spatula is designed to make your kitchen adventures easier and more enjoyable.',
        priceProduct: 11,
        urlImg: kitchen3,
        quantity: 1,
        categorie: 'Kitchen',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Tachad Porchell'},
            info3:{title:'Material',text:' Food-grade silicone'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 16,
        nameProduct: 'Condiment Jar',
        description: 'Upgrade your dining experience with our Glass Condiment Jar Set. Perfect for serving and storing a variety of condiments, sauces, spices, and more, this elegant set adds a touch of sophistication to any table setting. Whether you´re hosting a dinner party or enjoying a casual meal with family and friends, these versatile jars are sure to impress.',
        priceProduct: 8,
        urlImg: kitchen4,
        quantity: 1,
        categorie: 'Kitchen',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Tachad Porchell'},
            info3:{title:'Material',text:'Glass'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 5,
        nameProduct: 'Photo Studio Lamp',
        description: 'Illuminate your creative space with our Photo Studio Lamp, the perfect lighting solution for photographers, videographers, content creators, and artists. Designed to provide consistent and adjustable lighting, this professional-grade lamp enhances your work by illuminating subjects with clarity and precision. Whether you´re capturing portraits, product shots, or videos, the Photo Studio Lamp delivers professional-quality results every time.',
        priceProduct: 56,
        urlImg: lamp1,
        quantity: 1,
        categorie: 'Lamps',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Taylor Yills'},
            info3:{title:'Package Content',text:'Power adapter'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 17,
        nameProduct: 'Ceiling Light',
        description: 'Illuminate your space with our Modern LED Ceiling Light Fixture, a sleek and stylish lighting solution designed to enhance any room in your home. This contemporary ceiling light features energy-efficient LED technology, providing bright and even illumination while reducing energy consumption. With its minimalist design and versatile functionality, its the perfect choice for modern living rooms, kitchens, bedrooms, and more.',
        priceProduct: 27,
        urlImg: lamp2,
        quantity: 1,
        categorie: 'Lamps',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Taylor Yills'},
            info3:{title:'Mounting Type',text:'Flush mount'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 18,
        nameProduct: 'Desk Lamp',
        description: 'Illuminate your workspace with our Adjustable LED Desk Lamp, a versatile and energy-efficient lighting solution designed to enhance productivity and comfort. Featuring adjustable brightness levels and color temperatures, this sleek and modern lamp provides customizable lighting options to suit your needs throughout the day. Whether you are studying, working, or reading, the Adjustable LED Desk Lamp offers optimal lighting for any task.',
        priceProduct: 36,
        urlImg: lamp3,
        quantity: 1,
        categorie: 'Lamps',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Taylor Yills'},
            info3:{title:'Package Content',text:'Power adapter'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 6,
        nameProduct: 'Wart Cream',
        description: 'Say goodbye to stubborn warts with our Advanced Wart Removal Cream. Formulated with powerful ingredients, this targeted treatment penetrates deep into the skin to effectively eliminate warts and restore smooth, healthy skin. Whether you are dealing with common warts, plantar warts, or genital warts, our fast-acting cream provides relief and visible results, giving you the confidence to put your best foot forward.',
        priceProduct: 27,
        urlImg: sc1,
        quantity: 1,
        categorie: 'Skin Care',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Richard Guerrero'},
            info3:{title:'Ingredient',text:'Aloe Vera Extract'},
            info4:{title:'Warranty',text:'30-Day Satisfaction Guarantee'}
        }
    },
    {
        id: 19,
        nameProduct: 'Facial Massager',
        description: 'Experience the ultimate relaxation and skincare with our Rejuvenate Facial Massager. Designed to enhance your beauty routine, this innovative device combines gentle massaging action with advanced skincare technology to promote healthy, glowing skin. Whether you are looking to reduce puffiness, improve circulation, or minimize the appearance of fine lines and wrinkles, the Rejuvenate Facial Massager is your key to a radiant complexion.',
        priceProduct: 54,
        urlImg: sc2,
        quantity: 1,
        categorie: 'Skin Care',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Richard Guerrero'},
            info3:{title:'Package Content',text:'User manual'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 20,
        nameProduct: 'Sunscreen',
        description: 'Protect your skin from the sun is harmful rays with our Sunshield Broad Spectrum Sunscreen SPF 50. Formulated with advanced UVA/UVB filters and antioxidant-rich ingredients, this lightweight sunscreen provides high-level protection while nourishing and hydrating your skin. Whether you are lounging on the beach, hiking in the mountains, or simply running errands, Sunshield Sunscreen is your daily defense against sun damage and premature aging.',
        priceProduct: 38,
        urlImg: sc3,
        quantity: 1,
        categorie: 'Skin Care',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Richard Guerrero'},
            info3:{title:'Package Content',text:'User manual'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 21,
        nameProduct: 'Brush And Mirror',
        description: 'Elevate your grooming routine with our Elegant Brush and Mirror Set. This stylish and practical set includes a high-quality hairbrush and a sleek handheld mirror, perfect for on-the-go touch-ups and styling. Crafted with attention to detail and designed for durability, this set is a must-have accessory for your daily beauty regimen.',
        priceProduct: 31,
        urlImg: sc4,
        quantity: 1,
        categorie: 'Skin Care',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Richard Guerrero'},
            info3:{title:'Material',text:'High-quality plastic and glass'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    },
    {
        id: 22,
        nameProduct: 'Pimple Cream Duo',
        description: 'Banish breakouts and achieve clear, radiant skin with our ClearSkin Pimple Cream Duo. This dynamic duo combines two powerful formulas to target and treat acne, pimples, and blemishes effectively. Formulated with potent ingredients such as salicylic acid and benzoyl peroxide, these creams work synergistically to unclog pores, reduce inflammation, and prevent future breakouts, giving you the confidence to face the world with a clear complexion.',
        priceProduct: 26,
        urlImg: sc5,
        quantity: 1,
        categorie: 'Skin Care',
        infos: {
            info1:{title:'Manufacturer',text:'Butikk'},
            info2:{title:'Designer',text:'Richard Guerrero'},
            info3:{title:'Package Content',text:'User manual'},
            info4:{title:'Warranty',text:'1-year limited warranty'}
        }
    }

]