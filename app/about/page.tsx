import { Metadata } from "next";
import { routes } from "@/lib/routes";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Starting a Business in Brazil Consulting Experts",
  description:
    "Learn about our expert team helping entrepreneurs start businesses in Brazil. Professional business consulting services with years of experience in Brazilian company formation and legal compliance.",
  keywords:
    "about us, business consulting Brazil, Brazilian company formation experts, professional business services Brazil",
  openGraph: {
    title: "About Us - Starting a Business in Brazil Consulting Experts",
    description:
      "Learn about our expert team helping entrepreneurs start businesses in Brazil. Professional business consulting services with years of experience in Brazilian company formation.",
    url: "https://startingabusinessinbrazil.com/about",
  },
  alternates: {
    canonical: routes.about,
  },
};

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Companies Formed", value: "500+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Clock, label: "Average Processing", value: "5 Days" },
    { icon: Globe, label: "Success Rate", value: "98%" },
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
                About Us
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Expert business consulting services helping entrepreneurs
                successfully establish and grow their companies in Brazil
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://www.shutterstock.com/image-photo/professional-colleagues-modern-office-collaborate-260nw-2461014225.jpg"
                    alt="Expert business consulting team helping companies establish operations in Brazil"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Trusted Partners in Brazilian Business Formation
                </h2>
                <p className="text-gray-700 mb-6">
                  With over a decade of experience in Brazilian business law and
                  company formation, we have successfully helped hundreds of
                  entrepreneurs navigate the complex process of starting a
                  business in Brazil.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team of legal experts, business consultants, and financial
                  advisors provides comprehensive support from initial planning
                  through complete business establishment and ongoing
                  compliance.
                </p>
                <p className="text-gray-700">
                  We specialize in all aspects of Brazilian business formation,
                  including MEI registration, CNPJ acquisition, business
                  permits, tax regime selection, and regulatory compliance
                  across all Brazilian states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="pt-6">
                    <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                To simplify the complex process of starting a business in Brazil
                and ensure every entrepreneur has access to expert guidance and
                support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-700">
                    Professional advice from certified business consultants with
                    deep knowledge of Brazilian regulations and procedures.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Fast Processing
                  </h3>
                  <p className="text-gray-700">
                    Streamlined processes and established relationships ensure
                    quick turnaround times for all business formation
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Proven Success
                  </h3>
                  <p className="text-gray-700">
                    Track record of successful business formations with 98%
                    client satisfaction and ongoing support for long-term
                    success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Business in Brazil?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our expert team today for a free consultation and
              personalized guidance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
