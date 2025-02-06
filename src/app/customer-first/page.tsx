import { CheckCircle, HeartHandshake, PhoneCall, Truck } from "lucide-react"

const customerFirstFeatures = [
  {
    icon: CheckCircle,
    title: "100% Satisfaction Guarantee",
    description: "If you're not completely satisfied, we'll make it right.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Our team is dedicated to providing you with tailored solutions.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Customer Support",
    description: "We're always here to help, any time of day or night.",
  },
  {
    icon: Truck,
    title: "Free Shipping & Returns",
    description: "Enjoy free shipping on all orders and hassle-free returns.",
  },
]

export default function CustomerFirstPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-playfair text-4xl font-bold text-center my-10 text-blue-800">Customer-First Approach</h1>
      <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
        At UniqueShop, we believe in putting our customers first. Here s how we ensure your shopping experience is
        nothing short of exceptional.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {customerFirstFeatures.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
            <feature.icon className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h2 className="font-playfair text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

