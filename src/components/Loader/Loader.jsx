import { Blocks } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.blocksWrapper}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
      />
    </div>
  );
};
