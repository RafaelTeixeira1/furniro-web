interface CartOverlayProps {
  onClose: () => void;
}

const CartOverlay = ({ onClose }: CartOverlayProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-gray-200/80 z-40 transition-opacity duration-300"
    />
  );
};

export default CartOverlay;
