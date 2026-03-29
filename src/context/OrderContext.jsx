import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

// Core ingredient-level inventory (new feature)
const MOCK_INGREDIENTS = [
  {
    id: 1,
    name: 'Basmati Rice',
    unit: 'kg',
    stock: 100,
    minStock: 10,
    reorderLeadDays: 3,
    unitCost: 2.5,
  },
  { id: 2, name: 'Chicken', unit: 'kg', stock: 60, minStock: 8, reorderLeadDays: 2, unitCost: 5.2 },
  { id: 3, name: 'Mutton', unit: 'kg', stock: 40, minStock: 6, reorderLeadDays: 3, unitCost: 8.5 },
  { id: 4, name: 'Shrimp', unit: 'kg', stock: 25, minStock: 5, reorderLeadDays: 4, unitCost: 9.0 },
  { id: 5, name: 'Paneer', unit: 'kg', stock: 30, minStock: 5, reorderLeadDays: 3, unitCost: 4.5 },
  {
    id: 6,
    name: 'Vegetables',
    unit: 'kg',
    stock: 80,
    minStock: 12,
    reorderLeadDays: 2,
    unitCost: 3.2,
  },
  {
    id: 7,
    name: 'Eggs',
    unit: 'units',
    stock: 120,
    minStock: 20,
    reorderLeadDays: 2,
    unitCost: 0.2,
  },
  { id: 8, name: 'Flour', unit: 'kg', stock: 60, minStock: 8, reorderLeadDays: 2, unitCost: 1.1 },
  { id: 9, name: 'Dairy', unit: 'kg', stock: 70, minStock: 10, reorderLeadDays: 2, unitCost: 3.8 },
  {
    id: 10,
    name: 'Spices',
    unit: 'kg',
    stock: 40,
    minStock: 5,
    reorderLeadDays: 2,
    unitCost: 10.0,
  },
];

