import React, {useState} from 'react';
import './App.css';
import OrderDatails from './components/OrderDatails/OrderDatails';
import AddItems from './components/AddItems/AddItems';

interface MenuItem {
  name: string;
  price: number;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  {name: 'Hamburger', price: 80, imageUrl: 'https://images.squarespace-cdn.com/content/v1/5ec1febb58a4890157c8fbeb/19ebb9ed-4862-46e1-9f7c-4e5876730227/Beetroot-Burger.jpg'},
  {name: 'CheeseBurger', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp20o9NY1dVAsKfKqNUZs9XAIk5A0_ndo0A&s'},
  {name: 'Fries', price: 50, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwABqay1xzqUMMtesTe8WAesrw7emXVVUIQ&s'},
  {name: 'Cola', price: 40, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGQl9_TyeYMmtBYUhSjgy9xDpsQGde2rllCg&s'},
  {name: 'Nuggets', price: 70, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsnIP1Syj_Z4Km9CJzfObolS_F1Z_jEqJLQ&s'},
  {name: 'Salad', price: 60, imageUrl: 'https://www.thespruceeats.com/thmb/2GoDt7juuaU7lxtQDq-_IjEr6t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-our-favorite-simple-green-salad-recipe-7370448-hero-01-4ca9788a0a3c4d53b70f1d07f8382b7f.jpg'},
];

interface OrderItem extends MenuItem {
  quantity: number;
}

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const handleAddItem = (name: string) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === name);
      if(existingItem) {
        return prevOrder.map((item) =>
          item.name === name ? {...item, quantity: item.quantity + 1} : item,
        );
      } else {
        const menuItem = menuItems.find((item) => item.name === name)!;
        return [...prevOrder, {...menuItem, quantity: 1}];
      }
    });
  };

  const handleRemoveItem = (name: string) => {
    setOrder((prevOrder) => prevOrder.filter(item => item.name !== name));
  };

  return (
    <div className='app'>
      <OrderDatails items={order} onRemoveItem={handleRemoveItem} />
      <AddItems items={menuItems} onAddItem={handleAddItem} />
    </div>
  );
};

export default App
