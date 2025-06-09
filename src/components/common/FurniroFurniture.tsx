import React from 'react';

function FurniroFurniture() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center font-poppins mt-8 mx-5 max-h-4/6">
                <p className="text-sm text-gray-700 font-normal">Share your setup with</p>
                <h2 className="font-bold text-3xl">#FuniroFurniture</h2>
            </div>

            <div className="grid grid-cols-5 gap-4 mt-8">
                <div className="col-span-2 h-40 flex flex-col h-full gap-4">
                    <div className="w-full h-1/2 flex flex-col sm:flex-row items-end justify-end row-span-1 overflow-hidden gap-6">
                        <img
                            src='../../../public/leftTop.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                        {/* Metade de cima */}
                        <img
                            src='../../../public/leftTop2.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </div>
                    <div className="w-full h-1/2 flex flex-col sm:flex-row items-end justify-end row-span-1 overflow-hidden gap-6">
                        <img
                            src='../../../public/leftBottom.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                        {/* Metade de cima */}
                        <img
                            src='../../../public/leftBottom2.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
                <div className="col-span-1 h-full flex items-center justify-center">
                    <img
                            src='../../../public/sala.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                </div>
                <div className="col-span-2 h-40 flex flex-col h-full gap-4">
                    <div className="w-full h-1/2 flex flex-col sm:flex-row items-end justify-end row-span-1 overflow-hidden gap-6">
                        <img
                            src='../../../public/rightTop.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                        {/* Metade de cima */}
                        <img
                            src='../../../public/rightTop2.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                    </div>
                    <div className="w-full h-1/2 flex flex-col sm:flex-row items-end justify-end row-span-1 overflow-hidden gap-6">
                        <img
                            src='../../../public/rightBottom.png'
                            alt="Left Top"
                            className="w-auto max-w-full h-auto object-contain"
                        />
                        {/* Metade de cima */}
                        <img
                            src='../../../public/rightBottom2.png'
                            alt="Left Top"
                            className="max-w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FurniroFurniture;