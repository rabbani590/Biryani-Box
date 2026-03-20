import React, { createContext, useContext } from 'react';

const DemoDataContext = createContext();

export const useDemoData = () => useContext(DemoDataContext);

// Mock Reservations
export const MOCK_RESERVATIONS = [
  {
    id: 'RES_001',
    customerName: 'Raj Patel',
    email: 'raj@example.com',
    phone: '+1-555-1001',
    date: new Date(Date.now() + 2*24*60*60*1000).toISOString().split('T')[0],
    time: '19:00',
    guests: 4,
    notes: 'Birthday celebration',
    status: 'confirmed',
    tableAssigned: 'T5',
    createdAt: new Date(Date.now() - 7*24*60*60*1000).toISOString()
  },
  {
    id: 'RES_002',
    customerName: 'Priya Singh',
    email: 'priya@example.com',
    phone: '+1-555-1002',
    date: new Date(Date.now() + 3*24*60*60*1000).toISOString().split('T')[0],
    time: '18:30',
    guests: 6,
    notes: 'Anniversary dinner',
    status: 'confirmed',
    tableAssigned: 'T6',
    createdAt: new Date(Date.now() - 5*24*60*60*1000).toISOString()
  },
  {
    id: 'RES_003',
    customerName: 'Amit Kumar',
    email: 'amit@example.com',
    phone: '+1-555-1003',
    date: new Date(Date.now() + 1*24*60*60*1000).toISOString().split('T')[0],
    time: '20:00',
    guests: 2,
    notes: 'Date night',
    status: 'pending',
    tableAssigned: null,
    createdAt: new Date(Date.now() - 2*24*60*60*1000).toISOString()
  }
];

// Mock Catering Orders
export const MOCK_CATERING_ORDERS = [
  {
    id: 'CATER_001',
    customerName: 'Corporate Events Inc',
    email: 'corporate@example.com',
    phone: '+1-555-2001',
    eventType: 'Corporate Lunch',
    eventDate: new Date(Date.now() + 5*24*60*60*1000).toISOString().split('T')[0],
    guestCount: 50,
    menu: ['Chicken Dum Biryani', 'Paneer Tikka Masala', 'Garlic Naan', 'Gulab Jamun'],
    venue: '456 Business Park, NYC',
    budget: 1500,
    status: 'confirmed',
    totalPrice: 1495,
    deliveryTime: '12:00',
    notes: 'Vegetarian options needed',
    createdAt: new Date(Date.now() - 10*24*60*60*1000).toISOString()
  },
  {
    id: 'CATER_002',
    customerName: 'Wedding Planners LLC',
    email: 'weddings@example.com',
    phone: '+1-555-2002',
    eventType: 'Wedding Reception',
    eventDate: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
    guestCount: 150,
    menu: ['Mutton Dum Biryani', 'Chicken Tikka', 'Family Combo', 'Rasmalai', 'Ice Cream Kulfi'],
    venue: 'Grand Ballroom, Manhattan',
    budget: 5000,
    status: 'pending',
    totalPrice: null,
    deliveryTime: '18:00',
    notes: 'Multiple stations, serving staff required',
    createdAt: new Date(Date.now() - 3*24*60*60*1000).toISOString()
  },
  {
    id: 'CATER_003',
    customerName: 'Birthday Party Planning',
    email: 'birthdays@example.com',
    phone: '+1-555-2003',
    eventType: 'Birthday Party',
    eventDate: new Date(Date.now() + 7*24*60*60*1000).toISOString().split('T')[0],
    guestCount: 30,
    menu: ['Chicken Dum Biryani', 'Chicken Lollipop', 'Samosa', 'Gulab Jamun'],
    venue: 'Community Center, Queens',
    budget: 600,
    status: 'confirmed',
    totalPrice: 599.99,
    deliveryTime: '16:00',
    notes: 'Kids menu available',
    createdAt: new Date(Date.now() - 5*24*60*60*1000).toISOString()
  }
];