const MENU_RECIPES = {
  1: [
    { ingredientId: 1, qty: 0.45 },
    { ingredientId: 2, qty: 0.22 },
    { ingredientId: 9, qty: 0.08 },
    { ingredientId: 10, qty: 0.02 },
  ],
  2: [
    { ingredientId: 1, qty: 0.45 },
    { ingredientId: 3, qty: 0.26 },
    { ingredientId: 9, qty: 0.08 },
    { ingredientId: 10, qty: 0.02 },
  ],
  3: [
    { ingredientId: 1, qty: 0.42 },
    { ingredientId: 4, qty: 0.3 },
    { ingredientId: 9, qty: 0.06 },
    { ingredientId: 10, qty: 0.02 },
  ],
  4: [
    { ingredientId: 1, qty: 0.4 },
    { ingredientId: 6, qty: 0.3 },
    { ingredientId: 9, qty: 0.05 },
    { ingredientId: 10, qty: 0.02 },
  ],
  5: [
    { ingredientId: 1, qty: 0.4 },
    { ingredientId: 7, qty: 2 },
    { ingredientId: 9, qty: 0.05 },
    { ingredientId: 10, qty: 0.02 },
  ],
  6: [
    { ingredientId: 2, qty: 0.18 },
    { ingredientId: 10, qty: 0.03 },
    { ingredientId: 9, qty: 0.04 },
  ],
  7: [
    { ingredientId: 5, qty: 0.2 },
    { ingredientId: 10, qty: 0.03 },
    { ingredientId: 9, qty: 0.04 },
  ],
  8: [
    { ingredientId: 3, qty: 0.16 },
    { ingredientId: 10, qty: 0.03 },
    { ingredientId: 9, qty: 0.04 },
  ],
  9: [
    { ingredientId: 2, qty: 0.14 },
    { ingredientId: 10, qty: 0.03 },
    { ingredientId: 9, qty: 0.04 },
  ],
  10: [
    { ingredientId: 8, qty: 0.15 },
    { ingredientId: 6, qty: 0.05 },
    { ingredientId: 10, qty: 0.02 },
  ],
  11: [
    { ingredientId: 8, qty: 0.12 },
    { ingredientId: 6, qty: 0.02 },
    { ingredientId: 9, qty: 0.02 },
  ],
  12: [
    { ingredientId: 8, qty: 0.1 },
    { ingredientId: 9, qty: 0.02 },
  ],
  13: [
    { ingredientId: 8, qty: 0.08 },
    { ingredientId: 6, qty: 0.02 },
  ],
  14: [
    { ingredientId: 8, qty: 0.14 },
    { ingredientId: 5, qty: 0.06 },
    { ingredientId: 9, qty: 0.02 },
  ],
  15: [
    { ingredientId: 2, qty: 0.2 },
    { ingredientId: 9, qty: 0.06 },
    { ingredientId: 10, qty: 0.03 },
  ],
  16: [
    { ingredientId: 5, qty: 0.22 },
    { ingredientId: 9, qty: 0.05 },
    { ingredientId: 10, qty: 0.03 },
  ],
  17: [
    { ingredientId: 3, qty: 0.2 },
    { ingredientId: 9, qty: 0.06 },
    { ingredientId: 10, qty: 0.03 },
  ],
  18: [
    { ingredientId: 6, qty: 0.18 },
    { ingredientId: 8, qty: 0.2 },
    { ingredientId: 10, qty: 0.03 },
  ],
  19: [
    { ingredientId: 9, qty: 0.1 },
    { ingredientId: 2, qty: 0.02 },
    { ingredientId: 10, qty: 0.01 },
  ],
  20: [
    { ingredientId: 9, qty: 0.1 },
    { ingredientId: 10, qty: 0.02 },
  ],
  21: [
    { ingredientId: 9, qty: 0.12 },
    { ingredientId: 10, qty: 0.02 },
  ],
  22: [
    { ingredientId: 9, qty: 0.08 },
    { ingredientId: 8, qty: 0.04 },
    { ingredientId: 10, qty: 0.01 },
  ],
  23: [
    { ingredientId: 1, qty: 1.4 },
    { ingredientId: 2, qty: 0.55 },
    { ingredientId: 8, qty: 0.45 },
    { ingredientId: 10, qty: 0.08 },
  ],
  24: [
    { ingredientId: 1, qty: 0.8 },
    { ingredientId: 2, qty: 0.3 },
    { ingredientId: 8, qty: 0.3 },
    { ingredientId: 10, qty: 0.05 },
  ],
  25: [
    { ingredientId: 1, qty: 2.5 },
    { ingredientId: 3, qty: 0.8 },
    { ingredientId: 8, qty: 0.75 },
    { ingredientId: 10, qty: 0.1 },
  ],
};

