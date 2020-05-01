const chains = new Map()

class Chain {
  constructor({
    name, type,
    port, networkMagic,
    pubkeyhash, privatekey, scripthash, witnesshrp, evm,
    genesis, lastPoWBlockHeight
  } = {}) {
    this.name = name
    this.type = type
    this.port = port
    this.networkMagic = networkMagic
    this.pubkeyhash = pubkeyhash
    this.privatekey = privatekey
    this.scripthash = scripthash
    this.witnesshrp = witnesshrp
    this.evm = evm
    this.genesis = genesis
    this.lastPoWBlockHeight = lastPoWBlockHeight
  }

  static add(options) {
    let chain = new Chain(options)
    chains.set(chain.name, chain)
  }

  static get(name) {
    return chains.get(name)
  }
}

Chain.add({
  name: 'mainnet',
  type: 'mainnet',
  port: 3666,
  networkMagic: Buffer.from([0xfd, 0x37, 0xa6, 0x23]),
  pubkeyhash: 0x19,
  privatekey: 0x80,
  scripthash: 0x32,
  witnesshrp: 'bc',
  evm: 0x21,
  genesis: Buffer.from('02000000010000000000000000000000000000000000000000000000000000000000000000ffffffff03510101ffffffff02002051a63c0100001976a914e1811289d37bee4da550fe9095a98a1517f2013388ac0000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf900000000', 'hex'),
  lastPoWBlockHeight: 5000
})

/*
Chain.add({
  name: 'testnet',
  type: 'testnet',
  port: 13888,
  networkMagic: Buffer.from([0x0d, 0x22, 0x15, 0x06]),
  pubkeyhash: 0x78,
  privatekey: 0xef,
  scripthash: 0x6e,
  witnesshrp: 'tq',
  evm: 0x5c,
  genesis: Buffer.from('0100000000000000000000000000000000000000000000000000000000000000000000006db905142382324db417761891f2d2f355ea92f27ab0fc35e59e90b50e0534edf5d2af59ffff001fc1257000e965ffd002cd6ad0e2dc402b8044de833e06b23127ea8c3d80aec9141077149556e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b4210000000000000000000000000000000000000000000000000000000000000000ffffffff000101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff420004bf91221d0104395365702030322c203230313720426974636f696e20627265616b732024352c30303020696e206c6174657374207072696365206672656e7a79ffffffff0100f2052a010000004341040d61d8653448c98731ee5fffd303c15e71ec2057b77f11ab3601979728cdaff2d68afbba14e4fa0bc44f2072b0b23ef63717f8cdfbe58dcd33f32b6afe98741aac00000000', 'hex'),
  lastPoWBlockHeight: 5000
})

Chain.add({
  name: 'regtest',
  type: 'regtest',
  port: 23888,
  networkMagic: Buffer.from([0xfd, 0xdd, 0xc6, 0xe1]),
  pubkeyhash: 0x78,
  privatekey: 0xef,
  scripthash: 0x6e,
  witnesshrp: 'qcrt',
  evm: 0x5c,
  genesis: Buffer.from('0100000000000000000000000000000000000000000000000000000000000000000000006db905142382324db417761891f2d2f355ea92f27ab0fc35e59e90b50e0534edf5d2af59ffff7f2011000000e965ffd002cd6ad0e2dc402b8044de833e06b23127ea8c3d80aec9141077149556e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b4210000000000000000000000000000000000000000000000000000000000000000ffffffff000101000000010000000000000000000000000000000000000000000000000000000000000000ffffffff420004bf91221d0104395365702030322c203230313720426974636f696e20627265616b732024352c30303020696e206c6174657374207072696365206672656e7a79ffffffff0100f2052a010000004341040d61d8653448c98731ee5fffd303c15e71ec2057b77f11ab3601979728cdaff2d68afbba14e4fa0bc44f2072b0b23ef63717f8cdfbe58dcd33f32b6afe98741aac00000000', 'hex'),
  lastPoWBlockHeight: Infinity
})
*/
module.exports = Chain
