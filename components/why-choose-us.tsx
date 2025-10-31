
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Users, Award, Clock, Globe, CheckCircle, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { 
      icon: Users, 
      label: 'Companies Formed', 
      value: '500+',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      icon: Award, 
      label: 'Years Experience', 
      value: '10+',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      icon: Clock, 
      label: 'Average Processing', 
      value: '5 Days',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      icon: Globe, 
      label: 'Success Rate', 
      value: '98%',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ]

  const advantages = [
    {
      icon: Shield,
      title: '100% Legal Compliance',
      description: 'Ensure your business meets all Brazilian legal requirements with ongoing compliance support.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional lawyers and accountants with deep knowledge of Brazilian business regulations.'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Streamlined processes and established relationships ensure quick turnaround times.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful business formations with 98% client satisfaction rate.'
    },
    {
      icon: Globe,
      title: 'Comprehensive Service',
      description: 'Complete end-to-end service from initial consultation to ongoing business support.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or surprise charges during the process.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trusted by hundreds of entrepreneurs for professional, reliable, and efficient business formation services in Brazil
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                      <advantage.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
