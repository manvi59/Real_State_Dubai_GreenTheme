
// "use client"
// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
// import  Button  from '../components/ui/button';
// import { Input } from '../components/ui/input';
// import { Textarea } from '../components/ui/textarea';
// import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

// export default function Contact({ onPageChange }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//     // Reset form
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       subject: '',
//       message: ''
//     });
//     alert('Thank you for your message! We will get back to you soon.');
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Office Address',
//       details: ['123 Business District', 'Dubai Marina, Dubai', 'United Arab Emirates']
//     },
//     {
//       icon: Phone,
//       title: 'Phone Numbers',
//       details: ['+971 4 123 4567', '+971 50 987 6543', 'Toll-free: 800-PROPERTY']
//     },
//     {
//       icon: Mail,
//       title: 'Email Addresses',
//       details: ['info@propertyhub.com', 'sales@propertyhub.com', 'support@propertyhub.com']
//     },
//     {
//       icon: Clock,
//       title: 'Business Hours',
//       details: ['Monday - Friday: 9:00 AM - 8:00 PM', 'Saturday: 10:00 AM - 6:00 PM', 'Sunday: 12:00 PM - 4:00 PM']
//     }
//   ];

//   const offices = [
//     {
//       name: 'Dubai Marina Office',
//       address: '123 Business District, Dubai Marina',
//       phone: '+971 4 123 4567',
//       email: 'marina@propertyhub.com'
//     },
//     {
//       name: 'Downtown Dubai Office',
//       address: '456 Business Bay, Downtown',
//       phone: '+971 4 234 5678',
//       email: 'downtown@propertyhub.com'
//     },
//     {
//       name: 'Abu Dhabi Office',
//       address: '789 Capital Center, Abu Dhabi',
//       phone: '+971 2 345 6789',
//       email: 'abudhabi@propertyhub.com'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Get in touch with our team of real estate experts. We're here to help you with all your property needs.
//           </p>          
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div>
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <Send className="w-5 h-5 mr-2" />
//                   Send us a Message
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Full Name *</label>
//                       <Input
//                         placeholder="Your full name"
//                         value={formData.name}
//                         onChange={(e) => handleInputChange('name', e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Email Address *</label>
//                       <Input
//                         type="email"
//                         placeholder="your.email@example.com"
//                         value={formData.email}
//                         onChange={(e) => handleInputChange('email', e.target.value)}
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Phone Number</label>
//                       <Input
//                         type="tel"
//                         placeholder="+971 50 123 4567"
//                         value={formData.phone}
//                         onChange={(e) => handleInputChange('phone', e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-2">Subject *</label>
//                       <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a subject" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="buying">Property Buying Inquiry</SelectItem>
//                           <SelectItem value="selling">Property Selling Inquiry</SelectItem>
//                           <SelectItem value="renting">Property Rental Inquiry</SelectItem>
//                           <SelectItem value="investment">Investment Opportunity</SelectItem>
//                           <SelectItem value="valuation">Property Valuation</SelectItem>
//                           <SelectItem value="general">General Inquiry</SelectItem>
//                           <SelectItem value="support">Customer Support</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>

                    
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Message *</label>
//                     <Textarea
//                       placeholder="Tell us about your requirements or questions..."
//                       rows={6}
//                       value={formData.message}
//                       onChange={(e) => handleInputChange('message', e.target.value)}
//                       required
//                     />
//                   </div>
                  
//                   <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>


