export default function Portfolio() {
    return (
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
  
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border p-6 rounded-lg hover:shadow">
              <h3 className="font-semibold">Project {item}</h3>
              <p className="text-sm text-gray-500">Website / App</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  