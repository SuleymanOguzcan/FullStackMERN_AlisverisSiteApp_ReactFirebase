import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Görüşler</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Müşterilerimiz <span className=' text-pink-500'>ürünlerimiz hakkında</span> ne düşünüyor.</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4E03AQGogJmVNI6Cgg/profile-displayphoto-shrink_800_800/0/1676395202057?e=2147483647&v=beta&t=lIIyB5EgRl8QIgudJWQgJlqtpPLv7SCAhU1bZD9dHGA" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"Maalesef bu e-ticaret sitesinden memnun kalmadım. Ürünleri aramak ve filtrelemek oldukça karmaşıktı, ve sonunda istediğim ürünü bulmak için çok zaman harcadım. Ürün sayfaları yetersizdi, daha fazla bilgiye ihtiyacım vardı. Siparişim gecikti ve kargo takibi de zor oldu. Müşteri hizmetleri ile iletişime geçtiğimde yanıt almak zor oldu. Bu siteyi tekrar kullanmayı düşünmüyorum."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Suleyman Oğuzcan</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">"Bu e-ticaret sitesini kullanmak gerçekten harika! Aradığım ürünleri kolayca bulabiliyorum ve özellikle hızlı kargo hizmetleri sayesinde siparişlerim hızla elimde oluyor. Ürünlerin fotoğrafları ve açıklamaları çok detaylı, bu da alışveriş yapmayı daha güvenli hale getiriyor. Ayrıca, müşteri hizmetleri ekibi herhangi bir sorun yaşadığımda hızlıca yardımcı oluyor. Bu siteyi herkese tavsiye ederim!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ayşe Yılmaz</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"Bu e-ticaret sitesi bazı açılardan iyi, bazı açılardan ise sorunlu. Ürün yelpazesi oldukça geniş ve fiyatlar rekabetçi. Ancak, siteyi kullanmak zaman zaman karmaşık olabiliyor. Arama sonuçları çok fazla seçenek sunuyor ve bazen istediğim ürünü bulmak zor oluyor. Kargo hizmeti ortalama, bazen gecikmeler yaşanıyor. Müşteri hizmetleri, bazı durumlarda hızlı yardımcı oluyor, bazı durumlarda ise sorun yaşatabiliyor. Yani, bu siteyi kullanırken avantajlar ve dezavantajlar arasında denge kurmanız gerekiyor."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ahmet Yıldırım</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial