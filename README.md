# Online Shop

An e-commerce platform featuring multi-channel inventory management, mobile/web customer experience, order fulfillment, and delivery logistics.

---

## 📚 Project Documentation

All system documentation, architecture diagrams, and specification flows are stored in the [`docs/`](docs/) directory:

- [**Visual System Flow**](docs/ecommerce-visual-flow.png) (`docs/ecommerce-visual-flow.png`): High-level overview of the entire e-commerce journey.
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

A modern, mobile-only React e-commerce application located in [`mobile_demo/`](mobile_demo/) modeling the end-to-end shopping and order lifecycle from [`docs/ecommerce-visual-flow.png`](docs/ecommerce-visual-flow.png).

### Key Features & Design Philosophy
- **Designer-Crafted UI**: Warm, balanced neutral palette with controlled terracotta accents, avoiding oversaturated colors, with smooth transitions and subtle elevation.
- **Mobile Phone Frame Simulator**: On desktop, renders inside an elegant phone mockup with status bar, dynamic island, and a full-screen toggle; automatically responsive on mobile viewports.
- **Zero API Dependency**: Powered entirely by rich, structured JSON dummy data in [`dummyData.js`](mobile_demo/src/data/dummyData.js) (products, categories, stock, delivery carriers, and sample orders).
- **Multi-Location Inventory Tracking**: Displays real-time breakdown of **Warehouse Stock** vs. **Physical Shop Stock** on product pages as specified in the architecture.
- **Complete Visual Flow Implementation**:
  1. *Browse & Select*: Hero banner carousel, categories, flash deals with live countdown & progress bars, search, and dual-column grid.
  2. *Checkout*: Saved delivery address selection, courier options (Standard Free vs Priority Courier).
  3. *Payment*: Cash on Delivery (COD), Credit/Debit Card, or QR Digital Wallet.
  4. *Order Confirmed & Stock Deduction*: Automatically reserves stock and generates order ID.
  5. *Estimated Arrival Date*: Calculated delivery window provided by shop/courier.
  6. *In Delivery*: Tracking number, courier assignment, and active status pill.
  7. *Completed*: Permanent status ledger with past order history.


---

## 📌 Development Guidelines

1. **Documentation Location**: Always place all design, architecture, specification, and reference documents in the [`docs/`](docs/) directory.
2. **README Maintenance**: Whenever code or project features are updated, update `README.md` as necessary to reflect the latest changes and instructions.
3. **Feature Task Creation**: When adding new features, always create a Backlog.md task first (e.g., `npx backlog task create "Feature title"`) before implementation to specify scope and acceptance criteria.
4. **Move Completed Tasks**: Whenever a task is marked as Done/completed, always move the task file into the suitable completed folder (`backlog/completed/`) so active task directories stay organized.


