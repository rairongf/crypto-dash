import { atom } from "recoil";

export const coinMarketDataState = atom({
  key: 'coinMarketDataState',
  default: {
    current_price: {
      brl: 0,
      usd: 0
    },
    high_24h: {
      brl: 0,
      usd: 0
    },
    low_24h: {
      brl: 0,
      usd: 0
    },
  }
});