interface Country {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  exchangeRate: number;
}

interface CurrencyData {
  [key: string]: {
    name: string;
    symbol: string;
    rate: number;
  };
}

class CountryService {
  private static instance: CountryService;
  private currentCountry: Country | null = null;
  private supportedCountries: Country[] = [
    { code: 'US', name: 'United States', currency: 'USD', symbol: '$', exchangeRate: 1 },
    { code: 'IN', name: 'India', currency: 'INR', symbol: '₹', exchangeRate: 83.5 },
    { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', exchangeRate: 0.79 },
    { code: 'CA', name: 'Canada', currency: 'CAD', symbol: 'C$', exchangeRate: 1.35 },
    { code: 'AU', name: 'Australia', currency: 'AUD', symbol: 'A$', exchangeRate: 1.52 },
    { code: 'EU', name: 'European Union', currency: 'EUR', symbol: '€', exchangeRate: 0.92 },
  ];

  private constructor() {
    this.loadCountryFromStorage();
  }

  public static getInstance(): CountryService {
    if (!CountryService.instance) {
      CountryService.instance = new CountryService();
    }
    return CountryService.instance;
  }

  private async detectCountryFromIP(): Promise<Country | null> {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      const countryCode = data.country_code;
      const detectedCountry = this.supportedCountries.find(
        country => country.code === countryCode
      );

      if (detectedCountry) {
        return detectedCountry;
      }

      // If detected country is not in our list, default to US
      return this.supportedCountries.find(country => country.code === 'US') || null;
    } catch (error) {
      console.error('Error detecting country from IP:', error);
      return null;
    }
  }

  private loadCountryFromStorage(): void {
    try {
      const storedCountry = localStorage.getItem('selectedCountry');
      if (storedCountry) {
        const parsedCountry = JSON.parse(storedCountry);
        // Validate that the stored country has all required fields
        if (parsedCountry && parsedCountry.code && parsedCountry.symbol) {
          // Find the country in our supported list to ensure we have the correct data
          const validCountry = this.supportedCountries.find(c => c.code === parsedCountry.code);
          if (validCountry) {
            this.currentCountry = validCountry;
          } else {
            console.warn('Stored country not found in supported list, using default');
            this.currentCountry = null;
          }
        } else {
          console.warn('Invalid stored country data, using default');
          this.currentCountry = null;
        }
      }
    } catch (error) {
      console.error('Error loading country from storage:', error);
      this.currentCountry = null;
    }
  }

  private saveCountryToStorage(country: Country): void {
    try {
      localStorage.setItem('selectedCountry', JSON.stringify(country));
    } catch (error) {
      console.error('Error saving country to storage:', error);
    }
  }

  public async initialize(): Promise<Country> {
    if (!this.currentCountry) {
      // Try to detect country from IP
      const detectedCountry = await this.detectCountryFromIP();
      if (detectedCountry) {
        this.setCountry(detectedCountry);
      } else {
        // Fallback to US
        const defaultCountry = this.supportedCountries.find(country => country.code === 'US')!;
        this.setCountry(defaultCountry);
      }
    }
    return this.currentCountry!;
  }

  public setCountry(country: Country): void {
    console.log('CountryService: Setting country to:', country);
    this.currentCountry = country;
    this.saveCountryToStorage(country);
    console.log('CountryService: Country set successfully, currentCountry is now:', this.currentCountry);
  }

  public resetCountry(): void {
    console.log('Resetting country');
    this.currentCountry = null;
    localStorage.removeItem('selectedCountry');
  }

  public getCurrentCountry(): Country | null {
    console.log('CountryService getCurrentCountry called, currentCountry:', this.currentCountry);
    return this.currentCountry;
  }

  public getCurrentCountryDirect(): Country | null {
    return this.currentCountry;
  }

  public getSupportedCountries(): Country[] {
    return this.supportedCountries;
  }

  public convertPrice(usdPrice: number): { amount: number; symbol: string; currency: string } {
    if (!this.currentCountry) {
      return { amount: usdPrice, symbol: '$', currency: 'USD' };
    }

    const convertedAmount = usdPrice * this.currentCountry.exchangeRate;
    return {
      amount: convertedAmount,
      symbol: this.currentCountry.symbol || '$',
      currency: this.currentCountry.currency || 'USD'
    };
  }

  public formatPrice(usdPrice: number): string {
    console.log('formatPrice called with:', usdPrice);
    console.log('currentCountry:', this.currentCountry);
    
    if (!this.currentCountry) {
      console.log('No current country, returning USD format');
      return `$${usdPrice}`;
    }
    
    const converted = this.convertPrice(usdPrice);
    console.log('Converted price:', converted);
    
    // Ensure symbol is never undefined
    const symbol = converted.symbol || '$';
    console.log('Using symbol:', symbol);
    
    if (converted.currency === 'INR') {
      const result = `${symbol}${Math.round(converted.amount).toLocaleString('en-IN')}`;
      console.log('INR result:', result);
      return result;
    } else if (converted.currency === 'GBP') {
      const result = `${symbol}${converted.amount.toFixed(2)}`;
      console.log('GBP result:', result);
      return result;
    } else if (converted.currency === 'EUR') {
      const result = `${symbol}${converted.amount.toFixed(2)}`;
      console.log('EUR result:', result);
      return result;
    } else {
      const result = `${symbol}${Math.round(converted.amount).toLocaleString()}`;
      console.log('Default result:', result);
      return result;
    }
  }

  public async updateExchangeRates(): Promise<void> {
    try {
      // You can integrate with a real exchange rate API here
      // For now, we'll use static rates defined in the constructor
      console.log('Exchange rates updated');
    } catch (error) {
      console.error('Error updating exchange rates:', error);
    }
  }
}

export default CountryService;
export type { Country }; 