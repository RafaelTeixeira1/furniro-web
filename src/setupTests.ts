import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Adiciona TextEncoder global apenas se não existir
if (typeof globalThis.TextEncoder === 'undefined') {
  globalThis.TextEncoder = TextEncoder;
}

if (typeof globalThis.TextDecoder === 'undefined') {
  // @ts-expect-error forçando atribuição pois TypeScript já declara TextDecoder no DOM
  globalThis.TextDecoder = TextDecoder;
}

if (!HTMLElement.prototype.scrollIntoView) {
  HTMLElement.prototype.scrollIntoView = jest.fn();
}
