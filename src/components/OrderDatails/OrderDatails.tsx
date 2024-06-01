import React from "react";

interface OrderItem {
    name: string;
    price: number;
    quantity: number;
}

interface OrderDatailsProps {
    items: OrderItem[];
    onRemoveItem: (name: string) => void;
}


const OrderDatails: React.FC<OrderDatailsProps> = ({items,onRemoveItem}) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0); 

    return (
        <div className="order-datails">
            <h2>Информация для заказа</h2>
            {items.length === 0 ? (
                <p>Ваш заказ пуст</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} x {item.quantity} - {item.price * item.quantity} KGS
                            <button onClick={() => onRemoveItem(item.name)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="total-price">
                Общая стоимость {total} сом
            </div>
        </div>
    );
};

export default OrderDatails;