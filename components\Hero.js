import Image from 'next/image'

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-white">Swat Beauty</h1>
        <p className="text-2xl text-white">Discover the beauty within</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Explore
        </button>
      </div>
    </div>
  )
}

export default Hero