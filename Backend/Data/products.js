const products = [
  {
    "name": "Classic Oxford Button-Down Shirt",
    "description": "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    "price": 39.99,
    "discountPrice": 34.99,
    "countInStock": 20,
    "sku": "OX-SH-001",
    "category": "Top Wear",
    "brand": "Urban Threads",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Red",
      "Blue",
      "Yellow"
    ],
    "collections": "Business Casual",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.5,
    "numReviews": 12,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3363712/pexels-photo-3363712.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Classic Oxford Button-Down Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Classic Oxford Button-Down Shirt detail view"
      }
    ]
  },
  {
    "name": "Slim-Fit Stretch Shirt",
    "description": "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    "price": 29.99,
    "discountPrice": 24.99,
    "countInStock": 35,
    "sku": "SLIM-SH-002",
    "category": "Top Wear",
    "brand": "Modern Fit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy Blue",
      "Burgundy"
    ],
    "collections": "Formal Wear",
    "material": "Cotton Blend",
    "gender": "Men",
    "rating": 4.8,
    "numReviews": 15,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3214813/pexels-photo-3214813.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim-Fit Stretch Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/831993/pexels-photo-831993.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim-Fit Stretch Shirt detail view"
      }
    ]
  },
  {
    "name": "Casual Denim Shirt",
    "description": "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    "price": 49.99,
    "discountPrice": 44.99,
    "countInStock": 15,
    "sku": "CAS-DEN-003",
    "category": "Top Wear",
    "brand": "Street Style",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Light Blue",
      "Dark Wash"
    ],
    "collections": "Casual Wear",
    "material": "Denim",
    "gender": "Men",
    "rating": 4.6,
    "numReviews": 8,
    "images": [
      {
        "url": "https://images.pexels.com/photos/10004175/pexels-photo-10004175.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Casual Denim Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/3805282/pexels-photo-3805282.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Casual Denim Shirt detail view"
      }
    ]
  },
  {
    "name": "Printed Resort Shirt",
    "description": "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    "price": 29.99,
    "discountPrice": 22.99,
    "countInStock": 25,
    "sku": "PRNT-RES-004",
    "category": "Top Wear",
    "brand": "Beach Breeze",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Tropical Print",
      "Navy Palms"
    ],
    "collections": "Vacation Wear",
    "material": "Viscose",
    "gender": "Men",
    "rating": 4.4,
    "numReviews": 10,
    "images": [
      {
        "url": "https://images.pexels.com/photos/20562563/pexels-photo-20562563.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Printed Resort Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/5354069/pexels-photo-5354069.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Printed Resort Shirt detail view"
      }
    ]
  },
  {
    "name": "Slim-Fit Easy-Iron Shirt",
    "description": "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    "price": 34.99,
    "discountPrice": 29.99,
    "countInStock": 30,
    "sku": "SLIM-EIR-005",
    "category": "Top Wear",
    "brand": "Urban Chic",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Gray"
    ],
    "collections": "Business Wear",
    "material": "Cotton",
    "gender": "Men",
    "rating": 5,
    "numReviews": 14,
    "images": [
      {
        "url": "https://images.pexels.com/photos/8499276/pexels-photo-8499276.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim-Fit Easy-Iron Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/3092557/pexels-photo-3092557.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim-Fit Easy-Iron Shirt detail view"
      }
    ]
  },
  {
    "name": "Polo T-Shirt with Ribbed Collar",
    "description": "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    "price": 24.99,
    "discountPrice": 19.99,
    "countInStock": 50,
    "sku": "POLO-TSH-006",
    "category": "Top Wear",
    "brand": "Polo Classics",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Navy",
      "Red"
    ],
    "collections": "Casual Wear",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.3,
    "numReviews": 22,
    "images": [
      {
        "url": "https://images.pexels.com/photos/2096476/pexels-photo-2096476.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Polo T-Shirt with Ribbed Collar front view"
      },
      {
        "url": "https://images.pexels.com/photos/12320922/pexels-photo-12320922.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Polo T-Shirt with Ribbed Collar detail view"
      }
    ]
  },
  {
    "name": "Oversized Graphic T-Shirt",
    "description": "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    "price": 19.99,
    "discountPrice": 15.99,
    "countInStock": 40,
    "sku": "OVS-GRF-007",
    "category": "Top Wear",
    "brand": "Street Vibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray"
    ],
    "collections": "Streetwear",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.6,
    "numReviews": 30,
    "images": [
      {
        "url": "https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Oversized Graphic T-Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/3214813/pexels-photo-3214813.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Oversized Graphic T-Shirt detail view"
      }
    ]
  },
  {
    "name": "Regular-Fit Henley Shirt",
    "description": "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    "price": 22.99,
    "discountPrice": 18.99,
    "countInStock": 35,
    "sku": "REG-HEN-008",
    "category": "Top Wear",
    "brand": "Heritage Wear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Heather Gray",
      "Olive",
      "Black"
    ],
    "collections": "Casual Wear",
    "material": "Cotton Blend",
    "gender": "Men",
    "rating": 4.5,
    "numReviews": 25,
    "images": [
      {
        "url": "https://images.pexels.com/photos/709143/pexels-photo-709143.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Regular-Fit Henley Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/2205644/pexels-photo-2205644.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Regular-Fit Henley Shirt detail view"
      }
    ]
  },
  {
    "name": "Long-Sleeve Thermal Tee",
    "description": "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    "price": 27.99,
    "discountPrice": 22.99,
    "countInStock": 20,
    "sku": "LST-THR-009",
    "category": "Top Wear",
    "brand": "Winter Basics",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "colors": [
      "Charcoal",
      "Dark Green",
      "Navy"
    ],
    "collections": "Winter Essentials",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.4,
    "numReviews": 18,
    "images": [
      {
        "url": "https://images.pexels.com/photos/374079/pexels-photo-374079.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Long-Sleeve Thermal Tee front view"
      },
      {
        "url": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Long-Sleeve Thermal Tee detail view"
      }
    ]
  },
  {
    "name": "V-Neck Classic T-Shirt",
    "description": "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    "price": 14.99,
    "discountPrice": 11.99,
    "countInStock": 60,
    "sku": "VNECK-CLS-010",
    "category": "Top Wear",
    "brand": "Everyday Comfort",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black",
      "Navy"
    ],
    "collections": "Basics",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.7,
    "numReviews": 28,
    "images": [
      {
        "url": "https://images.pexels.com/photos/865773/pexels-photo-865773.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "V-Neck Classic T-Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/8217507/pexels-photo-8217507.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "V-Neck Classic T-Shirt detail view"
      }
    ]
  },
  {
    "name": "Slim Fit Joggers",
    "description": "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 20,
    "sku": "BW-001",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray",
      "Navy"
    ],
    "collections": "Casual Collection",
    "material": "Cotton Blend",
    "gender": "Men",
    "rating": 4.5,
    "numReviews": 12,
    "images": [
      {
        "url": "https://images.pexels.com/photos/15606867/pexels-photo-15606867.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim Fit Joggers front view"
      },
      {
        "url": "https://images.pexels.com/photos/724499/pexels-photo-724499.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim Fit Joggers detail view"
      }
    ]
  },
  {
    "name": "Cargo Joggers",
    "description": "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 15,
    "sku": "BW-002",
    "category": "Bottom Wear",
    "brand": "UrbanStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Black"
    ],
    "collections": "Urban Collection",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.7,
    "numReviews": 20,
    "images": [
      {
        "url": "https://images.pexels.com/photos/17037339/pexels-photo-17037339.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Cargo Joggers front view"
      },
      {
        "url": "https://images.pexels.com/photos/8453051/pexels-photo-8453051.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Cargo Joggers detail view"
      }
    ]
  },
  {
    "name": "Tapered Sweatpants",
    "description": "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 25,
    "sku": "BW-003",
    "category": "Bottom Wear",
    "brand": "ChillZone",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Charcoal",
      "Blue"
    ],
    "collections": "Lounge Collection",
    "material": "Fleece",
    "gender": "Men",
    "rating": 4.3,
    "numReviews": 18,
    "images": [
      {
        "url": "https://images.pexels.com/photos/4571832/pexels-photo-4571832.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Tapered Sweatpants front view"
      },
      {
        "url": "https://images.pexels.com/photos/7672194/pexels-photo-7672194.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Tapered Sweatpants detail view"
      }
    ]
  },
  {
    "name": "Denim Jeans",
    "description": "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    "price": 60,
    "discountPrice": 50,
    "countInStock": 30,
    "sku": "BW-004",
    "category": "Bottom Wear",
    "brand": "DenimCo",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Dark Blue",
      "Light Blue"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Men",
    "rating": 4.6,
    "numReviews": 22,
    "images": [
      {
        "url": "https://images.pexels.com/photos/9775489/pexels-photo-9775489.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Denim Jeans front view"
      },
      {
        "url": "https://images.pexels.com/photos/11478987/pexels-photo-11478987.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Denim Jeans detail view"
      }
    ]
  },
  {
    "name": "Chino Pants",
    "description": "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    "price": 55,
    "discountPrice": 48,
    "countInStock": 40,
    "sku": "BW-005",
    "category": "Bottom Wear",
    "brand": "CasualLook",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Navy",
      "Black"
    ],
    "collections": "Smart Casual Collection",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.8,
    "numReviews": 15,
    "images": [
      {
        "url": "https://images.pexels.com/photos/7764014/pexels-photo-7764014.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Chino Pants front view"
      },
      {
        "url": "https://images.pexels.com/photos/663454/pexels-photo-663454.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Chino Pants detail view"
      }
    ]
  },
  {
    "name": "Track Pants",
    "description": "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 20,
    "sku": "BW-006",
    "category": "Bottom Wear",
    "brand": "SportX",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Red",
      "Blue"
    ],
    "collections": "Activewear Collection",
    "material": "Polyester",
    "gender": "Men",
    "rating": 4.2,
    "numReviews": 17,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3819965/pexels-photo-3819965.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Track Pants front view"
      },
      {
        "url": "https://images.pexels.com/photos/4489707/pexels-photo-4489707.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Track Pants detail view"
      }
    ]
  },
  {
    "name": "Slim Fit Trousers",
    "description": "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    "price": 65,
    "discountPrice": 55,
    "countInStock": 15,
    "sku": "BW-007",
    "category": "Bottom Wear",
    "brand": "ExecutiveStyle",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black"
    ],
    "collections": "Office Wear",
    "material": "Polyester",
    "gender": "Men",
    "rating": 4.7,
    "numReviews": 10,
    "images": [
      {
        "url": "https://images.pexels.com/photos/7672194/pexels-photo-7672194.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim Fit Trousers front view"
      },
      {
        "url": "https://images.pexels.com/photos/724499/pexels-photo-724499.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Slim Fit Trousers detail view"
      }
    ]
  },
  {
    "name": "Cargo Pants",
    "description": "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 25,
    "sku": "BW-008",
    "category": "Bottom Wear",
    "brand": "StreetWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Olive",
      "Brown",
      "Black"
    ],
    "collections": "Street Style Collection",
    "material": "Cotton",
    "gender": "Men",
    "rating": 4.5,
    "numReviews": 13,
    "images": [
      {
        "url": "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Cargo Pants front view"
      },
      {
        "url": "https://images.pexels.com/photos/23947361/pexels-photo-23947361.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Cargo Pants detail view"
      }
    ]
  },
  {
    "name": "Relaxed Fit Sweatpants",
    "description": "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 35,
    "sku": "BW-009",
    "category": "Bottom Wear",
    "brand": "LoungeWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Black",
      "Navy"
    ],
    "collections": "Lounge Collection",
    "material": "Fleece",
    "gender": "Men",
    "rating": 4.3,
    "numReviews": 14,
    "images": [
      {
        "url": "https://images.pexels.com/photos/4571832/pexels-photo-4571832.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Relaxed Fit Sweatpants front view"
      },
      {
        "url": "https://images.pexels.com/photos/15606867/pexels-photo-15606867.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Relaxed Fit Sweatpants detail view"
      }
    ]
  },
  {
    "name": "Formal Dress Pants",
    "description": "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    "price": 70,
    "discountPrice": 60,
    "countInStock": 20,
    "sku": "BW-010",
    "category": "Bottom Wear",
    "brand": "ElegantStyle",
    "sizes": [
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Navy"
    ],
    "collections": "Formal Collection",
    "material": "Polyester",
    "gender": "Men",
    "rating": 4.9,
    "numReviews": 8,
    "images": [
      {
        "url": "https://images.pexels.com/photos/663454/pexels-photo-663454.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Formal Dress Pants front view"
      },
      {
        "url": "https://images.pexels.com/photos/3819965/pexels-photo-3819965.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Formal Dress Pants detail view"
      }
    ]
  },
  {
    "name": "High-Waist Skinny Jeans",
    "description": "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "BW-W-001",
    "category": "Bottom Wear",
    "brand": "DenimStyle",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Dark Blue",
      "Black",
      "Light Blue"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Women",
    "rating": 4.8,
    "numReviews": 20,
    "images": [
      {
        "url": "https://images.pexels.com/photos/8651787/pexels-photo-8651787.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "High-Waist Skinny Jeans front view"
      },
      {
        "url": "https://images.pexels.com/photos/9241070/pexels-photo-9241070.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "High-Waist Skinny Jeans detail view"
      }
    ]
  },
  {
    "name": "Wide-Leg Trousers",
    "description": "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    "price": 60,
    "discountPrice": 55,
    "countInStock": 25,
    "sku": "BW-W-002",
    "category": "Bottom Wear",
    "brand": "ElegantWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Beige",
      "Black",
      "White"
    ],
    "collections": "Formal Collection",
    "material": "Polyester",
    "gender": "Women",
    "rating": 4.7,
    "numReviews": 15,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3049731/pexels-photo-3049731.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Wide-Leg Trousers front view"
      },
      {
        "url": "https://images.pexels.com/photos/13666118/pexels-photo-13666118.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Wide-Leg Trousers detail view"
      }
    ]
  },
  {
    "name": "Stretch Leggings",
    "description": "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
    "price": 25,
    "discountPrice": 20,
    "countInStock": 40,
    "sku": "BW-W-003",
    "category": "Bottom Wear",
    "brand": "ComfyFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "Gray",
      "Navy"
    ],
    "collections": "Activewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "rating": 4.5,
    "numReviews": 30,
    "images": [
      {
        "url": "https://images.pexels.com/photos/7746215/pexels-photo-7746215.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Stretch Leggings front view"
      },
      {
        "url": "https://images.pexels.com/photos/9874909/pexels-photo-9874909.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Stretch Leggings detail view"
      }
    ]
  },
  {
    "name": "Pleated Midi Skirt",
    "description": "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    "price": 55,
    "discountPrice": 50,
    "countInStock": 20,
    "sku": "BW-W-004",
    "category": "Bottom Wear",
    "brand": "ChicStyle",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Pink",
      "Navy",
      "Black"
    ],
    "collections": "Spring Collection",
    "material": "Polyester",
    "gender": "Women",
    "rating": 4.6,
    "numReviews": 18,
    "images": [
      {
        "url": "https://images.pexels.com/photos/19069923/pexels-photo-19069923.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Pleated Midi Skirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/15102167/pexels-photo-15102167.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Pleated Midi Skirt detail view"
      }
    ]
  },
  {
    "name": "Flared Palazzo Pants",
    "description": "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 35,
    "sku": "BW-W-005",
    "category": "Bottom Wear",
    "brand": "BreezyVibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Beige",
      "Light Blue"
    ],
    "collections": "Summer Collection",
    "material": "Linen Blend",
    "gender": "Women",
    "rating": 4.4,
    "numReviews": 22,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3049731/pexels-photo-3049731.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Flared Palazzo Pants front view"
      },
      {
        "url": "https://images.pexels.com/photos/4100717/pexels-photo-4100717.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Flared Palazzo Pants detail view"
      }
    ]
  },
  {
    "name": "High-Rise Joggers",
    "description": "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 30,
    "sku": "BW-W-006",
    "category": "Bottom Wear",
    "brand": "ActiveWear",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "Gray",
      "Pink"
    ],
    "collections": "Loungewear Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "rating": 4.3,
    "numReviews": 25,
    "images": [
      {
        "url": "https://images.pexels.com/photos/7746215/pexels-photo-7746215.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "High-Rise Joggers front view"
      },
      {
        "url": "https://images.pexels.com/photos/11411683/pexels-photo-11411683.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "High-Rise Joggers detail view"
      }
    ]
  },
  {
    "name": "Paperbag Waist Shorts",
    "description": "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 20,
    "sku": "BW-W-007",
    "category": "Bottom Wear",
    "brand": "SunnyStyle",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "White",
      "Khaki",
      "Blue"
    ],
    "collections": "Summer Collection",
    "material": "Cotton",
    "gender": "Women",
    "rating": 4.5,
    "numReviews": 19,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3049731/pexels-photo-3049731.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Paperbag Waist Shorts front view"
      },
      {
        "url": "https://images.pexels.com/photos/9241070/pexels-photo-9241070.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Paperbag Waist Shorts detail view"
      }
    ]
  },
  {
    "name": "Stretch Denim Shorts",
    "description": "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 25,
    "sku": "BW-W-008",
    "category": "Bottom Wear",
    "brand": "DenimStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Blue",
      "Black",
      "White"
    ],
    "collections": "Denim Collection",
    "material": "Denim",
    "gender": "Women",
    "rating": 4.7,
    "numReviews": 15,
    "images": [
      {
        "url": "https://images.pexels.com/photos/12846372/pexels-photo-12846372.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Stretch Denim Shorts front view"
      },
      {
        "url": "https://images.pexels.com/photos/8651787/pexels-photo-8651787.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Stretch Denim Shorts detail view"
      }
    ]
  },
  {
    "name": "Culottes",
    "description": "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "BW-W-009",
    "category": "Bottom Wear",
    "brand": "ChicStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White",
      "Olive"
    ],
    "collections": "Casual Collection",
    "material": "Polyester",
    "gender": "Women",
    "rating": 4.6,
    "numReviews": 23,
    "images": [
      {
        "url": "https://images.pexels.com/photos/9241070/pexels-photo-9241070.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Culottes front view"
      },
      {
        "url": "https://images.pexels.com/photos/13666118/pexels-photo-13666118.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Culottes detail view"
      }
    ]
  },
  {
    "name": "Classic Pleated Trousers",
    "description": "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    "price": 70,
    "discountPrice": 65,
    "countInStock": 25,
    "sku": "BW-W-010",
    "category": "Bottom Wear",
    "brand": "ElegantWear",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Navy",
      "Black",
      "Gray"
    ],
    "collections": "Formal Collection",
    "material": "Wool Blend",
    "gender": "Women",
    "rating": 4.8,
    "numReviews": 20,
    "images": [
      {
        "url": "https://images.pexels.com/photos/11411683/pexels-photo-11411683.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Classic Pleated Trousers front view"
      },
      {
        "url": "https://images.pexels.com/photos/4100717/pexels-photo-4100717.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Classic Pleated Trousers detail view"
      }
    ]
  },
  {
    "name": "Knitted Cropped Top",
    "description": "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    "price": 40,
    "discountPrice": 35,
    "countInStock": 25,
    "sku": "TW-W-001",
    "category": "Top Wear",
    "brand": "ChicKnit",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Beige",
      "White"
    ],
    "collections": "Knits Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "rating": 4.6,
    "numReviews": 15,
    "images": [
      {
        "url": "https://images.pexels.com/photos/8062965/pexels-photo-8062965.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Knitted Cropped Top front view"
      },
      {
        "url": "https://images.pexels.com/photos/12679438/pexels-photo-12679438.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Knitted Cropped Top detail view"
      }
    ]
  },
  {
    "name": "Boho Floral Blouse",
    "description": "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "TW-W-002",
    "category": "Top Wear",
    "brand": "BohoVibes",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Pink"
    ],
    "collections": "Summer Collection",
    "material": "Viscose",
    "gender": "Women",
    "rating": 4.7,
    "numReviews": 20,
    "images": [
      {
        "url": "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Boho Floral Blouse front view"
      },
      {
        "url": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Boho Floral Blouse detail view"
      }
    ]
  },
  {
    "name": "Casual T-Shirt",
    "description": "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    "price": 25,
    "discountPrice": 20,
    "countInStock": 50,
    "sku": "TW-W-003",
    "category": "Top Wear",
    "brand": "ComfyTees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Black",
      "White",
      "Gray"
    ],
    "collections": "Essentials",
    "material": "Cotton",
    "gender": "Women",
    "rating": 4.5,
    "numReviews": 25,
    "images": [
      {
        "url": "https://images.pexels.com/photos/2467394/pexels-photo-2467394.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Casual T-Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/3052276/pexels-photo-3052276.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Casual T-Shirt detail view"
      }
    ]
  },
  {
    "name": "Off-Shoulder Top",
    "description": "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 35,
    "sku": "TW-W-004",
    "category": "Top Wear",
    "brand": "Elegance",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Red",
      "White",
      "Blue"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "rating": 4.7,
    "numReviews": 18,
    "images": [
      {
        "url": "https://images.pexels.com/photos/6476889/pexels-photo-6476889.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Off-Shoulder Top front view"
      },
      {
        "url": "https://images.pexels.com/photos/3760737/pexels-photo-3760737.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Off-Shoulder Top detail view"
      }
    ]
  },
  {
    "name": "Lace-Trimmed Cami Top",
    "description": "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
    "price": 35,
    "discountPrice": 30,
    "countInStock": 40,
    "sku": "TW-W-005",
    "category": "Top Wear",
    "brand": "DelicateWear",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Black",
      "White"
    ],
    "collections": "Lingerie-Inspired",
    "material": "Silk Blend",
    "gender": "Women",
    "rating": 4.8,
    "numReviews": 22,
    "images": [
      {
        "url": "https://images.pexels.com/photos/3052276/pexels-photo-3052276.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Lace-Trimmed Cami Top front view"
      },
      {
        "url": "https://images.pexels.com/photos/2467394/pexels-photo-2467394.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Lace-Trimmed Cami Top detail view"
      }
    ]
  },
  {
    "name": "Graphic Print Tee",
    "description": "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    "price": 30,
    "discountPrice": 25,
    "countInStock": 45,
    "sku": "TW-W-006",
    "category": "Top Wear",
    "brand": "StreetStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Black"
    ],
    "collections": "Urban Collection",
    "material": "Cotton",
    "gender": "Women",
    "rating": 4.6,
    "numReviews": 30,
    "images": [
      {
        "url": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Graphic Print Tee front view"
      },
      {
        "url": "https://images.pexels.com/photos/4668932/pexels-photo-4668932.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Graphic Print Tee detail view"
      }
    ]
  },
  {
    "name": "Ribbed Long-Sleeve Top",
    "description": "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    "price": 55,
    "discountPrice": 50,
    "countInStock": 30,
    "sku": "TW-W-007",
    "category": "Top Wear",
    "brand": "ComfortFit",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "Gray",
      "Pink",
      "Brown"
    ],
    "collections": "Fall Collection",
    "material": "Cotton Blend",
    "gender": "Women",
    "rating": 4.7,
    "numReviews": 26,
    "images": [
      {
        "url": "https://images.pexels.com/photos/6948652/pexels-photo-6948652.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Ribbed Long-Sleeve Top front view"
      },
      {
        "url": "https://images.pexels.com/photos/2180890/pexels-photo-2180890.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Ribbed Long-Sleeve Top detail view"
      }
    ]
  },
  {
    "name": "Ruffle-Sleeve Blouse",
    "description": "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    "price": 45,
    "discountPrice": 40,
    "countInStock": 20,
    "sku": "TW-W-008",
    "category": "Top Wear",
    "brand": "FeminineWear",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "White",
      "Navy",
      "Lavender"
    ],
    "collections": "Summer Collection",
    "material": "Viscose",
    "gender": "Women",
    "rating": 4.5,
    "numReviews": 19,
    "images": [
      {
        "url": "https://images.pexels.com/photos/4668932/pexels-photo-4668932.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Ruffle-Sleeve Blouse front view"
      },
      {
        "url": "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Ruffle-Sleeve Blouse detail view"
      }
    ]
  },
  {
    "name": "Classic Button-Up Shirt",
    "description": "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    "price": 60,
    "discountPrice": 55,
    "countInStock": 25,
    "sku": "TW-W-009",
    "category": "Top Wear",
    "brand": "ClassicStyle",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "White",
      "Light Blue",
      "Black"
    ],
    "collections": "Office Collection",
    "material": "Cotton",
    "gender": "Women",
    "rating": 4.8,
    "numReviews": 25,
    "images": [
      {
        "url": "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Classic Button-Up Shirt front view"
      },
      {
        "url": "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "Classic Button-Up Shirt detail view"
      }
    ]
  },
  {
    "name": "V-Neck Wrap Top",
    "description": "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    "price": 50,
    "discountPrice": 45,
    "countInStock": 30,
    "sku": "TW-W-010",
    "category": "Top Wear",
    "brand": "ChicWrap",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "colors": [
      "Red",
      "Black",
      "White"
    ],
    "collections": "Evening Collection",
    "material": "Polyester",
    "gender": "Women",
    "rating": 4.7,
    "numReviews": 22,
    "images": [
      {
        "url": "https://images.pexels.com/photos/7075436/pexels-photo-7075436.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "V-Neck Wrap Top front view"
      },
      {
        "url": "https://images.pexels.com/photos/1933838/pexels-photo-1933838.jpeg?auto=compress&cs=tinysrgb&w=900",
        "altText": "V-Neck Wrap Top detail view"
      }
    ]
  }
];

module.exports = products;