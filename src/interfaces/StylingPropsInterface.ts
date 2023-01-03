import { CSSProperties } from 'react';

// Optional styling properties
// Useful for when you want to be able to customize comps but not erase comp styling
interface StylingPropsInterface {
  className?: string;
  style?: CSSProperties;
}
export default StylingPropsInterface;
