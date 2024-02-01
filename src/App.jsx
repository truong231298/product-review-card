import bgDesktop from "/images/image-product-desktop.jpg"
import bgMobile from "/images/image-product-mobile.jpg"
import iconCart from "/images/icon-cart.svg"

export default function App() {
  return (
    <main className="min-h-screen bg-Cream flex items-center justify-center">
      <section className="max-w-lg flex flex-col sm:flex-row gap-4">
        <div className="sm:hidden" >
          <img src={bgMobile} alt="" className="h-full rounded-lg"/>
        </div>

        <div className="hidden sm:block">
          <img src={bgDesktop} alt="" className="rounded-lg h-full object-cover" />
        </div>

        <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
          <span className="font-bold text-xl text-gray-500">Perfume</span>
          <h1 className="text-2xl font-semibold text-Verydarkblue">Gabrielle Essence Eau De Parfum</h1>
          <p className="text-gray-500">A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex gap-4 items-center p-4">
            <span className="text-2xl font-semibold text-Darkcyan">$149.99</span>
            <span className="line-through"> $169.99</span>
          </div>

          <button className="bg-Darkcyan p-2 rounded-lg text-white font-semibold hover:bg-Verydarkblue"> <img src={iconCart} alt="" className="inline-flex" /> Add to Cart</button>
        </div>
      </section>
    </main>
  )
}