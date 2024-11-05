export const setTheme = (newTheme) => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  };
  
  export const initializeTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');
      setTheme(theme);
    }
  };
  