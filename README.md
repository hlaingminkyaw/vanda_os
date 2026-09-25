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

## 📌 Development Guidelines

1. **Documentation Location**: Always place all design, architecture, specification, and reference documents in the [`docs/`](docs/) directory.
2. **README Maintenance**: Whenever code or project features are updated, update `README.md` as necessary to reflect the latest changes and instructions.
