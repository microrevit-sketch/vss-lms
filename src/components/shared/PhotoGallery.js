import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const PhotoGallery = ({ photos, title = "Event Highlights" }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className={`container mx-auto px-4 ${selectedPhoto ? 'blur-sm transition-all' : ''}`}>
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                    {title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`
                                group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-square bg-gray-100
                                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                            `}
                            onClick={() => setSelectedPhoto(photo)}
                        >
                            <img
                                src={photo}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white drop-shadow-md" size={32} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300">
                    <button
                        onClick={() => setSelectedPhoto(null)}
                        className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 bg-black/50 p-2 rounded-full"
                    >
                        <X size={32} />
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
                        <img
                            src={selectedPhoto}
                            alt="Full view"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default PhotoGallery;
