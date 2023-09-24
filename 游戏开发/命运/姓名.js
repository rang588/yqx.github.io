let xingming = document.querySelector('#姓名')
let nameset = []//完整姓名

let nameA1 = '楚初玄月蓝晨妄风阳巫道燧姬柳岩燕竺景祝冷洛苏萧叶萝季吕戚云武关蒙伊钟'//姓
let nameA2 = ['南宫', '欧阳', '涂山', '慕容', '公孙', '上官', '拓跋', '司马', '太史', '东方', '诸葛', '端木', '司空']

let nameB1 = '香雨玉慈灵桐月琪道婕轩凤一月莉韵云梦冥明玄崇石达平真征正政步意义寒易飞羽载初保腾琊鹤兰熠融渊'//名
let nameB2 = ['梦娇', '灵儿', '旬邑', '轩辕', '斩君', '香萌', '雨洁', '雨桐', '水月', '相如', '无双', '长风', '旭阳', '梦诗',
'夏禾','幼微','梦竹','梦珞','归真','玉辞','无忧','淮俞'
]


function getname() {
  let length1 = [1, 2][Math.floor(Math.random() * 2)]
  let length2 = [1, 2][Math.floor(Math.random() * 2)]


  if (length1 == 1) nameset.push(nameA1[Math.floor(Math.random() * nameA1.length)])
  else if (length1 == 2) nameset.push(nameA2[Math.floor(Math.random() * nameA2.length)])


  if (length2 == 1) nameset.push(nameB1[Math.floor(Math.random() * nameB1.length)])
  else if (length2 == 2) nameset.push(nameB2[Math.floor(Math.random() * nameB2.length)])




  xingming.innerHTML = `姓名: ${nameset.join('')}`//''表示以什么分隔元素

}
