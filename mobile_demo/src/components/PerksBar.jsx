import React from 'react';
import { Truck, ShieldCheck, Banknote } from 'lucide-react';

export default function PerksBar() {
  return (
    <div className="service-perks-bar">
      <div className="service-perk-item">
        <Banknote size={15} className="service-perk-icon" />
        <span>Cash On Delivery</span>
      </div>
      <div className="service-perk-item">
        <Truck size={15} className="service-perk-icon" />
        <span>Fast Dispatch</span>
      </div>
      <div className="service-perk-item">
        <ShieldCheck size={15} className="service-perk-icon" />
        <span>Verified Stock</span>
      </div>
    </div>
  );
}
