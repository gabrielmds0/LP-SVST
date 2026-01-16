import { useState, useEffect } from 'react';

// ID da planilha e GID da aba que contém apenas o Checkout
const SPREADSHEET_ID = '1MCmHqHMDHV4RT1EFL8LLaLeqnpKCWGVvwiCmBA9WVhs';
const SHEET_GID = '1674750967'; // GID da aba com o checkout
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${SHEET_GID}`;

// URL de fallback caso a planilha esteja vazia ou ocorra erro
const FALLBACK_CHECKOUT_URL = 'https://clkdmg.site/pay/formacao-em-paciente-grave-lp';

/**
 * Função para parsear CSV manualmente (sem dependências externas)
 * Converte texto CSV em objeto chave-valor baseado nas colunas A e B
 */
function parseCSV(csvText) {
  const result = {};
  
  // Divide o texto em linhas, removendo linhas vazias
  const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
  
  for (const line of lines) {
    // Regex para capturar valores CSV (considera aspas e vírgulas dentro de aspas)
    const match = line.match(/^"?([^",]*)"?,\s*"?([^"]*)"?/);
    
    if (match && match[1] && match[2]) {
      const key = match[1].trim();
      const value = match[2].trim();
      
      // Ignora linhas de instrução ou vazias
      if (key && value && !key.toLowerCase().includes('preencher')) {
        result[key] = value;
      }
    }
  }
  
  return result;
}

export function useGoogleSheetsCheckout() {
  const [checkoutUrl, setCheckoutUrl] = useState(FALLBACK_CHECKOUT_URL);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(CSV_URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        
        if (!csvText || csvText.length === 0) {
          console.warn("Sheet is empty, using fallback checkout URL");
          setCheckoutUrl(FALLBACK_CHECKOUT_URL);
          setLoading(false);
          return;
        }

        const parsedData = parseCSV(csvText);
        
        // Busca o valor de Checkout na planilha
        if (parsedData.Checkout && parsedData.Checkout.startsWith('http')) {
          setCheckoutUrl(parsedData.Checkout);
        } else {
          console.warn("No valid checkout URL found, using fallback");
          setCheckoutUrl(FALLBACK_CHECKOUT_URL);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching checkout URL:', err);
        setError('Failed to fetch checkout URL');
        setCheckoutUrl(FALLBACK_CHECKOUT_URL);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { checkoutUrl, loading, error };
}

export default useGoogleSheetsCheckout;
