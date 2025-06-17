// src/iziToast.d.ts
declare var iziToast: {
    show: (options: {
      title?: string;
      message?: string;
      position?: string;
      timeout?: number;
      color?: string;
      [key: string]: any; // Allows other options
    }) => void;
  };
  