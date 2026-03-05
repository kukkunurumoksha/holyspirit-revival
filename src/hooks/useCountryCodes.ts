import { useState, useEffect } from 'react';

interface CountryCode {
  name: string;
  code: string;
  flag: string;
}

export const useCountryCodes = () => {
  const [countryCodes, setCountryCodes] = useState<CountryCode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,flags');
        const data = await response.json();
        
        const codes: CountryCode[] = data
          .filter((country: any) => country.idd?.root && country.idd?.suffixes)
          .map((country: any) => {
            const root = country.idd.root;
            const suffix = country.idd.suffixes[0] || '';
            return {
              name: country.name.common,
              code: `${root}${suffix}`,
              flag: country.flags.svg
            };
          })
          .filter((country: CountryCode) => country.code && country.code !== '+')
          .sort((a: CountryCode, b: CountryCode) => {
            const isUSA = (c: CountryCode) => c.name.includes('United States') || c.name === 'United States of America';
            const isIndia = (c: CountryCode) => c.name === 'India';
            
            if (isUSA(a)) return -1;
            if (isUSA(b)) return 1;
            if (isIndia(a)) return -1;
            if (isIndia(b)) return 1;
            
            const codeA = parseInt(a.code.replace('+', ''));
            const codeB = parseInt(b.code.replace('+', ''));
            return codeA - codeB;
          });

        setCountryCodes(codes);
      } catch (error) {
        console.error('Error fetching country codes:', error);
        setCountryCodes(getDefaultCountryCodes());
      } finally {
        setLoading(false);
      }
    };

    fetchCountryCodes();
  }, []);

  return { countryCodes, loading };
};

const getDefaultCountryCodes = (): CountryCode[] => [
  { name: 'United States', code: '+1', flag: '' },
  { name: 'Canada', code: '+1', flag: '' },
  { name: 'United Kingdom', code: '+44', flag: '' },
  { name: 'Australia', code: '+61', flag: '' },
  { name: 'India', code: '+91', flag: '' },
  { name: 'Germany', code: '+49', flag: '' },
  { name: 'France', code: '+33', flag: '' },
];
