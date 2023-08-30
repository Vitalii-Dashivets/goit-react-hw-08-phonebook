import { Overlay } from './Loader.styled';
import { ScaleLoader } from 'react-spinners';
export const Loader = () => {
  return (
    <Overlay>
      <ScaleLoader color="rgba(240, 98, 146, 1)" />
    </Overlay>
  );
};
