require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stove crawl noise exchange hidden entry borrow gas'; 
let testAccounts = [
"0xdb78ae575e2e6d5c2e2cc3ad4ba6b9f0121be97922931fddc5e42cfc1617439d",
"0x89c3bfc07b4200f3a3810f84c7c8a2b8452e60455cd8b768d622efb2f085dee7",
"0xd630b658187a752c0b0f20333647f8c5c3e7d7e2e54d7488bd16b517ddfd8235",
"0xf8807861bde53ce2d5e81698839c0056e3315c94444b5d7c7917a626b60de339",
"0x4286ef39580c898b667beefa58a77cdebdccfda0dc63495059ce93eb4dccff38",
"0x1d7337f639025e7f5ffa7b258ddc773caf0c57a20c57db0152c243da1bac00bb",
"0xe6ed7d38025c15d02937146c39711d1b949813b6fa46f44dd9828c2499a58494",
"0x4fa37e2d7ae2e791e033343cd0f2662ab2cf47f0fd3001c8ceff7d8281034186",
"0xe339eed6bfd26c5595e49289c5dfc7ebeaced349074c8b323c834830881ea761",
"0xaef2cab4108507ee44193ce24b4cbd9e33a872463e12ea0020b35db4cd3b4bc5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
