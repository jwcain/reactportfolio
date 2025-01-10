import { useState } from 'react';
import './ImageGallery.css';

interface ImageGalleryProps {
    images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Function to open the modal with clicked image
    const openModal = (image: string) => {
        setSelectedImage(image);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className="gallery">
                {images.map((url, index) => (
                    <div className="gallery-item" key={index} onClick={() => openModal(url)}>
                        <img src={url} alt={`Gallery Item ${index}`} />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Zoomed Image" />
                    </div>
                </div>
            )}
        </div>
    );
}
