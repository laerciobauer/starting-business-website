import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { routes } from "@/lib/routes";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle,
} from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact - Get Expert Brazilian Business Consulting Services",
  description:
    "Contact our Brazilian business consulting experts for professional guidance on company formation, CNPJ registration, business permits, and legal compliance in Brazil.",
  keywords:
    "contact Brazilian business consultant, business formation consultation Brazil, CNPJ registration help, company setup assistance Brazil",
  openGraph: {
    title: "Contact - Get Expert Brazilian Business Consulting Services",
    description:
      "Contact our Brazilian business consulting experts for professional guidance on company formation and legal compliance.",
    url: routes.contact,
  },
  alternates: {
    canonical: routes.contact,
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "laercio@brazil.tm",
      description: "Send us your questions and we'll respond within 24 hours",
      link: "mailto:laercio@brazil.tm",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 11 97779 9994",
      description: "Chat with us directly for immediate assistance",
      link: "https://wa.me/5511977799994?text=Hello!%20I%27m%20interested%20in%20starting%20a%20business%20in%20Brazil",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+55 11 97779 9994",
      description: "Call us during business hours for direct consultation",
      link: "tel:+5511977799994",
    },
  ];

  const businessHours = [
    "Monday - Friday: 9:00 AM - 6:00 PM (BRT)",
    "Saturday: 9:00 AM - 2:00 PM (BRT)",
    "Sunday: Closed",
    "Emergency consultations available by appointment",
  ];

  const whyChooseUs = [
    "Over 10 years experience in Brazilian business law",
    "500+ companies successfully registered",
    "98% client satisfaction rate",
    "Complete service from start to finish",
    "Fluent in Portuguese and English",
    "Fast processing and response times",
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get expert consultation for starting your business in Brazil.
                Our team of professionals is ready to guide you through every
                step of the process.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://media.gettyimages.com/id/1502896502/photo/phone-black-man-and-happy-with-business-communication-and-vision-for-startup-company-and.jpg?s=1024x1024&w=gi&k=20&c=rcKM2oBZM30NDadc-5aHTekzOC34fsFRSncMm3YOS8Y="
                    alt="Contact our Brazilian business consulting experts for company formation assistance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Start Your Business in Brazil?
                </h2>
                <p className="text-gray-700 mb-6">
                  Whether you're looking to register as an MEI, start a small
                  company, or establish a larger corporation, our experienced
                  team provides personalized guidance tailored to your specific
                  needs and goals.
                </p>
                <p className="text-gray-700 mb-8">
                  We handle all aspects of business formation in Brazil, from
                  initial consultation to complete registration and ongoing
                  compliance support.
                </p>
                <div className="space-y-3">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-800">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Choose the best way to reach us for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow text-center"
                >
                  <CardContent className="pt-6">
                    <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <div className="text-lg font-medium text-blue-600 mb-3">
                      <a href={method.link} className="hover:underline">
                        {method.value}
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Business Hours */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Send us a Message
                    </h2>
                    <p className="text-gray-700 mb-8">
                      Fill out the form below and we'll get back to you within
                      24 hours with a personalized consultation for your
                      business needs.
                    </p>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Business Hours and Info */}
              <div className="space-y-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <Clock className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Business Hours
                      </h3>
                    </div>
                    <div className="space-y-2">
                      {businessHours.map((hours, index) => (
                        <div key={index} className="text-gray-700 text-sm">
                          {hours}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Service Area
                      </h3>
                    </div>
                    <div className="space-y-2 text-gray-700 text-sm">
                      <div>All Brazilian states and municipalities</div>
                      <div>Remote consultations available</div>
                      <div>On-site visits in São Paulo region</div>
                      <div>International clients welcome</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        Quick WhatsApp Contact
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      For immediate assistance, message us on WhatsApp and we'll
                      respond right away.
                    </p>
                    <a
                      href="https://wa.me/5511977799994?text=Hello!%20I%27m%20interested%20in%20starting%20a%20business%20in%20Brazil"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start WhatsApp Chat
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We Can Help You
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our comprehensive business formation services cover every aspect
                of starting and maintaining a business in Brazil.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Company Registration
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete business registration and CNPJ acquisition
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Permits & Licenses
                </h3>
                <p className="text-gray-600 text-sm">
                  All necessary permits and regulatory approvals
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tax Optimization
                </h3>
                <p className="text-gray-600 text-sm">
                  Best tax regime selection and compliance guidance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Legal Compliance
                </h3>
                <p className="text-gray-600 text-sm">
                  Ongoing legal and regulatory compliance support
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Accounting Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional bookkeeping and financial management
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600 text-sm">
                  Strategic business planning and growth advice
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
