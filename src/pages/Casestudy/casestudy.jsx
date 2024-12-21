import React from 'react';
import { ArrowRight, Building2, Users2, BarChart3, Clock } from 'lucide-react';

const CaseStudyPage = ({ onNavigate }) => {
  const caseStudies = [
    {
      id: 1,
      title: "Enterprise Digital Transformation for Global Manufacturing Company",
      industry: "Manufacturing",
      duration: "12 months",
      impact: "45% efficiency increase",
      clientSize: "5000+ employees",
      summary: "How WebReich Technologies helped a leading manufacturer modernize their operations with AI-driven solutions.",
      imageUrl: "https://images.pexels.com/photos/8190815/pexels-photo-8190815.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI & ML", "Enterprise Software", "Cloud Integration"],
      slug: "manufacturing-transformation"
    },
    {
      id: 2,
      title: "Workflow Automation Success in Healthcare Services",
      industry: "Healthcare",
      duration: "8 months",
      impact: "60% time savings",
      clientSize: "2000+ employees",
      summary: "Implementing automated workflows that transformed patient care management and administrative processes.",
      imageUrl: "https://images.pexels.com/photos/8442545/pexels-photo-8442545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Workflow Automation", "Cloud Integration", "Analytics"],
      slug: "healthcare-automation"
    },
    {
      id: 3,
      title: "Empowering Students Through WebReich Community",
      industry: "Education",
      duration: "Ongoing",
      impact: "100+ students empowered",
      clientSize: "Community-driven initiative",
      summary: "How WebReich Community addressed the lack of coding awareness and practical skills in a college environment, fostering student growth and opportunities.",
      imageUrl: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Community Building", "Education", "Skill Development"],
      slug: "webreich-community"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover how WebReich Technologies helps enterprises transform their operations
            with cutting-edge software solutions and innovative technologies.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4">
            {[
              "All Industries",
              "Manufacturing",
              "Healthcare",
              "Education",
              "Finance",
              "Technology"
            ].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h2>

                <p className="text-gray-600 mb-6">
                  {study.summary}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-600">{study.industry}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users2 className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-600">{study.clientSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-600">{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-orange-600" />
                    <span className="text-sm text-gray-600">{study.impact}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(`/case-studies/${study.slug}`)}
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful enterprises that have partnered with WebReich
            Technologies to achieve their digital transformation goals.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
