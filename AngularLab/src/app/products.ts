export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image?: string;
  rating: number;

}

export const products= [
  {
    id: 1,
    name: 'Apple iPad 2021',
    price: 154395,
    description: 'Ipad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел',
    link:'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13',
    price: 409499,
    description: 'Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзисторов и объединяет центральный и графический процессоры, систему Neural Engine',
    link:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
    rating: 4
  },
  {
    id: 3,
    name: 'Мышь Apple Magic Mouse 2 ',
    price: 38073,
    description: 'Мышь Magic Mouse 2 получила не только новый дизайн, но и возможность перезарядки. А это значит, что вам больше не нужны обычные батарейки',
    link:'https://kaspi.kz/shop/p/apple-magic-mouse-2-usb-c-belyi-103539318/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/h98/81177555402782.jpg?format=gallery-medium',
    rating: 3
  },
  {
    id: 4,
    name: 'Наушники Apple AirPods Max',
    price: 380073,
    description: 'Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках.',
    link:'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 5,
    name: 'Наушники Apple AirPods Pro 2nd generation',
    price: 113462,
    description: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    link:'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 6,
    name: 'Смарт-часы Apple Watch',
    price: 131369,
    description: 'Большой дисплей Retina, на котором поместится всё, что нужно. Продвинутые датчики для отслеживания любой физической активности. Полезные функции, которые помогают следить за показателями здоровья и заботятся о Вашей безопасности.',
    link:'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
    rating: 3
  },
  {
    id: 7,
    name: 'Клавиатура Ajazz',
    price: 80000,
    description: 'Клавиатура Ajazz AK820 Pro белый',
    link:'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/hfa/84696373461022.png?format=gallery-medium',
    rating: 4
  },
  {
    id: 8,
    name: 'Sony PlayStation 5 Slim',
    price: 264658,
    description: 'Игровая приставка Sony PlayStation 5 Slim',
    link:'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    rating: 5
  },
  {
    id: 9,
    name: 'Ноутбук Lenovo IdeaPad 3 15IGL05',
    price: 145900,
    description: 'IdeaPad 3 стоит, как обычный ноутбук для повседневного использования, однако это устройство способно на большее.',
    link:'https://kaspi.kz/shop/p/lenovo-ideapad-3-15igl05-81wq00emrk-seryi-102878742/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
    rating: 2
  },
  {
    id: 10,
    name: 'Фотокамера Canon EOS 250D',
    price: 268940,
    description: 'Самая легкая в мире цифровая зеркальная камера с поворотным экраном сочетает в себе съемку в традиционном положении и передовые технологии.',
    link:'https://kaspi.kz/shop/p/canon-eos-250d-ef-s-18-55-is-stm-kit-2240118/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hf6/63832508596254.jpg?format=gallery-medium',
    rating: 4
  },


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
