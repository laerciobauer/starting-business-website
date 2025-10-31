
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Building2, CreditCard, Shield, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: FileText,
      title: 'Company Formalization',
      description: 'Complete step-by-step guidance through the entire process of formalizing your business in Brazil.',
      href: '/services/formalize-company-brazil',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Building2,
      title: 'Business Opening',
      description: 'Comprehensive guidance on opening a company including structure selection and registration procedures.',
      href: '/services/open-company-brazil',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: CreditCard,
      title: 'CNPJ Registration',
      description: 'Expert assistance with Brazilian tax ID registration and submission to federal revenue service.',
      href: '/services/obtain-cnpj-brazil',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Shield,
      title: 'Business Permits',
      description: 'Navigate the complex process of obtaining all necessary permits and regulatory approvals.',
      href: '/services/business-permit-brazil',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: DollarSign,
      title: 'Cost Analysis',
      description: 'Detailed cost analysis and financial planning for starting your business in Brazil.',
      href: '/services/cost-start-business-brazil',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Business Formation Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions to help you successfully start and establish your company in Brazil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full group-hover:bg-blue-50 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/services">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
