const Button = ({ children, variant, size, ...props }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secundary':
        return 'bg-white text-black hover:bg-white/90';
      default:
        return 'bg-lightblack text-white hover:bg-black/90';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'lg':
        return 'py-3 px-12';
      default:
        return 'py-2 px-8';
    }
  };

  const buttonStyles = `rounded-md transition text-lg font-work hover:shadow-sm ${getVariantStyles()} ${getSizeStyles()}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