const MOCK_MENU = [
  // Biryani (5)
  {
    id: 1,
    name: 'Chicken Dum Biryani',
    price: 18.99,
    category: 'Biryani',
    image: '🍚',
    prep_time: 25,
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Mutton Dum Biryani',
    price: 22.99,
    category: 'Biryani',
    image: '🍚',
    prep_time: 30,
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Shrimp Biryani',
    price: 24.99,
    category: 'Biryani',
    image: '🍚',
    prep_time: 20,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Vegetable Dum Biryani',
    price: 16.99,
    category: 'Biryani',
    image: '🥘',
    prep_time: 22,
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Egg Biryani',
    price: 17.99,
    category: 'Biryani',
    image: '🍚',
    prep_time: 20,
    rating: 4.5,
  },

  // Appetizers (5)
  {
    id: 6,
    name: 'Chicken Tikka',
    price: 14.99,
    category: 'Appetizers',
    image: '🍗',
    prep_time: 15,
    rating: 4.7,
  },
  {
    id: 7,
    name: 'Paneer 65',
    price: 12.99,
    category: 'Appetizers',
    image: '🥘',
    prep_time: 12,
    rating: 4.6,
  },
  {
    id: 8,
    name: 'Lamb Seekh Kabab',
    price: 15.99,
    category: 'Appetizers',
    image: '🍗',
    prep_time: 15,
    rating: 4.8,
  },
  {
    id: 9,
    name: 'Chicken Lollipop',
    price: 13.99,
    category: 'Appetizers',
    image: '🍗',
    prep_time: 12,
    rating: 4.5,
  },
  {
    id: 10,
    name: 'Samosa (3pc)',
    price: 8.99,
    category: 'Appetizers',
    image: '🥟',
    prep_time: 8,
    rating: 4.4,
  },

  // Breads (4)
  {
    id: 11,
    name: 'Garlic Naan',
    price: 4.99,
    category: 'Breads',
    image: '🍞',
    prep_time: 5,
    rating: 4.7,
  },
  {
    id: 12,
    name: 'Butter Naan',
    price: 3.99,
    category: 'Breads',
    image: '🍞',
    prep_time: 5,
    rating: 4.6,
  },
  { id: 13, name: 'Roti', price: 2.99, category: 'Breads', image: '🍞', prep_time: 3, rating: 4.5 },
  {
    id: 14,
    name: 'Kulcha (Cheese)',
    price: 5.99,
    category: 'Breads',
    image: '🧀',
    prep_time: 8,
    rating: 4.8,
  },

  // Curries (4)
  {
    id: 15,
    name: 'Butter Chicken',
    price: 16.99,
    category: 'Curries',
    image: '🍛',
    prep_time: 20,
    rating: 4.9,
  },
  {
    id: 16,
    name: 'Paneer Tikka Masala',
    price: 14.99,
    category: 'Curries',
    image: '🍛',
    prep_time: 18,
    rating: 4.8,
  },
  {
    id: 17,
    name: 'Lamb Rogan Josh',
    price: 18.99,
    category: 'Curries',
    image: '🍛',
    prep_time: 25,
    rating: 4.7,
  },
  {
    id: 18,
    name: 'Chole Bhature',
    price: 9.99,
    category: 'Curries',
    image: '🥘',
    prep_time: 15,
    rating: 4.6,
  },

  // Desserts (4)
  {
    id: 19,
    name: 'Rasmalai',
    price: 5.99,
    category: 'Dessert',
    image: '🍮',
    prep_time: 2,
    rating: 4.8,
  },
  {
    id: 20,
    name: 'Gulab Jamun',
    price: 5.99,
    category: 'Dessert',
    image: '🍮',
    prep_time: 2,
    rating: 4.7,
  },
  {
    id: 21,
    name: 'Kheer',
    price: 6.99,
    category: 'Dessert',
    image: '🍚',
    prep_time: 2,
    rating: 4.6,
  },
  {
    id: 22,
    name: 'Ice Cream Kulfi',
    price: 4.99,
    category: 'Dessert',
    image: '🍦',
    prep_time: 1,
    rating: 4.9,
  },

  // Combos (3)
  {
    id: 23,
    name: 'Family Combo (4)',
    price: 49.99,
    category: 'Combos',
    image: '🎁',
    prep_time: 30,
    rating: 4.9,
  },
  {
    id: 24,
    name: 'Couple Combo (2)',
    price: 35.99,
    category: 'Combos',
    image: '🎁',
    prep_time: 25,
    rating: 4.8,
  },
  {
    id: 25,
    name: 'Party Pack (6)',
    price: 79.99,
    category: 'Combos',
    image: '🎉',
    prep_time: 35,
    rating: 4.9,
  },
];

