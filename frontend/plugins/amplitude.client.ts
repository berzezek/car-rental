import { defineNuxtPlugin } from '#app';
// @ts-ignore
import * as amplitude from '@amplitude/analytics-browser';

export default defineNuxtPlugin(() => {
  // Инициализируем Amplitude
  amplitude.init('db12e19c041cecdc404be0b39f90f864', {"autocapture":true});

  return {
    provide: {
      amplitude,
    },
  };
});
