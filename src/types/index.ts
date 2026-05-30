/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 *
 * Best Practices:
 * - Gunakan PascalCase untuk interface names
 * - Export semua interfaces agar bisa digunakan di file lain
 * - Group related interfaces bersama
 * - Add comments untuk explain complex types
 */

// ==========================================
// UI Component Types
// ==========================================

/**
 * Button variant types
 * Gunakan ini untuk Button component
 */
export type TButtonVariant = 'primary' | 'secondary' | 'outline';

/**
 * Example: Button Props
 * Uncomment dan sesuaikan dengan kebutuhan
 */
export interface IButtonProps {
  children: React.ReactNode;
  variant?: TButtonVariant;
  className?: string;
  onClick?: () => void;
}

// ==========================================
// Navigation Types
// ==========================================

/**
 * Navigation menu item
 */
export interface INavItem {
  label: string;
  href: string;
  external?: boolean;
}

// ==========================================
// Section Data Types
// ==========================================

/**
 * TODO: Define interfaces untuk data yang digunakan di sections
 *
 * Contoh:
 * - ServiceItem untuk services section
 * - TeamMember untuk team section
 * - Testimonial untuk testimonials section
 * - dll.
 */

/**
 * Example: Service/Product Item
 */
export interface IServiceItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
  // image?: string;
}

export interface IProcessItem {
  id: number;
  title: string;
  description: string;
}

export interface IIndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface IPortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export interface ICompanyInfo {
  icon: string;
  logo: string;
  email: string;
  phone: string;
  address: string;
}

/**
 * Example: Testimonial
 */
export interface ITestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
}

export interface ITestimonialCardProps extends ITestimonial {
  active?: boolean;
}

export { testimonials } from '../data/testimonials';
export { default as TestimonialCard } from '../components/ui/TestimonialCard';

// ==========================================
// Form Types (if needed)
// ==========================================

/**
 * Contact form data
 */
export interface IContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}
export interface IContactModalProps {
  isOpen: boolean;
  type: 'success' | 'error';
  onClose: () => void;
  onRetry?: () => void;
}

export interface IServiceCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export type TAlertStatus = 'success' | 'failed' | null;

// ==========================================
// TODO: Add more types as needed!
// ==========================================

/**
 * Tips:
 * 1. Define types berdasarkan data yang kamu perlukan
 * 2. Lihat design Figma untuk understand data structure
 * 3. Make types reusable across components
 * 4. Use optional properties (?) untuk data yang tidak selalu ada
 * 5. Consider creating separate files jika types terlalu banyak
 *    Example: types/components.ts, types/data.ts, etc.
 */
