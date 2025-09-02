import { useState, useEffect } from 'react';
import { mockInstrumentos } from './mockInstrumentos';

export function useGetInstruments() {
  const [instrumentos, setInstrumentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setInstrumentos(mockInstrumentos);
      } catch (error) {
        setErro(error);
      } finally {
        setCarregando(false);
      }
    }, 500);
  }, []);

  return { instrumentos, carregando, erro };
}
