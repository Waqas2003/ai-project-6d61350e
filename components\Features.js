function Features() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold">Our Features</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <i className="fas fa-crown text-4xl text-orange-500"></i>
          <h3 className="text-2xl font-bold">Natural Ingredients</h3>
          <p>Our products are made with natural ingredients, ensuring your skin gets the best.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <i className="fas fa-leaf text-4xl text-orange-500"></i>
          <h3 className="text-2xl font-bold">Eco-Friendly</h3>
          <p>We care about the planet, that's why our packaging is eco-friendly.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <i className="fas fa-heart text-4xl text-orange-500"></i>
          <h3 className="text-2xl font-bold">Cruelty-Free</h3>
          <p>We love animals, that's why we're cruelty-free.</p>
        </div>
      </div>
    </div>
  )
}

export default Features