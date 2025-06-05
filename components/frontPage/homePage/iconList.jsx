"use client";

const services = [
  {
    title: "Business Support",
    points: [
      "Small business loans and microfinance",
      "Business development training and mentorship",
      "Group purchasing programs for better rates",
      "Marketing and networking opportunities",
    ],
  },
  {
    title: "Member Benefits",
    points: [
      "Dividend sharing from cooperative profits",
      "Lower fees and better rates than traditional banks",
      "Democratic participation in all major decisions",
      "Access to exclusive member-only services and events",
    ],
  },
  {
    title: "Financial Services",
    points: [
      " Savings accounts with competitive interest rates",
      " Affordable loans for personal, business, and emergency needs",
      "Investment opportunities and financial planning",
      "Money transfer and payment services",
    ],
  },
];

export default function ServiceCategories() {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {service.title}
          </h2>
          <ul className="space-y-2 text-gray-700">
            {service.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 font-bold leading-tight">
                  ✔
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
