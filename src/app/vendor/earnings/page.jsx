"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { DollarSign, TrendingUp } from "lucide-react";

export default function EarningsPage() {
  const earnings = {
    totalEarnings: 48500,
    thisMonth: 8200,
    pending: 1200,
    soldProperties: 18,
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Earnings Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-green-600">
              AED {earnings.totalEarnings.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-blue-600">
              AED {earnings.thisMonth.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-orange-600">
              AED {earnings.pending.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sold Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold text-gray-700">
              {earnings.soldProperties}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <CardTitle>Monthly Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Your earnings have increased by <span className="text-green-600 font-semibold">12%</span> compared to last month.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
