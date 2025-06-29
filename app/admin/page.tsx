"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, ShoppingCart, Package, DollarSign, TrendingUp, TrendingDown, Eye } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$12,345",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
  },
  {
    title: "Total Users",
    value: "1,234",
    change: "+15.3%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Total Products",
    value: "89",
    change: "-2.1%",
    trend: "down",
    icon: Package,
  },
]

const recentOrders = [
  {
    id: "KS-12345",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$1,200",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "KS-12344",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$850",
    status: "processing",
    date: "2024-01-14",
  },
  {
    id: "KS-12343",
    customer: "Bob Johnson",
    email: "bob@example.com",
    amount: "$450",
    status: "shipped",
    date: "2024-01-13",
  },
  {
    id: "KS-12342",
    customer: "Alice Brown",
    email: "alice@example.com",
    amount: "$2,800",
    status: "completed",
    date: "2024-01-12",
  },
  {
    id: "KS-12341",
    customer: "Charlie Wilson",
    email: "charlie@example.com",
    amount: "$350",
    status: "cancelled",
    date: "2024-01-11",
  },
]

const topProducts = [
  {
    name: "Abstract Harmony",
    sales: 45,
    revenue: "$54,000",
    stock: 12,
  },
  {
    name: "Digital Dreams",
    sales: 32,
    revenue: "$14,400",
    stock: 8,
  },
  {
    name: "Urban Reflections",
    sales: 28,
    revenue: "$22,400",
    stock: 15,
  },
  {
    name: "Metamorphosis Series #1",
    sales: 15,
    revenue: "$42,000",
    stock: 3,
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "processing":
      return "bg-yellow-100 text-yellow-800"
    case "shipped":
      return "bg-blue-100 text-blue-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Kashish! Here's what's happening with your store.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                )}
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest orders from your customers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-xs text-gray-600">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(order.status)} variant="secondary">
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best performing products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-xs text-gray-600">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                    <p className="text-xs text-gray-600">Stock: {product.stock}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