// Mock orders for demo
const MOCK_ORDERS = [
  {
    id: 'ORD_001',
    items: [
      { id: 1, name: 'Chicken Dum Biryani', price: 18.99, quantity: 2 },
      { id: 6, name: 'Chicken Tikka', price: 14.99, quantity: 1 },
    ],
    total: 52.97,
    table: 'T1',
    captain: 'Arjun Singh',
    status: 'pending',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    rating: 0,
  },
  {
    id: 'ORD_002',
    items: [{ id: 2, name: 'Mutton Dum Biryani', price: 22.99, quantity: 1 }],
    total: 22.99,
    table: 'T2',
    captain: 'Arjun Singh',
    status: 'preparing',
    timestamp: new Date(Date.now() - 10 * 60000).toISOString(),
    rating: 0,
  },
  {
    id: 'ORD_003',
    items: [{ id: 23, name: 'Family Combo (4)', price: 49.99, quantity: 1 }],
    total: 49.99,
    table: 'T3',
    captain: 'Arjun Singh',
    status: 'served',
    timestamp: new Date(Date.now() - 35 * 60000).toISOString(),
    rating: 5,
    feedback: 'Excellent taste!',
  },
  {
    id: 'ORD_004',
    items: [
      { id: 15, name: 'Butter Chicken', price: 16.99, quantity: 2 },
      { id: 11, name: 'Garlic Naan', price: 4.99, quantity: 2 },
    ],
    total: 43.96,
    table: 'T4',
    captain: 'Arjun Singh',
    status: 'paid',
    timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
    rating: 4,
    feedback: 'Very good!',
  },
  {
    id: 'ORD_005',
    items: [{ id: 4, name: 'Vegetable Dum Biryani', price: 16.99, quantity: 3 }],
    total: 50.97,
    table: 'T1',
    captain: 'Arjun Singh',
    status: 'paid',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    rating: 4.5,
    feedback: 'Great quality!',
  },
];

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('bb_orders');
    return saved ? JSON.parse(saved) : MOCK_ORDERS;
  });

  const [ingredients, setIngredients] = useState(() => {
    const saved = localStorage.getItem('bb_ingredients');
    return saved ? JSON.parse(saved) : MOCK_INGREDIENTS;
  });

  const [menu, setMenu] = useState(() => {
    const saved = localStorage.getItem('bb_menu');
    if (saved) return JSON.parse(saved);

    const initialized = MOCK_MENU.map((item) => ({
      ...item,
      stock: 20,
      minStock: 5,
      manualAvailable: true,
      available: true,
      recipe: MENU_RECIPES[item.id] || [],
    }));

    return initialized;
  });

  useEffect(() => {
    localStorage.setItem('bb_menu', JSON.stringify(menu));
  }, [menu]);

  useEffect(() => {
    localStorage.setItem('bb_ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  const resolveMenuAvailability = (menuItem, ingredientState) => {
    if (!menuItem.manualAvailable) return false;
    if (menuItem.stock <= 0) return false;

    if (!menuItem.recipe || menuItem.recipe.length === 0) {
      return true;
    }

    return menuItem.recipe.every((r) => {
      const ingredient = ingredientState.find((ing) => ing.id === r.ingredientId);
      return ingredient && ingredient.stock >= r.qty;
    });
  };

  const refreshMenuAutoAvailability = (menuState, ingredientState) => {
    return menuState.map((item) => ({
      ...item,
      available: resolveMenuAvailability(item, ingredientState),
    }));
  };

  const createOrder = (items, tableId, captainName) => {
    // Validate menu item stock & availability
    const invalidItem = items.find((item) => {
      const menuItem = menu.find((m) => m.id === item.id);
      if (!menuItem) return true;
      if (!menuItem.available || menuItem.stock < item.quantity) return true;
      return false;
    });

    if (invalidItem) {
      return { error: 'Some items are unavailable or out of stock at menu or ingredient level.' };
    }

    // aggregate required ingredients per order
    const requiredIngredients = items.reduce((acc, item) => {
      const menuItem = menu.find((m) => m.id === item.id);
      if (!menuItem || !menuItem.recipe) return acc;

      menuItem.recipe.forEach((r) => {
        const sum = acc[r.ingredientId] || 0;
        acc[r.ingredientId] = sum + r.qty * item.quantity;
      });
      return acc;
    }, {});

    const missingIngredient = Object.entries(requiredIngredients).find(([ingredientId, qty]) => {
      const ing = ingredients.find((i) => i.id === Number(ingredientId));
      return !ing || ing.stock < qty;
    });

    if (missingIngredient) {
      const ingredientName =
        ingredients.find((i) => i.id === Number(missingIngredient[0]))?.name || 'Unknown';
      return { error: `Ingredient ${ingredientName} is out of stock for the requested quantity.` };
    }

    const updatedIngredients = ingredients.map((ing) => {
      const consumption = requiredIngredients[ing.id] || 0;
      if (consumption <= 0) return ing;
      return {
        ...ing,
        stock: Math.max(0, ing.stock - consumption),
      };
    });

    const updatedMenuItems = menu.map((menuItem) => {
      const orderItem = items.find((it) => it.id === menuItem.id);
      if (!orderItem) return menuItem;

      const newStock = Math.max(0, menuItem.stock - orderItem.quantity);
      return {
        ...menuItem,
        stock: newStock,
      };
    });

    const finalMenu = refreshMenuAutoAvailability(updatedMenuItems, updatedIngredients);
    setMenu(finalMenu);
    setIngredients(updatedIngredients);

    const newOrder = {
      id: 'ORD_' + Math.floor(Math.random() * 100000),
      items: items,
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      table: tableId,
      captain: captainName,
      status: 'pending',
      timestamp: new Date().toISOString(),
      rating: 0,
      feedback: '',
    };

    const newOrders = [...orders, newOrder];
    setOrders(newOrders);
    localStorage.setItem('bb_orders', JSON.stringify(newOrders));
    return newOrder;
  };

  const updateOrderStatus = (orderId, newStatus) => {
    const newOrders = orders.map((ord) =>
      ord.id === orderId ? { ...ord, status: newStatus } : ord
    );
    setOrders(newOrders);
    localStorage.setItem('bb_orders', JSON.stringify(newOrders));
  };

  const updateMenuStock = (menuItemId, newStock) => {
    const updated = menu.map((item) =>
      item.id === menuItemId ? { ...item, stock: newStock } : item
    );
    setMenu(refreshMenuAutoAvailability(updated, ingredients));
  };

  const toggleMenuAvailability = (menuItemId) => {
    const updated = menu.map((item) =>
      item.id === menuItemId ? { ...item, manualAvailable: !item.manualAvailable } : item
    );
    setMenu(refreshMenuAutoAvailability(updated, ingredients));
  };

  const updateIngredientStock = (ingredientId, newStock) => {
    const updatedIngredients = ingredients.map((item) =>
      item.id === ingredientId ? { ...item, stock: newStock } : item
    );
    setIngredients(updatedIngredients);
    setMenu((prevMenu) => refreshMenuAutoAvailability(prevMenu, updatedIngredients));
  };

  const importIngredientsCSV = (csvData) => {
    const lines = csvData.trim().split(/\r?\n/);
    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
    const hasIngredients = headers.includes('name') && headers.includes('stock');

    if (!hasIngredients) {
      return { error: 'CSV must include headers: name, stock, minstock, unit, reorderleaddays' };
    }

    const updatedIngredients = [...ingredients];
    for (let i = 1; i < lines.length; i++) {
      const row = lines[i].split(',').map((v) => v.trim());
      if (!row[0]) continue;
      const data = Object.fromEntries(headers.map((h, idx) => [h, row[idx] ?? '']));
      const existing = updatedIngredients.find(
        (ing) => ing.name.toLowerCase() === data.name.toLowerCase()
      );
      if (existing) {
        existing.stock = Number(data.stock) || existing.stock;
        existing.minStock = Number(data.minstock) || existing.minStock;
        existing.reorderLeadDays = Number(data.reorderleaddays) || existing.reorderLeadDays;
      } else {
        updatedIngredients.push({
          id: Math.max(0, ...updatedIngredients.map((i) => i.id)) + 1,
          name: data.name,
          unit: data.unit || 'unit',
          stock: Number(data.stock) || 0,
          minStock: Number(data.minstock) || 0,
          reorderLeadDays: Number(data.reorderleaddays) || 2,
        });
      }
    }

    setIngredients(updatedIngredients);
    setMenu((prevMenu) => refreshMenuAutoAvailability(prevMenu, updatedIngredients));
    return { success: true };
  };

  const exportIngredientsCSV = () => {
    const header = 'id,name,unit,stock,minStock,reorderLeadDays';
    const rows = ingredients.map(
      (ing) =>
        `${ing.id},${ing.name},${ing.unit},${ing.stock},${ing.minStock},${ing.reorderLeadDays}`
    );
    return [header, ...rows].join('\n');
  };

  const getReorderForecast = () => {
    const now = Date.now();
    const start =
      orders.length > 0 ? Math.min(...orders.map((o) => new Date(o.timestamp).getTime())) : now;
    const days = Math.max(1, (now - start) / (1000 * 60 * 60 * 24));

    const usageMap = {};
    orders.forEach((order) => {
      order.items.forEach((it) => {
        const menuItem = menu.find((m) => m.id === it.id);
        if (!menuItem || !menuItem.recipe) return;
        menuItem.recipe.forEach((r) => {
          usageMap[r.ingredientId] = (usageMap[r.ingredientId] || 0) + r.qty * it.quantity;
        });
      });
    });

    return ingredients.map((ing) => {
      const avgDailyUsage = usageMap[ing.id] ? usageMap[ing.id] / days : 0;
      const projectedRunDays = avgDailyUsage > 0 ? ing.stock / avgDailyUsage : Infinity;
      const daysUntilReorder = Number.isFinite(projectedRunDays)
        ? Math.max(0, projectedRunDays - ing.reorderLeadDays)
        : Infinity;
      return {
        ...ing,
        avgDailyUsage,
        projectedRunDays,
        daysUntilReorder,
        needsReorder: ing.stock <= ing.minStock || daysUntilReorder <= 0,
      };
    });
  };

  const getFinancialMetrics = () => {
    const costOfGoods = orders.reduce((acc, order) => {
      const ingredientCost = order.items.reduce((itemCost, item) => {
        const menuItem = menu.find((m) => m.id === item.id);
        if (!menuItem || !menuItem.recipe) return itemCost;
        return menuItem.recipe.reduce((recipeCost, rec) => {
          const ingredient = ingredients.find((ing) => ing.id === rec.ingredientId);
          if (!ingredient) return recipeCost;
          return recipeCost + rec.qty * (ingredient.unitCost || 0) * item.quantity;
        }, itemCost);
      }, 0);
      return acc + ingredientCost;
    }, 0);

    const revenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const profit = revenue - costOfGoods;
    const pcr = revenue > 0 ? (profit / revenue) * 100 : 0;

    return {
      revenue,
      costOfGoods,
      profit,
      profitMargin: pcr,
    };
  };

  const rateOrder = (orderId, rating, feedback) => {
    const newOrders = orders.map((ord) =>
      ord.id === orderId ? { ...ord, rating, feedback } : ord
    );
    setOrders(newOrders);
    localStorage.setItem('bb_orders', JSON.stringify(newOrders));
  };

  const deleteOrder = (orderId) => {
    const newOrders = orders.filter((ord) => ord.id !== orderId);
    setOrders(newOrders);
    localStorage.setItem('bb_orders', JSON.stringify(newOrders));
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        menu,
        ingredients,
        createOrder,
        updateOrderStatus,
        deleteOrder,
        rateOrder,
        updateMenuStock,
        toggleMenuAvailability,
        updateIngredientStock,
        importIngredientsCSV,
        exportIngredientsCSV,
        getReorderForecast,
        getFinancialMetrics,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
