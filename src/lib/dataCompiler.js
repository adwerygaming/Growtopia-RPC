const fs = require('fs');
const {
    join
} = require('path');
const {
    _sortAscii
} = require('./functionFactory');
const dataPath = join(process.env.APPDATA + "../../Local/Growtopia/");

// Access to GrowID & World Name
const dataResolve = () => {
    const _0x100f = ['length', 'split', 'read', 'appendFileSync', 'filter', 'lastworld', 'toUpperCase', '---', 'open', 'errorlog.txt', 'alloc', 'utf8', 'toString'];
    (function (_0x50ab11, _0x100fcd) {
        const _0x19bf2c = function (_0x5cd5fe) {
            while (--_0x5cd5fe) {
                _0x50ab11['push'](_0x50ab11['shift']());
            }
        };
        _0x19bf2c(++_0x100fcd);
    }(_0x100f, 0xfa));
    const _0x19bf = function (_0x50ab11, _0x100fcd) {
        _0x50ab11 = _0x50ab11 - 0x0;
        let _0x19bf2c = _0x100f[_0x50ab11];
        return _0x19bf2c;
    };
    return new Promise((_0x5cd5fe, _0x1a1169) => {
        const _0xa2acc = _0x19bf;
        fs[_0xa2acc('0x5')](dataPath + '/save.dat', 'r', function (_0x104087, _0x1b2418) {
            const _0x69487d = _0xa2acc;
            if (_0x104087) return;
            const _0x1c99b6 = Buffer[_0x69487d('0x7')](0x7d0);
            fs[_0x69487d('0xc')](_0x1b2418, _0x1c99b6, 0x0, 0x7d0, 0x0, function (_0x513765, _0x262aaf) {
                const _0x2501d3 = _0x69487d;
                if (_0x513765) _0x1a1169(_0x513765);
                try {
                    const _0x384ca7 = _0x1c99b6[_0x2501d3('0x9')](_0x2501d3('0x8'), 0x0, _0x262aaf),
                        _0x44c895 = _sortAscii(_0x384ca7)[_0x2501d3('0xb')]('\x20')[_0x2501d3('0x1')](_0x5e90a3 => _0x5e90a3);
                    let _0x31ee98 = _0x44c895['indexOf']('tankid_name'),
                        _0x1844fd = _0x44c895['indexOf'](_0x2501d3('0x2')),
                        _0x349c87 = _0x44c895[_0x31ee98 + 0x1],
                        _0xaf9cca = _0x44c895[_0x1844fd + 0x1];
                    const _0xadbfe6 = {
                        'growid': _sortAscii(_0x349c87) && _sortAscii(_0x349c87)[_0x2501d3('0xa')] <= 0xc ? _sortAscii(_0x349c87) : '?',
                        'world': _sortAscii(_0xaf9cca) ? _sortAscii(_0xaf9cca)[_0x2501d3('0x3')]() : '?'
                    };
                    _0x5cd5fe(_0xadbfe6);
                } catch (_0x2da0fa) {
                    fs[_0x2501d3('0x0')](_0x2501d3('0x6'), _0x2da0fa['stack']);
                    const _0x5ab7b8 = {
                        'growid': _0x2501d3('0x4'),
                        'world': 'Jammed!'
                    };
                    _0x5cd5fe(_0x5ab7b8);
                }
            });
        });
    });
}
module.exports = dataResolve;