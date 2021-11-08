const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return correct form of firstName and lastName', () => {
    expect(formatFullname('lorem ipsum')).to.equal('Lorem Ipsum');
    expect(formatFullname('LOREM IPSUM')).to.equal('Lorem Ipsum');
    expect(formatFullname('lOrEm IpSuM')).to.equal('Lorem Ipsum');
  });

  it('should return an error if fullName is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if fullName is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(null)).to.equal('Error');
    expect(formatFullname(12345)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {} )).to.equal('Error');
  });

  it('should return an error if fullName is different than two strings separated by space', () => {
    expect(formatFullname('lorem ipsum ipsum')).to.equal('Error');
    expect(formatFullname('lorem')).to.equal('Error');
    expect(formatFullname('l o r e m')).to.equal('Error');
  });
}); 