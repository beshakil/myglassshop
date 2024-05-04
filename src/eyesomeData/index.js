import { v4 as uuidv4 } from "uuid";
import sportsImg from '../media/sports.webp'
import visionImg from '../media/vision.webp'
import sunglassImg from '../media/sunglass.webp'

export const categoriesList = [
  {
    id: uuidv4(),
    category: "SPORTS",
    displayText: "Sports",
    imageUrl: sportsImg
  },

  {
    id: uuidv4(),
    category: "VISION",
    displayText: "Vision",
    imageUrl: visionImg,
  },
  {
    id: uuidv4(),
    category: "SUNGLASSES",
    displayText: "Sunglasses",
    imageUrl: sunglassImg,
  },
];

export const productsList = [
  {
    id: "3d7e9c33-0080-4bd2-b2bf-56552da31e35",
    qty: 0,
    name: "Ardor Avaitor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brand: "Ray-Ban",
    category: "Sports",
    gender: "Men",
    weight: "200g",
    quantity: 10,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954064/Eyesome/sports1.f986df729a29a685f835_ytdbfc.png",
    rating: 4.5,
    price: 1999,
    newPrice: 1899,
    trending: true,
  },
  {
    id: "887cdd99-1503-4527-aef4-88c521126a47",
    qty: 0,
    name: "Caper Active",
    description:
      "Pellentesque ac tortor sed ipsum feugiat condimentum.Pellentesque ac tortor sed ipsum feugiat condimentum.",
    brand: "Persol",
    category: "Sports",
    gender: "Men",
    weight: "100g",
    quantity: 5,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954112/Eyesome/sports2.8f34b9326f093dc9cf0d_a8nxri.png",
    rating: 4.8,
    price: 1299,
    newPrice: 1199,
    trending: true,
  },
  {
    id: "dc2b2495-eb6c-4889-a6f7-3c8853a01ba2",
    qty: 0,
    name: "Alder Street",
    description:
      "Integer et nunc in turpis maximus facilisis ac ac elit.Integer et nunc in turpis maximus facilisis ac ac elit.",
    brand: "Kate Spade",
    category: "Sports",
    gender: "Unisex",
    weight: "750g",
    quantity: 15,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954152/Eyesome/sports3.88be7fae1effd927c7cd_dtuovm.png",
    rating: 4.7,
    price: 2999,
    newPrice: 2000,
    trending: true,
  },
  {
    id: "fd25068a-9647-45ba-b44d-c8af1523148a",
    qty: 0,
    name: "Corral Round",
    description:
      "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    brand: "Carrera",
    category: "Sports",
    gender: "Unisex",
    weight: "300g",
    quantity: 8,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424333/Eyesome/sports4.5ad4095e77c6175978f9_ivfmjv.png",
    rating: 3.8,
    price: 2499,
    newPrice: 2300,
  },
  {
    id: "95cd381c-32cf-46e5-8a75-05d30a421d6b",
    qty: 0,
    name: "Hyperclax Active",
    description:
      "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    brand: "Oakley",
    category: "Sports",
    gender: "Women",
    weight: "900g",
    quantity: 3,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424391/Eyesome/sports6.eb4430d4a7f77b7b382c_qldpzi.png",
    rating: 3.5,
    price: 3999,
    newPrice: 3500,
  },
  {
    id: "6033723f-a8db-4ad8-bfda-d191778141aa",
    qty: 0,
    name: "Rose Gold Chase",
    description:
      "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
    brand: "Ray-Ban",
    category: "Vision",
    gender: "Women",
    weight: "120g",
    quantity: 9,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424509/Eyesome/vision2.611b59463c103d118f9a_kygv5m.png",
    rating: 4.3,
    price: 2999,
    newPrice: 2599,
  },
  {
    id: "ac072970-8dac-42fe-8c31-a8fa6fd4b64a",
    qty: 0,
    name: "Full Rim Airflex",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Vision",
    gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424676/Eyesome/vision6.c4aa8c09c08cf6e5c4ac_ip3tt2.png",
    rating: 4.8,
    price: 4999,
    newPrice: 3999,
  },
  {
    id: "8ad38385-1211-4192-8108-db851b4e9434",
    qty: 0,
    name: "Mercury Rounded Red",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Vision",
    gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424794/Eyesome/vision9.a438b28b85649a305924_asx3ic.png",
    rating: 4.8,
    price: 4999,
    newPrice: 4300,
  },
  {
    id: "c6dcde20-2e9f-470c-b76c-38b01ab7e16e",
    qty: 0,
    name: "Candyfloss-302",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brand: "Ray-Ban",
    category: "Sunglasses",
    gender: "Men",
    weight: "200g",
    quantity: 10,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424907/Eyesome/sun3.4d937ecee4a510684712_gtqccx.png",
    rating: 4.5,
    price: 1999,
    newPrice: 1899,
  },
  {
    id: "c76b3840-47d2-4d38-b465-af68e2af9dcd",
    qty: 0,
    name: "Phenomenal Mercury-02",
    description:
      "Pellentesque ac tortor sed ipsum feugiat condimentum. Pellentesque ac tortor sed ipsum feugiat condimentum.",
    brand: "Persol",
    category: "Sunglasses",
    gender: "Unisex",
    weight: "100g",
    quantity: 5,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691424973/Eyesome/sun4.8c4033c31b159eb6dd95_odgrlo.png",
    rating: 2.8,
    price: 1299,
    newPrice: 1200,
  },
  {
    id: "61bf1558-94c3-4494-a522-0aad46ed5334",
    qty: 0,
    name: "Black boss",
    description:
      "Integer et nunc in turpis maximus facilisis ac ac elit. Integer et nunc in turpis maximus facilisis ac ac elit.",
    brand: "Kate Spade",
    category: "Sunglasses",
    gender: "Unisex",
    weight: "750g",
    quantity: 15,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954175/Eyesome/sun5.3c6e9349bf4c9fc9ce70_c12f05.png",
    rating: 4.7,
    price: 2999,
    newPrice: 2399,
    trending: true,
  },
  {
    id: "9e3419eb-e5f6-4813-8bf4-6d72b6498235",
    qty: 0,
    name: "Blue Ray Wayfarer",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Sports",
    gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425033/Eyesome/sports9.2bd32d1b479b58057cfd_pgkgju.png",
    rating: 4.8,
    price: 4999,
    newPrice: 4000,
  },
  {
    id: "c39a126c-783e-4926-bedd-0b2174307d9c",
    qty: 0,
    name: "Pernik",
    description:
      "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    brand: "Carrera",
    category: "Sunglasses",
    gender: "Unisex",
    weight: "300g",
    quantity: 8,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425119/Eyesome/sun7.372a5b5dd1a306c14fc1_bjup1g.png",
    rating: 3.8,
    price: 2499,
    newPrice: 1599,
  },
  {
    id: "2e792ac4-13a7-4d70-a9a5-55294e346404",
    qty: 0,
    name: "Silistra",
    description:
      "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    brand: "Oakley",
    category: "Sunglasses",
    gender: "Women",
    weight: "900g",
    quantity: 3,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425211/Eyesome/sun8.8afaeb5507a662cd154d_psmidt.png",
    rating: 3.5,
    price: 3999,
    newPrice: 3599,
  },
  {
    id: "a84d980e-cf9e-4607-b74d-68f7a1c45771",
    qty: 0,
    name: "Full rim acetate black",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    brand: "Ray-Ban",
    category: "Vision",
    gender: "Men",
    weight: "200g",
    quantity: 10,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425257/Eyesome/vision1.ecd5eb73f58c6585e064_wi5vir.png",
    rating: 4.5,
    price: 1999,
    newPrice: 1900,
  },
  {
    id: "1c9bd0c1-b300-4358-9eb4-43a70e392859",
    qty: 0,
    name: "Ruse",
    description:
      "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
    brand: "Kate Spade",
    category: "Sunglasses",
    gender: "Men",
    weight: "400g",
    quantity: 6,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425305/Eyesome/sun9.d5afc36fa79b88b0e2c0_czxhtu.png",
    rating: 4.1,
    price: 1499,
    newPrice: 1350,
  },
  {
    id: "08617c37-e290-4296-b558-2db509201361",
    qty: 0,
    name: "Yambol",
    description:
      "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
    brand: "Ray-Ban",
    category: "Sunglasses",
    gender: "Men",
    weight: "130g",
    quantity: 9,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425354/Eyesome/sun10.bf0ceeaf23c77db12191_wej9g4.png",
    rating: 4.3,
    price: 2999,
    newPrice: 1999,
  },
  {
    id: "5f73b408-aa98-4f54-a15b-7a7425a038d5",
    qty: 0,
    name: "Roadies Rd-202",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Sunglasses",
    gender: "Men",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425628/Eyesome/sun14.2c6d452f814cdcacf389_jfqrwr.png",
    rating: 4.8,
    price: 4999,
    newPrice: 4799,
  },
  {
    id: "bb2ad041-b53a-49a8-835d-e84300e6fbd2",
    qty: 0,
    name: "Burgas",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Sunglasses",
    gender: "Women",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425677/Eyesome/sun11.dd7c14249a832c65d45e_fqq58u.png",
    rating: 4.8,
    price: 4999,
    newPrice: 4000,
  },
  {
    id: "6c800171-bea6-4cb2-811d-7c419a59dcb8",
    qty: 0,
    name: "Hip Hop Candy",
    description:
      "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
    brand: "Kate Spade",
    category: "Sports",
    gender: "Men",
    weight: "400g",
    quantity: 6,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954193/Eyesome/sports7.99c95c59ac7a9c588366_khetbo.png",
    rating: 4.1,
    price: 1499,
    newPrice: 1399,
    trending: true,
  },
  {
    id: "9ca598d9-7cb5-4fb0-8455-b43028f9cb96",
    qty: 0,
    name: "Punk Cut Out",
    description:
      "Vivamus mattis quam sed libero pretium ullamcorper. Vivamus mattis quam sed libero pretium ullamcorper.",
    brand: "Ray-Ban",
    category: "Sports",
    gender: "Women",
    weight: "102g",
    quantity: 9,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954213/Eyesome/sports8.2e04c613e3b4def2ec69_xixwv6.png",
    rating: 4.3,
    price: 2999,
    newPrice: 2599,
    trending: true,
  },
  {
    id: "51db0e19-b0e0-4d6e-bce0-739f1bd37ba7",
    qty: 0,
    name: "Rounded Gold",
    description:
      "Pellentesque ac tortor sed ipsum feugiat condimentum. Pellentesque ac tortor sed ipsum feugiat condimentum.",
    brand: "Persol",
    category: "Vision",
    gender: "Men",
    weight: "190g",
    quantity: 5,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1690954233/Eyesome/vision2.611b59463c103d118f9a_do35iv.png",
    rating: 2.8,
    price: 1299,
    newPrice: 1000,
    trending: true,
  },
  {
    id: "35332c85-f853-407a-80f8-840069381a0d",
    qty: 0,
    name: "Jungle Safari",
    description:
      "Integer et nunc in turpis maximus facilisis ac ac elit. Integer et nunc in turpis maximus facilisis ac ac elit.",
    brand: "Kate Spade",
    category: "Vision",
    gender: "Unisex",
    weight: "750g",
    quantity: 15,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425731/Eyesome/vision3.9677d3b3dd0b16e057e9_ljacgf.png",
    rating: 4.7,
    price: 2999,
    newPrice: 2899,
  },

  {
    id: "a0a1ca71-d121-48af-a463-4ee790df28de",
    qty: 0,
    name: "Sofia",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Sunglasses",
    gender: "Women",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691425970/Eyesome/sun12.fe0f739cc807436db720_qxijr8.png",
    rating: 4.8,
    price: 4999,
    newPrice: 4399,
  },
  {
    id: "2b5f4f03-7ec7-4a5c-b2a7-14dbcc4f2f6b",
    qty: 0,
    name: "Plovediv",
    description:
      "Donec interdum felis non justo sollicitudin lobortis. Donec interdum felis non justo sollicitudin lobortis.",
    brand: "Carrera",
    category: "Sunglasses",
    gender: "Unisex",
    weight: "550g",
    quantity: 7,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691428407/Eyesome/sun13.6d0d0eb63e9c1b2304b5_dkjbei.png",
    rating: 4.8,
    price: 4999,
    newPrice: 3499,
  },
  {
    id: "440cec02-21e1-4447-bdd9-d51482b7ce4b",
    qty: 0,
    name: "Airway Black",
    description:
      "Vestibulum eu tellus sed lorem tristique lacinia ut vel urna. Vestibulum eu tellus sed lorem tristique lacinia ut vel urna.",
    brand: "Carrera",
    category: "Vision",
    gender: "Unisex",
    weight: "300g",
    quantity: 8,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691428438/Eyesome/vision4.dc38dca0f9f2fab1d437_ypzl4x.png",
    rating: 3.8,
    price: 2499,
    newPrice: 1499,
  },
  {
    id: "77f519a8-a40f-443d-8c9e-5314b24cf06d",
    qty: 0,
    name: "Cat-eyed Gold",
    description:
      "Aenean at velit consequat, faucibus mi id, tempor velit. Aenean at velit consequat, faucibus mi id, tempor velit.",
    brand: "Oakley",
    category: "Vision",
    gender: "Women",
    weight: "900g",
    quantity: 3,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691428477/Eyesome/vision5.5e43dea8c9f7f9cde6ea_j95xwb.png",
    rating: 3.5,
    price: 3999,
    newPrice: 3790,
  },
  {
    id: "11a2bfb4-2acf-40da-a12f-60dfcce8ed95",
    qty: 0,
    name: "Full Rim Steel Gray",
    description:
      "Fusce sed est nec ipsum convallis semper nec id ipsum. Fusce sed est nec ipsum convallis semper nec id ipsum.",
    brand: "Kate Spade",
    category: "Vision",
    gender: "Men",
    weight: "400g",
    quantity: 6,
    image:
      "https://res.cloudinary.com/ddaimmqrr/image/upload/v1691428510/Eyesome/vision6.c4aa8c09c08cf6e5c4ac_cyd7v9.png",
    rating: 4.1,
    price: 1499,
    newPrice: 1459,
  },
];

export const dummyAddress = {
  id: "default",
  fullName: "Richa Sharma",
  mobile: 9988776655,
  addressLine1: "A-23, South Block",
  addressLine2: "Clover Pinnacle Ridge",
  city: "New Delhi",
  pincode: 110044,
  selected: true,
};

export const usesrsList = [
  {
    id: "defaultUser",
    username: "Robin Johanson",
    email: "robin@rediffmail.com",
    password: "robin@123",
    primaryAddress: {
      id: "defaultAddress",
      name: "Robin Johanson",
      firstLine: "A9-23, West Zone",
      secondLine: "Alpha Lane",
      city: "NewJersy",
      pincode: 442200,
      mobile: 9454545450,
    },
    addressList: [
      {
        id: "defaultAddress",
        name: "Robin Johanson",
        firstLine: "A9-23, West Zone",
        secondLine: "Alpha Lane",
        city: "NewJersy",
        pincode: 442200,
        mobile: 9454545450,
      },
    ],
  },
];
