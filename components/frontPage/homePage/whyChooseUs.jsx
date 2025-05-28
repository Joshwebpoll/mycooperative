import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Member-Owned & Transparent",
    description:
      "We operate with full transparency and accountability — no hidden charges, no surprises.",
  },
  {
    title: "Affordable Loans",
    description:
      "Access low-interest loans quickly with flexible repayment options designed for members.",
  },
  {
    title: "Profit Sharing & Dividends",
    description:
      "Earn yearly dividends from cooperative profits — your savings work harder here.",
  },
  {
    title: "Emergency Support",
    description:
      "We stand by our members with fast, supportive assistance in times of financial need.",
  },
  {
    title: "Flexible Contribution Plans",
    description:
      "Save daily, weekly, or monthly — tailored to your income pattern.",
  },
  {
    title: "Financial Growth & Empowerment",
    description:
      "Enjoy access to trainings, investment opportunities, and tools to grow your wealth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 mb-20">
      <div className="max-w-10/12 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We are committed to building financial security and community wealth
            through trusted cooperative principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6 border hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
