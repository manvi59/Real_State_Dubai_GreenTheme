"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { MessageSquare, Mail, Phone } from "lucide-react";
import  Button  from "../../components/ui/button";

export default function InquiriesPage() {
  const [inquiries] = useState([
    {
      id: 1,
      buyerName: "John Doe",
      email: "john@example.com",
      phone: "+971 50 123 4567",
      property: "Luxury Modern Villa",
      message: "Is this villa still available?",
      date: "2025-10-24",
    },
    {
      id: 2,
      buyerName: "Ayesha Khan",
      email: "ayesha@example.com",
      phone: "+971 55 654 7890",
      property: "Downtown Apartment",
      message: "Can I schedule a visit this weekend?",
      date: "2025-10-22",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Buyer Inquiries</h1>
      <div className="space-y-6">
        {inquiries.map((inq) => (
          <Card key={inq.id}>
            <CardHeader className="flex justify-between">
              <div>
                <CardTitle>{inq.property}</CardTitle>
                <p className="text-sm text-gray-500">
                  Inquiry from {inq.buyerName} on {inq.date}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{inq.message}</p>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" /> Email
                </Button>
                <Button variant="outline">
                  <Phone className="w-4 h-4 mr-2" /> Call
                </Button>
                <Button variant="default" className="bg-green-600">
                  <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
