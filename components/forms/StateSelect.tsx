'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, X } from 'lucide-react';

export interface USState {
  code: string;
  name: string;
}

/**
 * 50 US States + District of Columbia in strict alphabetical (AA to ZZ) order by postal code.
 */
export const US_STATES_DATA: USState[] = [
  { code: 'AK', name: 'Alaska' },
  { code: 'AL', name: 'Alabama' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DC', name: 'District of Columbia' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'IA', name: 'Iowa' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MD', name: 'Maryland' },
  { code: 'ME', name: 'Maine' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MT', name: 'Montana' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NY', name: 'New York' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VA', name: 'Virginia' },
  { code: 'VT', name: 'Vermont' },
  { code: 'WA', name: 'Washington' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WY', name: 'Wyoming' },
];

export const US_STATES = US_STATES_DATA.map((s) => s.code);

interface StateSelectProps {
  value: string;
  onChange: (stateCode: string) => void;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  className?: string;
}

export function StateSelect({
  value,
  onChange,
  required = false,
  disabled = false,
  id,
  name = 'state',
  placeholder = '— Select State —',
  className = '',
}: StateSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedStateObj = US_STATES_DATA.find((s) => s.code === value);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery('');
      setHighlightedIndex(0);
    }
  }, [isOpen]);

  // Filter states based on code or name
  const filteredStates = US_STATES_DATA.filter((s) => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return s.code.toLowerCase().includes(q) || s.name.toLowerCase().includes(q);
  });

  // Reset highlighted index when filter changes
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchQuery]);

  // Keep highlighted item visible when navigating with arrow keys
  useEffect(() => {
    if (isOpen && listRef.current) {
      const items = listRef.current.querySelectorAll('li[role="option"]');
      if (items[highlightedIndex]) {
        (items[highlightedIndex] as HTMLElement).scrollIntoView({
          block: 'nearest',
        });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
  };

  const handleSearchBtnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isOpen) {
      setIsOpen(true);
    } else {
      handleSearchAndSelect();
    }
  };

  const handleSearchAndSelect = () => {
    if (filteredStates.length === 0) return;

    // Check for exact code match or exact name match first
    const trimmed = searchQuery.trim().toLowerCase();
    if (trimmed) {
      const exactMatch = filteredStates.find(
        (s) => s.code.toLowerCase() === trimmed || s.name.toLowerCase() === trimmed
      );
      if (exactMatch) {
        handleSelect(exactMatch.code);
        return;
      }
    }

    // Otherwise select the highlighted state or first matching state
    const targetState = filteredStates[highlightedIndex] || filteredStates[0];
    if (targetState) {
      handleSelect(targetState.code);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < filteredStates.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSearchAndSelect();
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Hidden input for HTML form validation & submission */}
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        required={required}
        readOnly
        tabIndex={-1}
        className="sr-only"
        aria-hidden="true"
      />

      {/* Main trigger button matching standard form field style */}
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (!disabled && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className={`w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-medium bg-[#FDFCF7] cursor-pointer select-none transition flex items-center justify-between gap-2 shadow-xs ${
          isOpen
            ? 'ring-2 ring-[#0D9488] border-transparent'
            : 'hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488]'
        } ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-100' : ''}`}
      >
        <span className={`truncate ${selectedStateObj ? 'text-[#0D1B2A] font-semibold' : 'text-slate-400'}`}>
          {selectedStateObj ? `${selectedStateObj.code} - ${selectedStateObj.name}` : placeholder}
        </span>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Integrated Search Button */}
          <button
            type="button"
            onClick={handleSearchBtnClick}
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0D9488] bg-teal-50/90 hover:bg-teal-100/90 border border-teal-200/80 px-2 py-1 rounded-md transition shadow-2xs"
            title="Search and select state"
            aria-label="Search and select state"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Search</span>
          </button>
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[#0D9488]' : ''
            }`}
          />
        </div>
      </div>

      {/* Dropdown panel */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-[#FDFCF7] border border-slate-200 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {/* Dropdown search bar with dedicated Search Button */}
          <div className="p-2.5 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search state name or code (e.g. TX, CA)..."
                  className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl text-[#0D1B2A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
                    aria-label="Clear search input"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={handleSearchAndSelect}
                className="px-3.5 py-2 bg-[#0D9488] hover:bg-[#0f766e] text-white text-xs font-semibold rounded-xl shrink-0 flex items-center gap-1.5 shadow-sm transition active:scale-98"
                title="Search and select matching state"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
          </div>

          {/* States list in proper AA to ZZ format */}
          <ul
            ref={listRef}
            role="listbox"
            aria-label="States list"
            className="max-h-60 overflow-y-auto py-1 divide-y divide-slate-100"
          >
            {filteredStates.length > 0 ? (
              filteredStates.map((st, idx) => {
                const isSelected = st.code === value;
                const isHighlighted = idx === highlightedIndex;
                return (
                  <li
                    key={st.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(st.code)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    className={`px-3.5 py-2.5 text-xs sm:text-sm flex items-center justify-between cursor-pointer transition ${
                      isSelected
                        ? 'bg-teal-50/90 text-[#0D9488] font-semibold'
                        : isHighlighted
                        ? 'bg-teal-50/50 text-[#0D9488]'
                        : 'text-[#0D1B2A] hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-7 text-center py-0.5 px-1 rounded-md text-xs font-bold tracking-wide ${
                          isSelected
                            ? 'bg-[#0D9488] text-white'
                            : 'bg-slate-200/70 text-slate-700'
                        }`}
                      >
                        {st.code}
                      </span>
                      <span className="font-medium text-slate-800">{st.name}</span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#0D9488] shrink-0 stroke-[2.5]" />
                    )}
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-6 text-center text-xs sm:text-sm text-slate-500">
                <p>No states found matching &quot;{searchQuery}&quot;</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-xs text-[#0D9488] font-semibold hover:underline"
                >
                  View all 51 states (AA to ZZ)
                </button>
              </li>
            )}
          </ul>

          {/* Footer note */}
          <div className="px-3.5 py-2 bg-slate-50/90 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center justify-between select-none">
            <span>51 States &amp; DC (AA to ZZ)</span>
            <span className="text-slate-400">Click or press Enter to select</span>
          </div>
        </div>
      )}
    </div>
  );
}
