import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  MapPin,
  Package,
  Clock,
  CheckCircle,
  ChevronRight,
  Home,
  Building,
  Plus,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('active'); // active, history, addresses

  const mockActiveOrders = [
    {
      id: 'BOX-12948',
      status: 'preparing',
      items: '2x Special Chicken Biryani',
      total: '$31.98',
      eta: '12-15 min',
    },
  ];

  const mockHistory = [
    {
      id: 'BOX-09284',
      date: 'Oct 12, 2026',
      total: '$25.99',
      items: 'Family Combo',
      status: 'delivered',
    },
  ];

  const mockAddresses = [
    { id: 1, label: 'Home', address: '742 Evergreen Terrace, Springfield', type: 'home' },
  ];

  return (
    <div className="min-h-screen bg-bg-main text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold font-heading mb-3">Your Movement Hub</h1>
            <p className="text-text-muted font-medium">Tracking your flavors across the city.</p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-2xl">
            {['active', 'history', 'addresses'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl transition-all text-xs font-bold uppercase tracking-widest ${activeTab === tab ? 'bg-primary text-white' : 'text-text-muted hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'active' && (
            <motion.div
              key="active"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {mockActiveOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-secondary/40 p-10 rounded-3xl border border-white/5 shadow-2xl overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 py-2 px-8 bg-primary text-black font-bold uppercase tracking-widest text-[10px] rounded-bl-2xl">
                    Live Tracking
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                          <Truck size={32} />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">
                            Order Identifier
                          </p>
                          <p className="text-xl font-bold font-heading">{order.id}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest leading-none mb-2">
                          Artisan Status
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <span className="text-sm font-bold text-primary uppercase">
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <Package size={18} className="text-primary" />
                        <span>{order.items}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm font-medium">
                        <Clock size={18} className="text-primary" />
                        <span>
                          Arrival in approx <span className="text-primary">{order.eta}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-6">
                      <div className="w-40 h-40 rounded-full border-4 border-white/5 flex items-center justify-center shrink-0 p-4">
                        <div className="w-full h-full rounded-full border-4 border-primary border-t-white/10 animate-spin flex items-center justify-center">
                          <span className="text-xs font-black uppercase tracking-widest -rotate-90">
                            Hot
                          </span>
                        </div>
                      </div>
                      <button className="btn-primary w-full py-4 text-xs font-black uppercase tracking-widest">
                        Contact Driver Hub
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'history' && (
            <motion.div
              key="history"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {mockHistory.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center gap-8 bg-secondary/30 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-text-muted group-hover:bg-primary/20 group-hover:text-primary transition-all">
                    <CheckCircle size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold mb-1">{order.items}</p>
                    <p className="text-xs text-text-muted uppercase tracking-widest">
                      {order.date} • {order.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-primary font-heading mb-1">
                      {order.total}
                    </p>
                    <button className="text-[10px] font-bold text-text-muted uppercase tracking-widest hover:text-white flex items-center gap-1 justify-end">
                      Re-Order Hub <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'addresses' && (
            <motion.div
              key="addresses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {mockAddresses.map((addr) => (
                <div
                  key={addr.id}
                  className="bg-secondary/40 p-8 rounded-3xl border border-white/5 relative group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {addr.type === 'home' ? <Home size={24} /> : <Building size={24} />}
                    </div>
                    <h3 className="text-xl font-bold">{addr.label}</h3>
                  </div>
                  <p className="text-sm text-text-muted font-medium mb-8">{addr.address}</p>
                  <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                    Revise Protocol
                  </button>
                </div>
              ))}
              <button className="h-full min-h-[160px] border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-4 text-text-muted hover:border-primary/50 hover:text-primary transition-all">
                <Plus size={32} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  New Coordinate Hub
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OrderHistory;
