var bubu ={ s64:"688",s65:"1160",s11:"582",s12:"483",s13:"3764",s14:"1524",s15:"2078",s21:"1658",s22:"959",s23:"1630",s31:"1008",s32:"8050",s33:"5319",s34:"7466",s35:"4286",s36:"3003",s37:"9516",s41:"6099",s42:"5491",s43:"4064",s44:"4428",s45:"3227",s46:"484",s50:"3083",s51:"8186",s52:"5056",s53:"5690",s54:"909",s61:"3105",s62:"3977",s63:"950" };
var title = "2004年教育程度-未上过学";
var unit = "人";
function getColor(d) {
    return d > 8000 ? '#800026' :
           d > 5500  ? '#BD0026' :
           d > 4200  ? '#E31A1C' :
           d > 3200  ? '#FC4E2A' :
           d > 2000   ? '#FD8D3C' :
           d > 1100  ? '#FEB24C' :
           d > 900   ? '#FED976' :
           d > 400   ? '#FFEDA0' :
           d < 0   ? '#000000' :
                      '#000000';
}
var vgrades = [400, 900, 1100, 2000, 3200, 4200, 5500, 8000];