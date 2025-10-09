const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  padding = 'md',
  ...props 
}) => {
  // Base styles
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-gray-200';
  
  // Hover effect
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-200' : '';
  
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
