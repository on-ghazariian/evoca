import React, { useState } from 'react';
import { MapPin, HelpCircle, Globe, Search, Menu, ChevronDown } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

const leftNavItems: NavLink[] = [
  { label: 'Անհատ', href: '#', isActive: true },
  { label: 'Բիզնես', href: '#' },
  { label: 'Ակնթարթային վճարումներ', href: '#' },
  { label: 'Մեր մասին', href: '#' },
  { label: 'Նորություններ', href: '#' },
  { label: 'Բլոգ', href: '#' },
  { label: 'Կարիերա', href: '#' },
];

export const TopHeader: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Անհատ');

  return (
   
      <div className="mx-auto flex  items-center justify-center px-4 py-2.5  ">
        
        {/* Ձախ կողմի հղումները */}
        <nav className="flex items-center space-x-6 pr-[250px] ">
          {leftNavItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`relative py-1 transition-colors hover:text-purple-700 ${
                  isActive
                    ? 'font-bold text-purple-700'
                    : 'text-gray-700'
                }`}
              >
                {/* Ակտիվ տեքստի վերևի մանուշակագույն գիծը */}
                {isActive && (
                  <span className="absolute -top-3 left-0 right-0 h-1 rounded-b bg-purple-700" />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Աջ կողմի Dropdown-ները և Իքոնները */}
        <div className="flex items-center space-x-6 text-purple-700 font-medium">
          
          {/* Dropdown 1: Առցանց հայտեր */}
          <button className="flex items-center space-x-1 hover:opacity-80">
            <span>Առցանց հայտեր</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Dropdown 2: Հետադարձ կապ */}
          <button className="flex items-center space-x-1 hover:opacity-80">
            <span>Հետադարձ կապ</span>
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Իքոններ */}
          <div className="flex items-center space-x-4 text-gray-800 ml-2">
            <button className="hover:text-purple-700 transition-colors" title="Քարտեզ">
              <MapPin className="h-5 w-5" />
            </button>
            <button className="hover:text-purple-700 transition-colors" title="Օգնություն">
              <HelpCircle className="h-5 w-5" />
            </button>
            <button className="hover:text-purple-700 transition-colors" title="Լեզու">
              <Globe className="h-5 w-5" />
            </button>
            <button className="hover:text-purple-700 transition-colors" title="Որոնում">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-purple-700 transition-colors" title="Մենյու">
              <Menu className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
   
  );
};