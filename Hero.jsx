import React, { useState, useEffect } from "react";
import { FiClock } from "react-icons/fi"; // For the history icon

const Hero = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [orders, setOrders] = useState([]);
  const [isHistoryOpen, setHistoryOpen] = useState(false);

  // Load orders from localStorage on mount
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders"));
    // Ensure that orders exist and are in the right format
    if (Array.isArray(storedOrders)) {
      setOrders(storedOrders);
    }
  }, []);

  // Save orders to localStorage when updated
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [orders]);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const submitOrder = () => {
    const newOrder = {
      id: Date.now(),
      name: "Casual Wear",
      price: "$29.99",
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setNotificationVisible(true);
    closePopup();

    setTimeout(() => {
      setNotificationVisible(false);
    }, 3000); // Hide the notification after 3 seconds
  };

  const deleteOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <div className="relative bg-gray-100 dark:bg-gray-900 min-h-screen flex">
      {/* Left Section: Product Card */}
      <div className="hero flex-grow flex items-center justify-center">
        <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
          <div className="h-[100px]">
           
          </div>
          <div className="p-4 text-center">
            <h1 className="text-xl font-bold">Casual Wear</h1>
            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <button
              onClick={openPopup}
              className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Icon for History */}
      <button
        onClick={() => setHistoryOpen(!isHistoryOpen)}
        className="fixed top-4 right-4 bg-gray-700 text-white p-3 rounded-full shadow-lg z-30"
      >
        <FiClock size={24} />
      </button>

      {/* History Sidebar */}
      {isHistoryOpen && (
        <div className="fixed top-0 right-0 bg-white dark:bg-gray-800 shadow-xl w-[300px] h-full p-4 overflow-y-auto z-20">
          <h2 className="text-xl font-bold mb-4">Order History</h2>
          {orders.length > 0 ? (
            <ul>
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 rounded p-2 mb-2"
                >
                  <div>
                    <p className="font-bold">{order.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {order.price}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No orders yet.</p>
          )}
        </div>
      )}

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-6 shadow-xl w-[300px]">
            <h2 className="text-xl font-bold">Product Details</h2>
            <p className="mt-2 text-gray-700">Product Name: Casual Wear</p>
            <p className="mt-2 text-gray-700">Price: $29.99</p>
            <p className="mt-2 text-gray-700">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <button
              onClick={submitOrder}
              className="bg-primary text-white py-2 px-4 rounded mt-4 w-full"
            >
              Submit Order
            </button>
            <button
              onClick={closePopup}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded mt-2 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notification */}
      {isNotificationVisible && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-20">
          Order submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Hero;
