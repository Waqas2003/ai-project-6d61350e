import Image from 'next/image'

function Cards() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold">Our Products</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-white rounded shadow-md">
            <Image src="/product1.jpg" alt="Product 1" width={300} height={300} />
            <h3 className="text-2xl font-bold">Product 1</h3>
            <p>Our best-selling product, made with natural ingredients.</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-white rounded shadow-md">
            <Image src="/product2.jpg" alt="Product 2" width={300} height={300} />
            <h3 className="text-2xl font-bold">Product 2</h3>
            <p>Our newest product, made with eco-friendly packaging.</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-white rounded shadow-md">
            <Image src="/product3.jpg" alt="Product 3" width={300} height={300} />
            <h3 className="text-2xl font-bold">Product 3</h3>
            <p>Our cruelty-free product, made with love.</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards