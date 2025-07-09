import '../../styles/BrowseTheRange.css'

function BrowseTheRange() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center font-poppins mt-8 mx-5">
                <h2 className='text-custom-title '>Browse The Range</h2>
                <p className='custom-p-regular'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex flex-wrap my-8">

                    <div className='transition-transform duration-500 ease-in-out hover:scale-105'>
                        <a href="/shop/dining">
                            <img src="https://furniro-web-imagens.s3.us-east-2.amazonaws.com/image+106.png" alt="Dining" className="rounded-lg w-full h-72 object-cover mb-4" />
                        </a>
                        <h3 className="text-lg font-semibold text-2xl">Dining</h3>
                    </div>


                    <div className='transition-transform duration-500 ease-in-out hover:scale-105'>
                        <a href="/shop/living">
                            <img src="https://furniro-web-imagens.s3.us-east-2.amazonaws.com/image+106.png" alt="Living" className="rounded-lg w-full h-72 object-cover mb-4" />
                        </a>
                        <h3 className="text-lg font-semibold text-2xl">Living</h3>
                    </div>


                    <div className='transition-transform duration-500 ease-in-out hover:scale-105'>
                        <a href="/shop/bedroom">
                            <img src="https://furniro-web-imagens.s3.us-east-2.amazonaws.com/image+106.png" alt="Bedroom" className="rounded-lg w-full h-72 object-cover mb-4" />
                        </a>
                        <h3 className="text-lg font-semibold text-2xl">Bedroom</h3>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BrowseTheRange