const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'md',
  ...props 
}) => {
  // Base styles
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-light-border';
  
  // Hover effect
  const hoverStyles = hover ? 'hover:shadow-xl hover:border-primary/30 hover:bg-gradient-to-br hover:from-white hover:to-primary/5 transition-all duration-300' : '';
  
  // Padding styles
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    none: 'p-0'
  };
  
  const combinedClassName = `
    ${baseStyles}
    ${hoverStyles}
    ${paddingStyles[padding]}
    ${className}
  `.trim();

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
