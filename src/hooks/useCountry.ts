import { useState, useEffect, useCallback } from 'react';
import CountryService, { Country } from '@/services/CountryService';

export const useCountry = () => {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const countryService = CountryService.getInstance();

  useEffect(() => {
    const initializeCountry = async () => {
      try {
        setLoading(true);
        const country = await countryService.initialize();
        setCurrentCountry(country);
        console.log('Country initialized:', country);
      } catch (err) {
        setError('Failed to detect country');
        console.error('Error initializing country:', err);
        // Set a default country if initialization fails
        const defaultCountry = countryService.getSupportedCountries().find(c => c.code === 'US');
        if (defaultCountry) {
          setCurrentCountry(defaultCountry);
        }
      } finally {
        setLoading(false);
      }
    };

    initializeCountry();

    // Set up an interval to check for country changes
    const interval = setInterval(() => {
      const serviceCountry = countryService.getCurrentCountryDirect();
      if (serviceCountry && (!currentCountry || serviceCountry.code !== currentCountry.code)) {
        console.log('Country changed in service, updating hook:', serviceCountry);
        setCurrentCountry(serviceCountry);
        setUpdateTrigger(prev => prev + 1);
      }
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, [currentCountry]);

  const setCountry = useCallback((country: Country) => {
    console.log('Setting country in hook:', country);
    countryService.setCountry(country);
    setCurrentCountry(country);
    // Force a re-render by incrementing the trigger
    setUpdateTrigger(prev => prev + 1);
  }, [countryService]);

  const convertPrice = useCallback((usdPrice: number) => {
    return countryService.convertPrice(usdPrice);
  }, [countryService, updateTrigger]);

  const formatPrice = useCallback((usdPrice: number) => {
    // Ensure we always return a valid price string
    try {
      return countryService.formatPrice(usdPrice);
    } catch (error) {
      console.error('Error formatting price:', error);
      return `$${usdPrice}`;
    }
  }, [countryService, updateTrigger]);

  const getSupportedCountries = useCallback(() => {
    return countryService.getSupportedCountries();
  }, [countryService]);

  return {
    currentCountry,
    loading,
    error,
    setCountry,
    convertPrice,
    formatPrice,
    getSupportedCountries,
    updateTrigger, // Expose this to force re-renders
  };
}; 