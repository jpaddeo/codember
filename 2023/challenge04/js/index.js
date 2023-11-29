const FILES = `3n3E65A-nE65A
U6Z1WWc0LP-U6Z1c0LP
la6bqS-la6bqS
lKyxSLIEj-lKyxSLIEj
7HIKAPFYsK-7HIAPFYs
IfhDJjaZKJ-IfhDjaZK
1ynAjanFox-1yAjaFox
vi2Yqle-vi2Yqle
SXxyqnzER-SXxyqnzER
uWWKcD3b-uKcD3b
fxwzTMRB-fxwzTMRB
1f1dLc4p-fdLc4p
H0nY8w-H0nY8w
1tVQjP4-1tVQjP4
o8sRM-o8sRM
Hn2XWpspJq-Hn2XWsJq
88pauAKQ-pauAKQ
SF5yFf3uW-S5yf3uW
KOjaML-KOjaML
n1sjIG-n1sjIG
H3u4IEwR-H3u4IEwR
Er1iMVvtSb-Er1iMVvtSb
6bDBFweu3-6bDBFweu3
QMG2y-QMG2y
QqS8zu-QqS8zu
nWf2oHc2D-nWfoHcD
ywhoHTg-ywhoHTg
5rS6rC-5S6C
kZkSVr-ZSVr
KkGQLG-KkQL
J8X6VNHKk-J8X6VNHKk
hs5CsfYsN2-h5CfYN2
O2hrQ-O2hrQ
UU7HuFY-7HuFY
vSlgP-vSlgP
LO43CA6h-LO43CA6h
rADjgAXZbD-rjgXZb
219JS-219JS
Tw6jlpH-Tw6jlpH
ZmfY62-ZmfY62
Xh4lMhN-X4lMN
9wPi1-9wPi1
LC3ucqzRev-LC3ucqzRev
eqRKXqZzCH-eRKXZzCH
m9Rsx1-m9Rsx1
WKrbn0jLE-WKrbn0jLE
MsW8Mg-sW8g
OKdIPOl-KdIPl
N2ZA7H-N2ZA7H
F86afig-F86afig
BvEzt4ys-BvEzt4ys
wyAmFlx7m-wyAFlx7
73sBHIzZTU-73sBHIzZTU
E5liPXG3ZM-E5liPXG3ZM
wohjWqIEG-wohjWqIEG
Ajw0o0-Ajwo
V3ridipc-V3rdpc
ysikPhv-ysikPhv
iQSz654tNX-iQSz654tNX
qYSwYKifb-qSwKifb
W79773fSH-W93fSH
qNWDAUt-qNWDAUt
i8cDcz-i8Dz
DhJS4-DhJS4
j2TiHE-j2TiHE
m4fpbb2zI-m4fp2zI
bNirf51-bNirf51
aPNkUTXWs-aPNkUTXWs
EfsBW8-EfsBW8
safHshz-afHhz
RycVH06w7-RycVH06w7
IU4n2-IU4n2
lrXEc2N2u-lrXEcNu
bMcOtLT7-bMcOtLT7
hILDoXNIP-hLDoXNP
RoG5ra-RoG5ra
VAbQO-VAbQO
lgnMYBnI-lgMYBI
Y5TZwZfJ-Y5TwfJ
wTI9xRn-wTI9xRn
LEs3Fcj7M6-LEs3Fcj7M6
iccMmtrl-iMmtrl
g9R8e-g9R8e
XWJWnygqc-XJnygqc
QMLJAm1Kf-QMLJAm1Kf
EfA1kaddYq-EfA1kaYq
ieY5aGGV-ieY5aV
3lZn2-3lZn2
VTQVbY-TQbY
KxUMQYJENi-KxUMQYJENi
mPqYGQ-mPqYGQ
IyeJXmUd3c-IyeJXmUd3c
xXsymu5Av-xXsymu5Av
iJXvYyTcD-iJXvYyTcD
7VrbUTTKyi-7VrbUKyi
fXr9O6-fXr9O6
4VNq3-4VNq3
sDAec-sDAec
zOAGtZEc-zOAGtZEc
Cb2n1GNN-Cb2n1G
`;
const THIRTY_THREE_INDEX = 32;
const validFiles = [];

const checkValidFiles = (fileStr, fileChecksum) => {
  if (fileStr === fileChecksum) {
    return true;
  }
  const fileStrArr = fileStr.split('');
  const fileChecksumArr = fileChecksum.split('');
  return fileChecksumArr.every(
    (
      (i) => (v) =>
        (i = fileStrArr.indexOf(v, i) + 1)
    )(0)
  );
};

FILES.split('\n').forEach((file) => {
  if(file.length) {
    const [fileStr, fileChecksum] = file.split('-');
    if (checkValidFiles(fileStr, fileChecksum)) {
      validFiles.push(fileChecksum);
    }    
  }
});
console.log(`submit ${validFiles[THIRTY_THREE_INDEX]}`)