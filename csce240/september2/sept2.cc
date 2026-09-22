// Copyright 2026 taliaab
#include<iostream>
using std::cout;
using std::cin;
using std::endl;
#include<cmath>
#include<iomanip>
using std::setw;
// note: google style says use full path in the include statement
// we're going to ignore that cpplint error message
#include"myfunctions.h"  // NOLINT tells cpplint to ignore

// create a prototype for a function that will compute and return the average
// of two integer values

int main() {
    cout << "The average of 2 and 3 is " << avg(2, 3) << endl;
    return 0;
}








/*

int main() {
    cout << std::setprecision(2);
    cout << std:: setiosflags(std::ios::fixed);
    // double pow(double, double);
        cout << pow(2, 3) << endl;
        cout << pow(2, 1/3.0) << endl;

    // double sqrt(double);
    cout << sqrt(2) << endl;
    double x = 0.000108123;
    cout << x << endl;
    double y = 300526;
    cout << y << endl;
    cout << std::setprecision(8);
    cout << x << endl;
    int i1 = 10, i2 = -34581, i3 = 2;
    cout << "i1 =" << setw(7) << i1 << "\ni2 =" << setw(7) << i2 << "\ni3 =" << setw(7) << i3 << endl;
    return 0;
}

*/