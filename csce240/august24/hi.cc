// Copyright 2026 taliaab
#include<iostream>
// using namespace std;  // DON'T do this!
using std::cout;
using std::endl;
using std::cin;

int main()  {
    // we'll put an endl on the end of our very last output statement
    // in our code
    cout << "Hi there world" << endl;

    cout << sizeof(int) << endl;

int i = 1, j = 5;
cout << "++i = " << ++i << " j++ = " << j++ << endl;
cout << "after the statement above i = " << i << " and j = " << j << endl;
int x, y = 11, z = 15;
x = --y * z;
cout << "x = " << x << "\ny = " << y << "\nz = " << z << endl;

z = 15;
// in the division statement below, z will be implicitly cast as
// a double
cout << z << "/ 2 = " << z / 2.0 << endl;
// explicitly casting z as a double (using static cast) and then y
// is implicitly cast as a double
cout << "z / y = " << static_cast<double>(z) / y << endl;


    int age1, age2, age3;
    cout << "Enter three ages ";
    cin >> age1 >> age2 >> age3;
    cout << "ages = " << age1 << ", " << age2 << ", and " << age3 << endl;
    return 0;
}