const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'David', 'Elizabeth', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Christopher', 'Karen', 'Charles', 'Lisa', 'Daniel', 'Nancy', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley', 'Steven', 'Dorothy', 'Paul', 'Kimberly', 'Andrew', 'Emily', 'Joshua', 'Donna', 'Kenneth', 'Michelle', 'Kevin', 'Carol', 'Brian', 'Amanda', 'George', 'Melissa', 'Timothy', 'Deborah']
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts']
const roles = ['Admin', 'User', 'Editor', 'Viewer', 'Manager']
const statuses = ['active', 'inactive', 'suspended']
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose']

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min }

export const users = Array.from({ length: 50 }, (_, i) => {
  const first = firstNames[i]
  const last = lastNames[i]
  return {
    id: i + 1,
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}@example.com`,
    role: randomItem(roles),
    status: randomItem(statuses),
    city: randomItem(cities),
    joinDate: randomDate(new Date(2022, 0, 1), new Date(2025, 11, 31)).toISOString(),
    avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${first}+${last}&backgroundColor=06b6d4`,
    spent: randomInt(50, 15000),
  }
})

const productNames = [
  'Wireless Headphones', 'Mechanical Keyboard', 'Gaming Mouse', 'USB-C Hub', '4K Monitor',
  'Laptop Stand', 'Webcam HD', 'Desk Lamp', 'Mousepad XL', 'External SSD',
  'Bluetooth Speaker', 'Noise Cancelling Earbuds', 'Smart Watch', 'Phone Stand', 'Cable Organizer',
  'Power Bank', 'Ring Light', 'Microphone', 'Stream Deck', 'Ergonomic Chair',
  'Standing Desk', 'Monitor Arm', 'Keyboard Wrist Rest', 'Screen Protector', 'Wireless Charger',
  'USB Flash Drive', 'HDMI Cable', 'Ethernet Adapter', 'Drawing Tablet', 'VR Headset',
]
const categories = ['Electronics', 'Accessories', 'Audio', 'Peripherals', 'Furniture', 'Storage']

export const products = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: productNames[i],
  category: randomItem(categories),
  price: parseFloat((Math.random() * 500 + 9.99).toFixed(2)),
  stock: randomInt(0, 200),
  rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
  sales: randomInt(10, 5000),
  image: `https://api.dicebear.com/7.x/shapes/svg?seed=${productNames[i]}`,
}))

const orderStatuses = ['pending', 'processing', 'shipped', 'delivered']
const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer', 'Crypto']

export const orders = Array.from({ length: 100 }, (_, i) => {
  const user = randomItem(users)
  const numItems = randomInt(1, 4)
  const items = Array.from({ length: numItems }, () => {
    const product = randomItem(products)
    return { productId: product.id, name: product.name, quantity: randomInt(1, 3), price: product.price }
  })
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return {
    id: `ORD-${String(i + 1).padStart(4, '0')}`,
    userId: user.id,
    customerName: user.name,
    email: user.email,
    items,
    total: parseFloat(total.toFixed(2)),
    status: randomItem(orderStatuses),
    paymentMethod: randomItem(paymentMethods),
    date: randomDate(new Date(2025, 0, 1), new Date(2026, 2, 8)).toISOString(),
    shippingCity: randomItem(cities),
  }
})

export const monthlyRevenue = [
  { month: 'Jan', revenue: 42000, orders: 320 },
  { month: 'Feb', revenue: 38000, orders: 290 },
  { month: 'Mar', revenue: 51000, orders: 410 },
  { month: 'Apr', revenue: 47000, orders: 380 },
  { month: 'May', revenue: 53000, orders: 420 },
  { month: 'Jun', revenue: 49000, orders: 390 },
  { month: 'Jul', revenue: 61000, orders: 480 },
  { month: 'Aug', revenue: 58000, orders: 460 },
  { month: 'Sep', revenue: 55000, orders: 430 },
  { month: 'Oct', revenue: 67000, orders: 520 },
  { month: 'Nov', revenue: 72000, orders: 580 },
  { month: 'Dec', revenue: 84000, orders: 650 },
]

export const ordersByCategory = [
  { category: 'Electronics', orders: 2400 },
  { category: 'Accessories', orders: 1800 },
  { category: 'Audio', orders: 1500 },
  { category: 'Peripherals', orders: 1200 },
  { category: 'Furniture', orders: 800 },
  { category: 'Storage', orders: 600 },
]

export const trafficSources = [
  { name: 'Direct', value: 35 },
  { name: 'Organic Search', value: 28 },
  { name: 'Social Media', value: 18 },
  { name: 'Referral', value: 12 },
  { name: 'Email', value: 7 },
]

export const dailyVisitors = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  visitors: randomInt(800, 3500),
  pageViews: randomInt(2000, 10000),
}))