// Mock Gift Cards
export const MOCK_GIFT_CARDS = [
  {
    id: 'GC_001',
    code: 'BIRYANI50ABC123',
    denomination: 50,
    balance: 50,
    createdAt: new Date(Date.now() - 30*24*60*60*1000).toISOString(),
    expiryDate: new Date(Date.now() + 365*24*60*60*1000).toISOString().split('T')[0],
    purchasedBy: 'John Doe',
    purchasedFor: 'Gift',
    status: 'active',
    transactionHistory: []
  },
  {
    id: 'GC_002',
    code: 'BIRYANI100XYZ789',
    denomination: 100,
    balance: 75.50,
    createdAt: new Date(Date.now() - 60*24*60*60*1000).toISOString(),
    expiryDate: new Date(Date.now() + 300*24*60*60*1000).toISOString().split('T')[0],
    purchasedBy: 'Jane Smith',
    purchasedFor: 'Corporate Gift',
    status: 'active',
    transactionHistory: [
      { amount: 24.50, date: new Date(Date.now() - 10*24*60*60*1000).toISOString(), description: 'Used at Biryani Box' }
    ]
  },
  {
    id: 'GC_003',
    code: 'BIRYANI200LMN456',
    denomination: 200,
    balance: 0,
    createdAt: new Date(Date.now() - 90*24*60*60*1000).toISOString(),
    expiryDate: new Date(Date.now() + 270*24*60*60*1000).toISOString().split('T')[0],
    purchasedBy: 'Robert Johnson',
    purchasedFor: 'Employee Reward',
    status: 'redeemed',
    transactionHistory: [
      { amount: 200, date: new Date(Date.now() - 5*24*60*60*1000).toISOString(), description: 'Fully redeemed' }
    ]
  }
];

// Mock Delivery Orders
export const MOCK_DELIVERIES = [
  {
    id: 'DEL_001',
    orderId: 'ORD_101',
    customerName: 'Sarah Williams',
    phone: '+1-555-3001',
    address: '789 Park Avenue, NYC',
    items: ['Chicken Dum Biryani x2', 'Garlic Naan x2', 'Rasmalai x1'],
    totalAmount: 67.96,
    status: 'in-transit',
    assignedDriver: 'Vikram Patel',
    driverPhone: '+1-555-0104',
    driverRating: 4.8,
    estimatedDelivery: '45 mins',
    currentLocation: 'Manhattan, NY',
    orderPlacedAt: new Date(Date.now() - 15*60*1000).toISOString(),
    deliveryStartedAt: new Date(Date.now() - 8*60*1000).toISOString()
  },
  {
    id: 'DEL_002',
    orderId: 'ORD_102',
    customerName: 'Michael Chen',
    phone: '+1-555-3002',
    address: '321 Madison Ave, NYC',
    items: ['Mutton Dum Biryani x1', 'Paneer Tikka Masala x1', 'Butter Naan x2'],
    totalAmount: 59.96,
    status: 'delivered',
    assignedDriver: 'Vikram Patel',
    driverPhone: '+1-555-0104',
    driverRating: 4.8,
    deliveredAt: new Date(Date.now() - 45*60*1000).toISOString(),
    orderPlacedAt: new Date(Date.now() - 70*60*1000).toISOString(),
    deliveryStartedAt: new Date(Date.now() - 50*60*1000).toISOString(),
    customerRating: 5,
    customerFeedback: 'Great delivery, food was hot!'
  },
  {
    id: 'DEL_003',
    orderId: 'ORD_103',
    customerName: 'Emma Davis',
    phone: '+1-555-3003',
    address: '555 5th Avenue, NYC',
    items: ['Family Combo (4) x1', 'Gulab Jamun x2'],
    totalAmount: 61.97,
    status: 'pending',
    assignedDriver: null,
    estimatedDelivery: 'Awaiting driver assignment',
    orderPlacedAt: new Date(Date.now() - 5*60*1000).toISOString()
  }
];

// Mock Order History for Customers
export const MOCK_ORDER_HISTORY = [
  {
    id: 'CUST_ORD_001',
    orderNumber: 'ORD_201',
    date: new Date(Date.now() - 5*24*60*60*1000).toISOString(),
    items: ['Chicken Dum Biryani x2', 'Garlic Naan x2'],
    total: 47.96,
    status: 'completed',
    rating: 5,
    feedback: 'Excellent!'
  },
  {
    id: 'CUST_ORD_002',
    orderNumber: 'ORD_202',
    date: new Date(Date.now() - 12*24*60*60*1000).toISOString(),
    items: ['Mutton Dum Biryani x1', 'Samosa x1', 'Rasmalai x1'],
    total: 36.97,
    status: 'completed',
    rating: 4.5,
    feedback: 'Very good'
  },
  {
    id: 'CUST_ORD_003',
    orderNumber: 'ORD_203',
    date: new Date(Date.now() - 20*24*60*60*1000).toISOString(),
    items: ['Butter Chicken x1', 'Family Combo (4) x1'],
    total: 66.98,
    status: 'completed',
    rating: 4,
    feedback: 'Good quality'
  }
];

export const DemoDataProvider = ({ children }) => {
  const data = {
    reservations: MOCK_RESERVATIONS,
    cateringOrders: MOCK_CATERING_ORDERS,
    giftCards: MOCK_GIFT_CARDS,
    deliveries: MOCK_DELIVERIES,
    orderHistory: MOCK_ORDER_HISTORY
  };

  return (
    <DemoDataContext.Provider value={data}>
      {children}
    </DemoDataContext.Provider>
  );
};
