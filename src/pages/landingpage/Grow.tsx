import React from 'react'
import { Brain, Book, Heart, Target, Lightbulb, Users } from 'lucide-react';


interface GrowthCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Grow: React.FC = () => {
    const growthCards:GrowthCard[] = [
        {
          icon: <Brain className="w-12 h-12 text-base" />,
          title: "Mindset Development",
          description: "Learn powerful techniques to develop a growth mindset and overcome limiting beliefs that hold you back from reaching your full potential."
        },
        {
          icon: <Book className="w-12 h-12 text-base" />,
          title: "Continuous Learning",
          description: "Access curated resources and structured learning paths to acquire new skills and knowledge that will propel your personal and professional growth."
        },
        {
          icon: <Heart className="w-12 h-12 text-base" />,
          title: "Emotional Intelligence",
          description: "Develop your emotional awareness and relationship management skills to better navigate personal and professional interactions."
        },
        {
          icon: <Target className="w-12 h-12 text-base" />,
          title: "Goal Achievement",
          description: "Learn effective goal-setting strategies and develop action plans that turn your aspirations into measurable, achievable outcomes."
        },
        {
          icon: <Lightbulb className="w-12 h-12 text-base" />,
          title: "Creative Problem Solving",
          description: "Master innovative thinking techniques to tackle challenges with fresh perspectives and discover unique solutions to complex problems."
        },
        {
          icon: <Users className="w-12 h-12 text-base" />,
          title: "Leadership Skills",
          description: "Develop essential leadership capabilities to inspire and guide others while creating positive impact in your community and workplace."
        }
      ];
  return (
    <>
          <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">We help you to grow</h2>
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-base"></div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on a transformative journey of personal development with our comprehensive approach to growth and self-improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {growthCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 ">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Grow


