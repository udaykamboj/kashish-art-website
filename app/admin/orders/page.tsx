"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Search, Eye, Edit, Truck, X } from "lucide-react"

const orders = [
  {
    id: "KS-12345",
    customer: "John Doe",
    email: "john@example.com",
    items: 2,
    total: "$1,200",
    status: "completed",
    paymentStatus: "paid",
    date: "2024-01-15",
    shippingAddress: "123 Main St, New York, NY 10001",
    items_detail: [{ name: "Abstract Harmony", price: "$1,200", quantity: 1 }],
  },
  {
    id: "KS-12344",
    customer: "Jane Smith",
    email: "jane@example.com",
    items: 1,
    total: "$850",
    status: "processing",
    paymentStatus: "paid",
    date: "2024-01-14",
    shippingAddress: "456 Oak Ave, Los Angeles, CA 90210",
    items_detail: [
      { name: "Digital Dreams", price: "$450", quantity: 1 },
      { name: "Urban Reflections", price: "$400", quantity: 1 },
    ],
  },
  {
    id: "KS-12343",
    customer: "Bob Johnson",
    email: "bob@example.com",
    items: 1,
    total: "$450",
    status: "shipped",
    paymentStatus: "paid",
    date: "2024-01-13",
    shippingAddress: "789 Pine St, Chicago, IL 60601",
    items_detail: [{ name: "Minimalist Study", price: "$450", quantity: 1 }],
  },
  {
    id: "KS-12342",
    customer: "Alice Brown",
    email: "alice@example.com",
    items: 1,
    total: "$2,800",
    status: "completed",
    paymentStatus: "paid",
    date: "2024-01-12",
    shippingAddress: "321 Elm St, Miami, FL 33101",
    items_detail: [{ name: "Metamorphosis Series #1", price: "$2,800", quantity: 1 }],
  },
  {
    id: "KS-12341",
    customer: "Charlie Wilson",
    email: "charlie@example.com",
    items: 1,
    total: "$350",
    status: "cancelled",
    paymentStatus: "refunded",
    date: "2024-01-11",
    shippingAddress: "654 Maple Ave, Seattle, WA 98101",
    items_detail: [{ name: "Color Field Exploration", price: "$350", quantity: 1 }],
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
    case "pending":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

function getPaymentStatusColor(status: string) {
  switch (status) {
    case "paid":
      return "bg-green-100 text-green-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    case "failed":
      return "bg-red-100 text-red-800"
    case "refunded":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-gray-600">Manage customer orders and fulfillment</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Payment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Payments</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-gray-600">{order.email}</p>
                  </div>
                </TableCell>
                <TableCell>{order.items} items</TableCell>
                <TableCell className="font-medium">{order.total}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(order.status)} variant="secondary">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getPaymentStatusColor(order.paymentStatus)} variant="secondary">
                    {order.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => {
                          setSelectedOrder(order)
                          setIsViewDialogOpen(true)
                        }}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Update Status
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Truck className="mr-2 h-4 w-4" />
                        Track Shipment
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <X className="mr-2 h-4 w-4" />
                        Cancel Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>{selectedOrder && `Order ${selectedOrder.id} details`}</DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6">
              {/* Customer Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Customer Information</h4>
                  <p className="text-sm">{selectedOrder.customer}</p>
                  <p className="text-sm text-gray-600">{selectedOrder.email}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Order Status</h4>
                  <div className="space-y-2">
                    <Badge className={getStatusColor(selectedOrder.status)} variant="secondary">
                      {selectedOrder.status}
                    </Badge>
                    <Badge className={getPaymentStatusColor(selectedOrder.paymentStatus)} variant="secondary">
                      {selectedOrder.paymentStatus}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h4 className="font-medium mb-2">Shipping Address</h4>
                <p className="text-sm text-gray-600">{selectedOrder.shippingAddress}</p>
              </div>

              {/* Order Items */}
              <div>
                <h4 className="font-medium mb-2">Order Items</h4>
                <div className="border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedOrder.items_detail.map((item: any, index: number) => (
                        <TableRow key={index}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Amount:</span>
                  <span className="text-lg font-bold">{selectedOrder.total}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
