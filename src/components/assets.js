export const MIA_TOKEN = 'SP466FNC0P7JWTNM2R9T199QRZN1MYEDTAR0KP27.miamicoin-token::miamicoin';
export const FARI_TOKEN = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.fari-token-mn::fari';
export const BANANA_TOKEN = 'SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.btc-monkeys-bananas::BANANA';
export const USDA_TOKEN = 'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.usda-token::usda';
export const DIKO_TOKEN = 'SP2C2YFP12AJZB4MABJBAJ55XECVS7E4PMMZ89YZR.arkadiko-token::diko';
export const XBTC_TOKEN =
  'SP3DX3H4FEYZJZ586MFBS25ZW3HZDMEW92260R2PR.Wrapped-Bitcoin::wrapped-bitcoin';
export const BOOMBOX = 'SP1QK1AZ24R132C0D84EEQ8Y2JDHARDR58R72E1ZW.boomboxes-cycle-20-v1::b-20';
export const THIS_IS_NUMBER_ONE =
  'SP3QSAJQ4EA8WXEDSRRKMZZ29NH91VZ6C5X88FGZQ.thisisnumberone-v2::my-nft';
export const CRASHPUNKS = 'SP3QSAJQ4EA8WXEDSRRKMZZ29NH91VZ6C5X88FGZQ.crashpunks-v2::crashpunks-v2';
export const SATOSHIBLES = 'SP6P4EJF0VG8V0RB3TQQKJBHDQKEF6NVRD1KZE3C.satoshibles::Satoshibles';
export const BITCOIN_MONKEYS =
  'SP2KAF9RF86PVX3NEE27DFV1CQX0T4WGR41X3S45C.bitcoin-monkeys::bitcoin-monkeys';

export function getAsset(type, trait) {
  return trait === MIA_TOKEN
    ? 'MIA'
    : trait === BOOMBOX
    ? 'Boombox [5th Edition]'
    : trait === FARI_TOKEN
    ? 'FARI'
    : trait === BANANA_TOKEN || type === 'banana'
    ? 'BANANA'
    : trait === SATOSHIBLES || type === 'satoshible'
    ? 'Satoshible'
    : trait === BITCOIN_MONKEYS || type === 'bitcoinmonkey'
    ? 'Bitcoin Monkeys'
    : trait === XBTC_TOKEN || type === 'xbtc'
    ? 'xBTC'
    : trait === USDA_TOKEN || type === 'usda'
    ? 'USDA'
    : trait === DIKO_TOKEN
    ? 'DIKO'
    : trait === THIS_IS_NUMBER_ONE
    ? '#1'
    : trait === CRASHPUNKS
    ? 'Crash Punk'
    : type.toUpperCase();
}

export function getAssetName(type, trait) {
  return type === 'nft' || type === 'stx-nft'
    ? 'NFT'
    : type === 'ft'
    ? 'tokens'
    : type === 'btc'
    ? 'Bitcoins'
    : 'Stacks';
}

export function getDeepLink(type, trait) {
  return trait === MIA_TOKEN
    ? type === 'stx-ft'
      ? '/stx-mia'
      : '/mia'
    : trait === FARI_TOKEN
    ? type === 'stx-ft'
      ? '/stx-fari'
      : '/fari'
    : trait === BANANA_TOKEN
    ? type === 'stx-ft'
      ? '/stx-banana'
      : '/banana'
    : trait === SATOSHIBLES
    ? type === 'stx-nft'
      ? '/stx-satoshible'
      : '/satoshible'
    : trait === BITCOIN_MONKEYS
    ? type === 'satoshible-nft'
      ? '/satoshible-bitcoinmonkey'
      : type === 'stx-nft'
      ? '/stx-bitcoinmonkey'
      : type === 'banana-nft'
      ? '/banana-bitcoinmonkey'
      : '/bitcoinmonkey'
    : trait === CRASHPUNKS
    ? type === 'stx-nft'
      ? '/stx-cp'
      : '/cp'
    : trait
    ? `/${type}/${trait}`
    : `/${type}`;
}
