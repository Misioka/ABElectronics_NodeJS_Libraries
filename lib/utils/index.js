let rpio = {}
rpio.i2cBegin = () => {}
rpio.i2cSetSlaveAddress = (address) => {}
rpio.i2cWrite = (txbuf) => {}
rpio.i2cRead = (rxbuf) => {}

if (['production', 'test'].includes(process.env.NODE_ENV)) {
  rpio = require('rpio')
}

const updateByte = (oldByte, bit, value) => {
  // <summary>
  // Internal function for updating a single bit within a letiable
  // </summary>
  // <param name="oldByte" type="Number">Variable to be updated</param>
  // <param name="bit" type="Number">The location of the bit to be changed</param>
  // <param name="value" type="Boolean">The new value for the bit.  true or false</param>
  let newByte = 0
  if (value === false) {
    newByte = oldByte & ~(1 << bit)
  } else {

    newByte = oldByte | 1 << bit
  }
  return (newByte)
}

const checkBit = (num, bit) => {
  // <summary>
  // Internal function for checking the status of a bit within a letiable
  // </summary>
  // <param name="num" type="Number">Variable to be checked</param>
  // <param name="bit" type="Number">The location of the bit to be checked</param>
  // <returns type="Number"></returns>
  return ((num >> bit) % 2 != 0)
}

export default {
  updateByte,
  checkBit,
  rpio
}
