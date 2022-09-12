require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember erosion give arch swift genuine'; 
let testAccounts = [
"0x3910ffca2195405dddda5c195d6698a8fbe2b81c6f0f719aa51b925736994b85",
"0x1b1717906b6aeb0d50aa43c4f2d0be5c01b095f48d9c5bc31ba12f4a3c65c727",
"0xf6b68e74807aa1d580ab93ecffbe0e8d0c636834f9e2f04c9d0338a97b176bd8",
"0xe4715b4d2f0c9b631d5c922f15360bc16c8cc238273315f88221e9d48e4a86fd",
"0x920d1ff3171ac3a08627b3080f4d85d30d77b36e5fe18dc3455c37fb8d947531",
"0xfbe334cf36f6151c3ca6b0d0b9b027f3750c81ea598bad733e1e792233509f78",
"0x884e8b77d7adb1a4a7e64c553e703511b03cdce151edd3b5343ef41829c9ba5c",
"0xc6333ec8f23466ce5565c3f0a5f5dca8041a7279efc7629f68d390fbe0da7628",
"0x737a091c7ccc905911fac98fb6e46632757f99b649b346feebe8a4d4a1a5d13b",
"0xdca5af62766b5d45d3420bff99c4a3d6b31c4a57e7b6e8308498b063e85dad46"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


