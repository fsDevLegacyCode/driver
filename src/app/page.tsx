import Image from "next/image";
import Link from "next/link"
import axios from 'axios';
import { ButtonLink } from "./components/button";




export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome to Driver</h1>
        <p className="text-lg text-center text-gray-700 mb-8">Simplifying Driver Management for Transportation Companies</p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Driver Onboarding</h2>
            <p>Simplify the driver onboarding process with customizable forms and automated document verification. From background checks to licensing, Driver ensures that all necessary paperwork is completed accurately and efficiently.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Scheduling and Dispatching</h2>
            <p>Seamlessly schedule drivers for shifts, assignments, and routes using our intuitive calendar and dispatching tools. Assign tasks, track driver availability, and optimize routes for maximum efficiency.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Performance Tracking</h2>
            <p>Monitor driver performance metrics such as on-time arrivals, miles driven, fuel consumption, and customer feedback. Driver provides detailed insights to help you identify top performers and areas for improvement.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Compliance Management</h2>
            <p>Stay compliant with industry regulations and safety standards effortlessly. Driver automatically tracks driver hours, maintains records of rest breaks and vehicle inspections, and generates compliance reports for audits.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Communication and Collaboration</h2>
            <p>Foster better communication and collaboration among drivers, dispatchers, and management teams. Driver offers built-in messaging features, notifications, and real-time updates to keep everyone informed and connected.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Driver Rewards and Incentives</h2>
            <p>Recognize and reward top-performing drivers with incentive programs and bonuses. Driver allows you to set up rewards based on performance metrics and track progress towards goals.</p>
          </div>
          <div className="col-span-3 border border-gray-200 rounded-lg p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">Why Choose Driver:</h2>
            <ul className="list-disc list-inside">
              <li>Scalability: Scale your driver management operations effortlessly as your business grows, with the flexibility to add new features and functionalities.</li>
              <li>Efficiency: Streamline driver management processes and reduce administrative overhead with automation and optimization features.</li>
              <li>Visibility: Gain real-time visibility into driver activities, performance metrics, and compliance status for informed decision-making.</li>
              <li>Compliance: Ensure compliance with industry regulations and safety standards to minimize risks and liabilities.</li>
              
              
            </ul>
            <p>Experience the power of Driver and take your driver management to the next level.</p>
            <h1 className="text-3xl font-bold text-center mb-4">Sign up for a free trial today!</h1>
            <Link href="/login"><ButtonLink btnText="Sign Up"></ButtonLink></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
