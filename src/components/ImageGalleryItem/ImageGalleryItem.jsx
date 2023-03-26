import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => {
  const handleClickToOpenModal = () => {
    onOpenModal(largeImageURL);
  };

  return (
    <li className={styles.imageGalleryItem} onClick={handleClickToOpenModal}>
      <img className={styles.image} src={webformatURL} alt={tags} />
    </li>
  );
};
