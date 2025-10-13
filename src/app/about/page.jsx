import { Users, Target, Award, TrendingUp } from 'lucide-react';
import Button  from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Image from 'next/image';
// import { ImageWithFallback } from './figma/ImageWithFallback';

export default function page() {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '5,000+' },
    { icon: TrendingUp, label: 'Properties Sold', value: '10,000+' },
    { icon: Award, label: 'Awards Won', value: '25' },
    { icon: Target, label: 'Years Exnperience', value: '15' }
  ];

  

  const teamMembers = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Senior Real Estate Consultant',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612d9c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150',
      experience: '8 years experience'
    },
    {
      id: '2',
      name: 'Ahmed Al-Mansouri',
      role: 'Property Investment Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150',
      experience: '12 years experience'
    },
    {
      id: '3',
      name: 'Maria Rodriguez',
      role: 'Commercial Real Estate Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150',
      experience: '10 years experience'
    },
    {
      id: '4',
      name: 'John Smith',
      role: 'Luxury Property Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150',
      experience: '6 years experience'
    },
    {
      id: '5',
      name: 'Lisa Chen',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150',
      experience: '7 years experience'
    },
    {
      id: '6',
      name: 'David Wilson',
      role: 'Market Research Analyst',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU5MTIzNDI2fDA&ixlib=rb-4.1.0&q=80&w=150',
      experience: '9 years experience'
    }
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparency in all our dealings.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, exceeding client expectations.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We embrace technology and innovative approaches to enhance the real estate experience.',
      icon: '💡'
    },
    {
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. Their success is our success.',
      icon: '❤️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-purple-600 text-white"  
       style={{
        width: '100%',
        height: '100%',
        backgroundImage: "url('/about (2).jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
            }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About PropertyHub
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in real estate for over 15 years, connecting dreams with reality across the UAE.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                PropertyHub is a leading real estate company in the UAE, founded with the vision of revolutionizing the property market experience. We combine traditional values with modern technology to provide exceptional service to our clients.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Since our establishment in 2009, we have grown from a small team to one of the most trusted names in real estate, helping thousands of families and investors find their perfect properties.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to excellence, integrity, and innovation has earned us numerous awards and the trust of our clients across the region.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1585394938061-ef6927c9bee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwb2ZmaWNlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTEyMzQyNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PropertyHub Office"
                className="rounded-xl shadow-xl w-full h-96 object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are driven by a clear mission and guided by an ambitious vision for the future of real estate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 text-center border-2 border-green-100">
              <CardContent>
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional real estate services that exceed our clients' expectations through innovative solutions, 
                  professional expertise, and unwavering commitment to integrity and excellence.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center border-2 border-green-100">
              <CardContent>
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the most trusted and innovative real estate company in the region, setting new standards for 
                  customer service and transforming the way people buy, sell, and invest in properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our actions and define our culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your real estate goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our team of professionals or let us help you find your dream property. We're here to make your real estate journey successful.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="secondary"
              // onClick={() => onPageChange('contact')}
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <span className='text-green-600 hover:bg-gray-100'>

              Contact Us
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white hover:bg-white hover:text-green-600"
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
