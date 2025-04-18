
import React from 'react';

type CaseStudyHeaderProps = {
  clientName: string;
  date: string; // We'll keep this prop even though we're not using it here anymore
};

const CaseStudyHeader: React.FC<CaseStudyHeaderProps> = ({ 
  clientName, 
  date 
}) => {
  // We're not displaying the date here anymore
  return null; // Since we moved the date to the Index page, this component is now empty
};

export default CaseStudyHeader;
