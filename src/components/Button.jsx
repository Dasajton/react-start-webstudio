const Button = ({ children, variant, size, ...props }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secundary':
        return 'bg-white text-black hover:bg-white/80';
      default:
        return 'bg-lightblack text-white hover:bg-black/80';
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

  const buttonStyles = `rounded-md transition text-lg ${getVariantStyles()} ${getSizeStyles()}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
