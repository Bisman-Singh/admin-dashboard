# Admin Dashboard

A comprehensive admin dashboard built with React and Vite.

## Features

### Pages
- **Dashboard**: KPI cards (users, revenue, orders, conversion rate) with trend indicators, revenue line chart, orders by category bar chart, recent orders table, recent users table
- **Users**: Data table with search, sort, and pagination for 50 mock users
- **Products**: Product grid with full CRUD (create, read, update, delete)
- **Orders**: Order list with status badges (pending/processing/shipped/delivered) and filtering
- **Analytics**: Multiple charts — revenue trend area chart, orders by category bar chart, traffic sources pie chart, daily visitors line chart, monthly orders volume
- **Settings**: Profile form, theme toggle (dark/light), notification preferences

### UI/UX
- Responsive sidebar navigation (collapses to icons on mobile)
- Dark theme with cyan accent (#06b6d4) by default
- Working light theme toggle
- Realistic mock data (50 users, 30 products, 100 orders)

## Tech Stack

- React 18+ with hooks and functional components
- Vite for build tooling
- Recharts for data visualization
- CSS custom properties for theming

## Getting Started

```bash
npm install
npm run dev
```
