import { useEffect, useState } from 'react';

/**
 * useMediaQuery - хук для определения совпадений с медиазапросами
 *
 * @param {string} query - строка медиа-запроса. Пример: '(max-width: 768px)'
 * @returns {boolean}
 */

export function useMediaQuery(query) {
  const getMatches = (query) => window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}
