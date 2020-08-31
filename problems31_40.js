test_31 = [
    "eat_cake('aprilmayjuneaprilmayjune')",
    "eat_cake('abcabcabcabcabcabcabcabcabcabc')",
    "eat_cake('hello')",
    "eat_cake('')",
    "eat_cake('cakecakecakecakecake')",
    "eat_cake('cakecakecakescakecakecakes')",
    "eat_cake('ccccccccccccccccc')",
    "eat_cake('hihihi')",
    "eat_cake('hi0hi0hi0')",
    "eat_cake('$#)$&#)#$)*@()')"
];
answer_31 = [2,10,1,1,5,2,17,3,3,1];

test_32 = [
    "all_even([-2,1,3,4,5,39,42])"
];
answer_32 = [[-2,4,42]];

test_33 = [
    'no_space(["hi","foo","what the"])'
];
answer_33 = [[["hi","foo"]]]

test_34 = [
    "all_positive([[1,3,6],[2,6,8],[5,8,24]])"
];
answer_34 = [[2,6,8]]

test_35 = [
    "same_vowels(['racecar', 'amalgam', 'oligopoly', 'zoom'])"
];
answer_35 = [['amalgam', 'zoom']]

test_36 = [
    "times_ten([2,5,9,10])"
];
answer_36 = [[20,50,90,100]]

test_37 = [
    "shift_right([{ name: '' }, 10, "left-side"])"
];
answer_37 = [["left-side", { name: '' }, 10]]

test_38 = [
    "no_vowels(['average', 'exceptional', 'amazing'])"
];
answer_38 = [['aeae', 'eeioa', 'aai']]

test_39 = [
    "double_matrix([[1,2,3],[4,5,6],[7,8,9]])"
];
answer_39 = [[[2,4,6],[8,10,12],[14,16,18]]]

test_40 = [
    "sum_nums([10,15,20,25,30,35])"
];
answer_40 = [135]

test_41 = [
    "product_matrix([[1, 2, 3],[4, 5],[6]])"
];
answer_41 = [720]

test_42 = [
    "objectify([['Thundercats', '80s'],['The Powerpuff Girls', '90s'],['Sealab 2021', '00s']])"
];
answer_42 = [{'Thundercats': '80s','The Powerpuff Girls': '90s','Sealab 2021':'00s'}]

test_43 = [
    "lucky_numbers([30, 48, 11, 5, 32])"
];
answer_43 = ['Your lucky numbers are: 30, 48, 11, 5, and 32']
