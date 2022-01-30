export const initialState = {
  cart: [
    {
      name: 'Product 1',
      clientInput:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      amount: 1,
      priceSingle: 145,
    },
    {
      name: 'Product 2',
      clientInput:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      amount: 3,
      priceSingle: 123,
    },
  ],
  // products: [
  //   {
  //     id: '1',
  //     name: 'Product 1',
  //     describtion:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  //     photos: [
  //       'https://images.pexels.com/photos/4471293/pexels-photo-4471293.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //       'https://images.pexels.com/photos/1669154/pexels-photo-1669154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/9944101/pexels-photo-9944101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/10037329/pexels-photo-10037329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //     ],
  //     photo:
  //       'https://images.pexels.com/photos/10037329/pexels-photo-10037329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //     priceFrom: 145,
  //   },
  //   {
  //     id: '2',
  //     name: 'Product 2',
  //     describtion:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  //     photos: [
  //       'https://images.pexels.com/photos/3975591/pexels-photo-3975591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/4114833/pexels-photo-4114833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/2772147/pexels-photo-2772147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/3662762/pexels-photo-3662762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     ],
  //     photo:
  //       'https://images.pexels.com/photos/4114833/pexels-photo-4114833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     priceFrom: 145,
  //   },
  //   {
  //     id: '3',
  //     name: 'Product 3',
  //     describtion:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //     photos: [
  //       'https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/1822503/pexels-photo-1822503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/1539787/pexels-photo-1539787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     ],
  //     photo:
  //       'https://images.pexels.com/photos/2105038/pexels-photo-2105038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     priceFrom: 145,
  //   },
  //   {
  //     id: '4',
  //     name: 'Product 4',
  //     describtion:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  //     photos: [
  //       'https://images.pexels.com/photos/3714523/pexels-photo-3714523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/164729/pexels-photo-164729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/2079169/pexels-photo-2079169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/2027394/pexels-photo-2027394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     ],
  //     photo:
  //       'https://images.pexels.com/photos/3714523/pexels-photo-3714523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     priceFrom: 145,
  //   },
  //   {
  //     id: '5',
  //     name: 'Product 5',
  //     describtion:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  //     photos: [
  //       'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/92069/pexels-photo-92069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/243989/pexels-photo-243989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/2646825/pexels-photo-2646825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     ],
  //     photo:
  //       'https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     priceFrom: 145,
  //   },
  //   {
  //     id: '6',
  //     name: 'Product 6',
  //     describtion:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

  //     photos: [
  //       'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/2108813/pexels-photo-2108813.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/1770289/pexels-photo-1770289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //       'https://images.pexels.com/photos/10495652/pexels-photo-10495652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     ],
  //     photo:
  //       'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     priceFrom: 145,
  //   },
  // ],
};
