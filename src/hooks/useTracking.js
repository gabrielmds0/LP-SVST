// src/hooks/useTracking.js

const UTM_PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 
  'utm_content', 'utm_term', 'gclid', 'fbclid'
];

// Captura UTMs da URL e salva no sessionStorage
export function captureUtmParams() {
  const params = new URLSearchParams(window.location.search);
  
  UTM_PARAMS.forEach(param => {
    const value = params.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });

  // Gera session_id se não existir
  if (!sessionStorage.getItem('session_id')) {
    sessionStorage.setItem('session_id', crypto.randomUUID());
  }
}

// Salva dados do formulário
export function saveFormData(data) {
  if (data.name) sessionStorage.setItem('name', data.name);
  if (data.email) sessionStorage.setItem('email', data.email);
  if (data.phone) sessionStorage.setItem('phone', data.phone);
}

// Constrói URL com todos os parâmetros
export function buildTrackedUrl(baseUrl) {
  if (!baseUrl) return null;
  
  try {
    const url = new URL(baseUrl);
    
    // Adiciona UTMs, IDs e dados do form
    [...UTM_PARAMS, 'session_id', 'name', 'email', 'phone'].forEach(key => {
      const value = sessionStorage.getItem(key);
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch (e) {
    console.error('Erro ao construir URL:', e);
    return baseUrl;
  }
}