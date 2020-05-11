test_1 = [
    "sleep_in(true,false)",
    "sleep_in(false,false)",
    "sleep_in(false,true)",
    "sleep_in(true,true)",
    "sleep_in('true','false')",
    "sleep_in('','')",
    "sleep_in(10,11)"
];
answer_1 = [false,true,true,true,false,false];

test_2 = [
    "monkey_trouble(true,false)",
    "monkey_trouble(false,false)",
    "monkey_trouble(false,true)",
    "monkey_trouble(true,true)",
    "monkey_trouble('yes','no')",
    "monkey_trouble(100,[1,2])"
];
answer_2 = [false,true,false,true,false,false,false];

test_3 = [
    "string_times('bro',4)",
    "string_times('dude',2)",
    "string_times('yeah',0)",
    "string_times('o ',20)",
    "string_times('',100)"
];
answer_3 = ['brobrobrobro','dudedude','','o o o o o o o o o o o o o o o o o o o o ',''];

test_4 = [
    "front_times('brothers',4)",
    "front_times('dude',2)",
    "front_times('yeah',0)",
    "front_times('oo',3)",
    "front_times('',100)"
];
answer_4 = ['brobrobrobro','dudu','','oooooo',''];

test_5 = [
    "string_bits('brothers')",
    "string_bits('dude')",
    "string_bits('yeahyeahyeah')",
    "string_bits('oo')",
    "string_bits('')"
];
answer_5 = ['bohr','dd','yayaya','o',''];

test_6 = [
    "caughtSpeeding(60, false)",
    "caughtSpeeding(65, false)",
    "caughtSpeeding(65, true)",
    "caughtSpeeding(80, false)",
    "caughtSpeeding(85, false)",
    "caughtSpeeding(85, true)",
    "caughtSpeeding(70, false)",
    "caughtSpeeding(75, false)",
    "caughtSpeeding(75, true)",
    "caughtSpeeding(40, false)",
    "caughtSpeeding(40, true)",
    "caughtSpeeding(90, false)"
];
answer_6 = [0,1,0,1,2,1,1,1,1,0,0,2];


test_7 = [
    "fizz_buzz(15)",
    "fizz_buzz(33)",
    "fizz_buzz(0)",
    "fizz_buzz(-5)",
    "fizz_buzz(143)"
];
answer_7 = ["FizzBuzz","Fizz","FizzBuzz","Buzz","143!"];

test_8 = [
    "teaParty(6, 8)",
    "teaParty(3, 8)",
    "teaParty(20, 6)",
    "teaParty(12, 6)",
    "teaParty(11, 6)",
    "teaParty(11, 4)",
    "teaParty(4, 5)",
    "teaParty(5, 5)",
    "teaParty(6, 6)",
    "teaParty(5, 10)",
    "teaParty(5, 9)",
    "teaParty(10, 4)",
    "teaParty(10, 20)"
];
answer_8 = [1,0,2,2,1,0,0,1,1,2,1,0,2];

test_9 = [
    "blackjack(19, 21)",
    "blackjack(21, 19)",
    "blackjack(19, 22)",
    "blackjack(22, 19)",
    "blackjack(22, 50)",
    "blackjack(22, 22)",
    "blackjack(33, 1)",
    "blackjack(1, 2)",
    "blackjack(34, 33)",
    "blackjack(17, 19)",
    "blackjack(18, 17)",
    "blackjack(16, 23)",
    "blackjack(3, 4)",
    "blackjack(3, 2)",
    "blackjack(21, 20)"
];
answer_9 = [21,21,19,19,0,0,1,2,0,19,18,16,4,3,21];

test_10 = [
    "loneSum(1, 2, 3)",
    "loneSum(3, 2, 3)",
    "loneSum(3, 3, 3)",
    "loneSum(9, 2, 2)",
    "loneSum(2, 2, 9)",
    "loneSum(2, 9, 2)",
    "loneSum(2, 9, 3)",
    "loneSum(4, 2, 3)",
    "loneSum(1, 3, 1)"
];
answer_10 = [6,2,0,9,9,9,14,9,3];









