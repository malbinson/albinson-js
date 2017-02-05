test_11 = [
    "firstLast6([1, 2, 6])",
    "firstLast6([6, 1, 2, 3])",
    "firstLast6([13, 6, 1, 2, 3])",
    "firstLast6([13, 6, 1, 2, 6])",
    "firstLast6([3, 2, 1])",
    "firstLast6([3, 6, 1])",
    "firstLast6([3, 6])",
    "firstLast6([6])",
    "firstLast6([3])",
    "firstLast6([5, 6])",
    "firstLast6([5, 5])",
    "firstLast6([1, 2, 3, 4, 6])",
    "firstLast6([1, 2, 3, 4])"
];
answer_11 = [true,true,false,true,false,false,true,true,false,true,false,true,false];

test_12 = [
    "has23([2, 5])",
    "has23([4, 3])",
    "has23([4, 5])",
    "has23([2, 2])",
    "has23([3, 2])",
    "has23([3, 3])",
    "has23([7, 7])",
    "has23([3, 9])",
    "has23([9, 5])"
];
answer_12 = [true,true,false,true,true,true,false,true,false];

test_13 = [
    "fix23([1, 2, 3])",
    "fix23([2, 3, 5])",
    "fix23([1, 2, 1])",
    "fix23([3, 2, 1])",
    "fix23([2, 2, 3])",
    "fix23([2, 3, 3])"
];
answer_13 = [[1, 2, 0],[2, 0, 5],[1, 2, 1],[3, 2, 1],[2, 2, 0],[2, 0, 3]]

test_14 = [
    "countYZ('fez day')",
    "countYZ('day fez')",
    "countYZ('day fyyyz')",
    "countYZ('day yak')",
    "countYZ('day:yak')",
    "countYZ('!!day--yaz!!')",
    "countYZ('yak zak')",
    "countYZ('DAY abc XYZ')",
    "countYZ('aaz yyz my')",
    "countYZ('y2bz')",
    "countYZ('zxyx')"
];
answer_14 = [2,2,2,1,0,0,0,2,3,1,0]

test_15 = [
    'endOther("Hiabc", "abc")',
    'endOther("AbC", "HiaBc")',
    'endOther("abc", "abXabc")',
    'endOther("Hiabc", "abcd")',
    'endOther("Hiabc", "bc")',
    'endOther("Hiabcx", "bc")',
    'endOther("abc", "abc")',
    'endOther("xyz", "12xyz")',
    'endOther("yz", "12xz")',
    'endOther("Z", "12xz")',
    'endOther("12", "12")',
    'endOther("ab", "ab12")',
    'endOther("ab", "12ab")',
    'endOther("abcXYZ", "abcDEF")'
];
answer_15 = [true,true,true,false,true,false,true,true,false,true,true,false,true,false];

test_16 = [
    'starOut("ab*cd")',
    'starOut("ab**cd")',
    'starOut("sm*eilly")',
    'starOut("sm*eil*ly")',
    'starOut("sm**eil*ly")',
    'starOut("sm***eil*ly")',
    'starOut("stringy*")',
    'starOut("*stringy")',
    'starOut("*str*in*gy")',
    'starOut("abc")',
    'starOut("a*b")',
    'starOut("ab")',
    'starOut("a*b")',
    'starOut("a")',
    'starOut("a*")',
    'starOut("*a")',
    'starOut("*")',
    'starOut("")'
];
answer_16 = ["ad","ad","silly","siy","siy","siy","string","tringy","ty","abc","","ab","","a","","","",""];

test_17 = [
    'getSandwich("breadjambread")',
    'getSandwich("xxbreadjambreadyy")',
    'getSandwich("xxbreadyy")',
    'getSandwich("xxbreadbreadjambreadyy")',
    'getSandwich("breadAbread")',
    'getSandwich("breadbread")',
    'getSandwich("abcbreaz")',
    'getSandwich("xyz")',
    'getSandwich("")',
    'getSandwich("breadbreaxbread")',
    'getSandwich("breaxbreadybread")',
    'getSandwich("breadbreadbreadbread")'
];
answer_17 = ["jam","jam","","breadjam","A","","","","","breax","y","breadbread"];

test_18 = [
    "canBalance([1, 1, 1, 2, 1])",
    "canBalance([2, 1, 1, 2, 1])",
    "canBalance([10, 10])",
    "canBalance([10, 0, 1, -1, 10])",
    "canBalance([1, 1, 1, 1, 4])",
    "canBalance([2, 1, 1, 1, 4])",
    "canBalance([2, 3, 4, 1, 2])",
    "canBalance([1, 2, 3, 1, 0, 2, 3])",
    "canBalance([1, 2, 3, 1, 0, 1, 3])",
    "canBalance([1])",
    "canBalance([1, 1, 1, 2, 1])"
];
answer_18 = [true,false,true,true,true,false,false,true,false,false,true];

test_19 = [
    'countClumps([1, 2, 2, 3, 4, 4])',
    'countClumps([1, 1, 2, 1, 1])',
    'countClumps([1, 1, 1, 1, 1])',
    'countClumps([1, 2, 3])',
    'countClumps([2, 2, 1, 1, 1, 2, 1, 1, 2, 2])',
    'countClumps([0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])',
    'countClumps([0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])',
    'countClumps([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2])',
    'countClumps([])'
];
answer_19 = [2,2,1,0,4,4,5,5,0];

test_20 = [
    'evenlySpaced(2, 4, 6)', 
    'evenlySpaced(4, 6, 2)', 
    'evenlySpaced(4, 6, 3)',
    'evenlySpaced(6, 2, 4)',
    'evenlySpaced(6, 2, 8)', 
    'evenlySpaced(2, 2, 2)', 
    'evenlySpaced(2, 2, 3)', 
    'evenlySpaced(9, 10, 11)',
    'evenlySpaced(10, 9, 11)',
    'evenlySpaced(10, 9, 9)',
    'evenlySpaced(2, 4, 4)', 
    'evenlySpaced(2, 2, 4)', 
    'evenlySpaced(3, 6, 12)',
    'evenlySpaced(12, 3, 6)'
];
answer_20 = [true,true,false,true,false,true,false,true,true,false,false,false,false,false];
