const Services = () => {
  return (
    <div className="min-h-screen py-16 pt-36">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workflow automation solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Automation</h3>
            <p className="text-gray-600">Streamline repetitive tasks and boost productivity with intelligent automation.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Management</h3>
            <p className="text-gray-600">Coordinate teams effectively with advanced project management tools.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Insights</h3>
            <p className="text-gray-600">Make data-driven decisions with comprehensive analytics and reporting.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services