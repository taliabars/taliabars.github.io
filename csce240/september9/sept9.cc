// Copyright 2026 taliaab
#include<iostream>
usind std::cout;
using std::cin;
using std::endl;
// ignore cpplint arror about path
#include"myfunctions.h". // NOLINT

int main() {
    cout << ExamAvg(100, 0, 100, 100) << endl;
    cout << ExamAvg(100, 100, 99) << endl;
    return 0;
}

    /*
    cout << avg(1, 2) << endl;
    int x = 5, z = 12;
    cout << avg(x, z) << endl;
    cout << avg(5.9, 6.9 ) << endl;
    // without the .0 on three, the call below is ambiguous
    // avg(double, int) doesn't exist
    cout << avg( avg(1, 2), 3) << endl;
    cout << avg( 'a', 'c' ) << endl;
    return 0;
}
    */