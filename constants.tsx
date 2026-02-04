
import { Product, Testimonial } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCxK_k63ciIG24Tx0wJ26LJ5Qd1WZXmGqtCPExMbrgUQQr3xjOPN_ZqpKzlZQUdlFb5VsKfK0KjV2qhlusoFWsntUzGyRmMlsjFzgS2lSeFSzMFll2G9Trs3o_UmwWSmVwiR8OqN2oSsXEihrdn1ot7ge5zMJOIEsV-8Fa0XOT_nqxtiawpQHWd7ywWvPthlJL7OVbzOEyP5ibVdNgNw1CzQfDaWNG32iE4L03EQN64fAKXL3O7_wKyyOlirF-VvPB4glC2UvqyFLjW";

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Signature Bandana',
    price: 18.00,
    tag: 'Hand-sewn',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwj6p4w9OCTcQvIt_y8wvLKjeHCYO1IFBk5ExiYlVLyXBmNDfX92z2eFVvi0VdP81DiQEe4pgP2ZlAEJG8eRAbHP0BrAWS-Pq0zjtFlCRu6ktiZQaZJcsNStHBcDu9sKpeiNDnlS4Kt6L6X7ytunaIwdepLkjq9lC5zG5vnioDg2ieRpA8RwwI8XOpQXxbXHPLIW71Ahlk2PHpEtckQ35jbQJZeYz_EsqQeWDR9kKi22S--c2nwkjw7vYKZcCqV9G7jJu9LQrIlXmR',
    description: 'Beautiful floral pattern on premium fabric.'
  },
  {
    id: '2',
    name: 'Weatherproof Coat',
    price: 45.00,
    tag: 'Adjustable',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHrmlxf6aAJZP24wBkOUR-C5oQGZBrVrrUW5SA9lanVCPY9siKH5DnyhCYwEMHMyJB-pfDjnIMuTMOlLFTguxrfIBQMQxhfUoAggsrtDrzAetGgUl_6AkCOShAfTh9q9KXBS-L-VdkcCGVD6fJmxBU24Vrl1jixL2fu_3kp48t3ByuiBJhDJ2VlAwZvqSIw7Ww3RR_EMFDKgZzX7kh5xyu2RiU1a5IEzt3s6pg8LbjpRKPf9pZ-set0gMuZVy3IPdycqOgouPVO46W',
    description: 'Keep your long friend dry and warm.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah & Barnaby',
    role: 'Verified Owner',
    text: '"Finally, a coat that actually fits my long boy! The quality is amazing and he looks so dapper. Highly recommend Doxie Delights!"',
    rating: 5,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe_GUWIyBalfqNEom4S8m2EaZ6isVZbfCJgVx_sSVM6r24lxETrQLaj7uMLAsAfk7sdXX3TxB3qrtgroYNDHibHjGm1yBsd-7FS5c9hkgQdHYBtaTKOpvCghg6yaV5pupdUhhHN6RWtngR50uBV5Rk9z9w_eFZbTSmqo_CsNKAqrbmIBAZ5KkBjCadHos-Pg_TVYVSmeWmzYaJohEhjpMTS74SCJveFU6S_uPrG6BjSNDab4cg8Db8V2LswSS3Tqm2wu0UPh7NTjHm'
  }
];
