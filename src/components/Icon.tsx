import React from 'react';
import {
  Wrench,
  Globe,
  Layout,
  Briefcase,
  Cpu,
  Monitor,
  HardDrive,
  Grid,
  Code,
  Palette,
  X,
  ShoppingCart,
  Download,
  Send,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  FileText,
  Menu,
  Check,
  Trash2,
  Lock,
  Sparkles,
  Server,
  Keyboard
} from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Wrench,
  Globe,
  Layout,
  Briefcase,
  Cpu,
  Monitor,
  HardDrive,
  Grid,
  Code,
  Palette,
  X,
  ShoppingCart,
  Download,
  Send,
  CheckCircle,
  BookOpen,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  FileText,
  Menu,
  Check,
  Trash2,
  Lock,
  Sparkles,
  Server,
  Keyboard
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = '', size }: IconProps) {
  const IconComponent = iconMap[name] || Sparkles; // fallback to Sparkles
  return <IconComponent className={className} size={size} />;
}
