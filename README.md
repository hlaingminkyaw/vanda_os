# Online Shop

An e-commerce platform featuring multi-channel inventory management, mobile/web customer experience, order fulfillment, and delivery logistics.

---

## 📚 Project Documentation

All system documentation, architecture diagrams, and specification flows are stored in the [`docs/`](docs/) directory:

- [**Visual Flow Architecture**](docs/visual%20flow.png) (`docs/visual flow.png`): High-level visual map covering Customer Mobile App Flow (7 steps), Admin Operations Flow, Admin Modules, and Delivery Flow.
- [**Complete Mermaid Flowchart**](docs/ecommerce_complete_mermaid_flow.mermaid) (`docs/ecommerce_complete_mermaid_flow.mermaid`): Detailed state and process logic covering:
  - Product & Inventory Setup (Warehouse Stock & Physical Shop Stock)
  - Customer Experience (Browse, Filter, Cart, Checkout)
  - Payment & Order Processing
  - Warehouse Fulfillment & Dispatch
  - Delivery & Return Management
- [**All Modules Swimlane Flow**](docs/ecommerce_all_modules_swimlane_flow.drawio) (`docs/ecommerce_all_modules_swimlane_flow.drawio`): Cross-functional swimlane diagram in Draw.io format.
- [**Full Flow Swimlane**](docs/ecommerce_swimlane_full_flow.drawio) (`docs/ecommerce_swimlane_full_flow.drawio`): Detailed operational swimlane diagram.

---

## 📋 Task & Project Management

This repository uses [Backlog.md](https://github.com/MrLesk/Backlog.md) for local-first, markdown-native task tracking.

### Useful Commands

```bash
# Start the Mobile App (mobile_demo)
npm run mobile:dev

# Build the Mobile App
npm run mobile:build

# Open interactive terminal Kanban board
npm run board
# or: npx backlog board

# Open local web Kanban board
npm run browser
# or: npx backlog browser

# View project statistics and health metrics
npx backlog overview

# Create a new task
npx backlog task create "Task title"
```

---

## 📱 Mobile App Demo (`mobile_demo`)

A modern React mobile demo located in [`mobile_demo/`](mobile_demo/) featuring the **Vanda** brand identity, warm amber palette, persistent light/dark theme switcher, and the end-to-end shopping & order lifecycle with Home, Categories, Cart, Orders, and Profile.

### Customer Mobile App Flow Scope (7 Steps)
1. **Browse & Select**: Customer browses products, filters by category, searches, and adds items to cart.
2. **Checkout**: Customer selects delivery address, chooses payment method, and applies discount (if available).
3. **Make Payment**: Customer selects between **Online Payment** and **Cash on Delivery (COD)**.
4. **Order Confirmed**: Customer receives order confirmation with order details while the shop verifies stock and prepares items.
5. **View Estimated Arrival Date**: Delivery service provides estimated arrival date to shop; shop enters it into the system so the customer can view the estimated date.
6. **Order In Delivery**: Customer sees order status "In Delivery" (with estimated arrival date).
7. **Order Completed**: Once the item arrives (confirmed with delivery service), shop admin closes the order.

### Delivery Flow Rule
As specified in the visual flow:
- Admin arranges with delivery service manually.
- Delivery service provides estimated arrival date.
- Admin enters estimated arrival date into the system.
- Customer only sees the estimated arrival date.
- When the item arrives, admin inquires the delivery service and closes the order.


---

## 📌 Development Guidelines

1. **Documentation Location**: Always place all design, architecture, specification, and reference documents in the [`docs/`](docs/) directory.
2. **README Maintenance**: Whenever code or project features are updated, update `README.md` as necessary to reflect the latest changes and instructions.
3. **Feature Task Creation**: When adding new features, always create a Backlog.md task first (e.g., `npx backlog task create "Feature title"`) before implementation to specify scope and acceptance criteria.
4. **Move Completed Tasks**: Whenever a task is marked as Done/completed, always move the task file into the suitable completed folder (`backlog/completed/`) so active task directories stay organized.