//             {/* Map Placeholder */}
//             <Card style={{marginTop:"24px"}}>
//               <CardHeader>
//                 <CardTitle>Find Us</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center" >
//                   <div className="text-center text-gray-500">
//                     <MapPin className="w-12 h-12 mx-auto mb-2" />
//                     <p>Interactive Map</p>
//                     <p className="text-sm">Dubai Marina Office Location</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             {/* Contact Details */}
//             <div className="grid grid-cols-1 gap-6">
//               {contactInfo.map((info, index) => (
//                 <Card key={index}>
//                   <CardContent className="p-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="bg-green-100 p-3 rounded-lg">
//                         <info.icon className="w-6 h-6 text-green-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
//                         <div className="space-y-1">
//                           {info.details.map((detail, idx) => (
//                             <p key={idx} className="text-gray-600">{detail}</p>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Office Locations */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Office Locations</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {offices.map((office, index) => (
//               <Card key={index} className="hover:shadow-lg transition-shadow">
//                 <CardContent className="p-6">
//                   <h3 className="font-semibold text-lg text-gray-900 mb-4">{office.name}</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-start space-x-3">
//                       <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
//                       <span className="text-gray-600">{office.address}</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Phone className="w-5 h-5 text-green-600" />
//                       <span className="text-gray-600">{office.phone}</span>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <Mail className="w-5 h-5 text-green-600" />
//                       <span className="text-gray-600">{office.email}</span>
//                     </div>
//                   </div>
//                   <Button variant="outline" className="w-full mt-4">
//                     Get Directions
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-16">
//           <Card>
//             <CardHeader>
//               <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
//             </CardHeader>
//             <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">What areas do you cover?</h4>
//                   <p className="text-gray-600">We cover all major areas in Dubai, Abu Dhabi, and Sharjah, including prime locations like Downtown Dubai, Dubai Marina, Palm Jumeirah, and Business Bay.</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">Do you offer property management services?</h4>
//                   <p className="text-gray-600">Yes, we provide comprehensive property management services including tenant screening, rent collection, maintenance coordination, and regular property inspections.</p>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">How can I schedule a property viewing?</h4>
//                   <p className="text-gray-600">You can schedule a viewing by calling us, sending an email, or using our online booking system. We offer flexible viewing times including evenings and weekends.</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900 mb-2">What is your commission structure?</h4>
//                   <p className="text-gray-600">Our commission rates are competitive and transparent. Please contact us directly to discuss the specific rates for your property type and transaction.</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Button from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "123 Business District",
        "Dubai Marina, Dubai",
        "United Arab Emirates",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+971 4 123 4567", "+971 50 987 6543", "Toll-free: 800-PROPERTY"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@propertyhub.com",
        "sales@propertyhub.com",
        "support@propertyhub.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 8:00 PM",
        "Sat: 10:00 AM - 6:00 PM",
        "Sun: 12:00 PM - 4:00 PM",
      ],
    },
  ];

  const offices = [
    {
      name: "Dubai Marina Office",
      address: "123 Business District, Dubai Marina",
      phone: "+971 4 123 4567",
      email: "marina@propertyhub.com",
    },
    {
      name: "Downtown Dubai Office",
      address: "456 Business Bay, Downtown",
      phone: "+971 4 234 5678",
      email: "downtown@propertyhub.com",
    },
    {
      name: "Abu Dhabi Office",
      address: "789 Capital Center, Abu Dhabi",
      phone: "+971 2 345 6789",
      email: "abudhabi@propertyhub.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      {/* <div className="bg-gradient-to-r from-green-500 to-green-700 py-16 text-center text-white shadow-md">
        <div className="position-relative">
          <img src="/contact.jpg" className="w-100 h-100"/>
        <div className="position-absolute justify-content-center">

        <h1 className="text-5xl font-bold mb-3">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Connect with our expert real estate consultants. We’re here to help
          you find your dream property.
        </p>
        </div>
        </div>
      </div> */}
      <div className="relative w-full h-[400px]">
  {/* Background Image */}
      <img
        src="/contact4.jpg"
        alt="Contact Us"
        className="w-full h-full object-cover "
      />

  {/* Overlay Gradient */}
  <div className="absolute "></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">
      Contact Us
    </h1>
    <p className="text-lg text-gray-100 max-w-2xl mx-auto">
      Connect with our expert real estate consultants. We’re here to help
      you find your dream property.
    </p>
  </div>
</div>


      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="shadow-lg border border-gray-100">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="flex items-center text-gray-800 text-xl">
              <Send className="w-5 h-5 mr-2 text-green-600" /> Send us a Message
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange("subject", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">
                        Property Buying Inquiry
                      </SelectItem>
                      <SelectItem value="selling">
                        Property Selling Inquiry
                      </SelectItem>
                      <SelectItem value="renting">
                        Property Rental Inquiry
                      </SelectItem>
                      <SelectItem value="investment">
                        Investment Opportunity
                      </SelectItem>
                      <SelectItem value="valuation">
                        Property Valuation
                      </SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message *
                </label>
                <Textarea
                  placeholder="Tell us about your requirements or questions..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-xl shadow-md transition-transform hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info Cards */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <info.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((d, i) => (
                    <p key={i} className="text-gray-600 text-sm">
                      {d}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Office Locations
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {offices.map((office, i) => (
            <Card key={i} className="hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {office.name}
                </h3>
                <div className="space-y-3 text-gray-600 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-green-600 mt-1" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>{office.email}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-green-500 text-green-600 hover:bg-green-50"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
