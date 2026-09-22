// Copyright 2026 taliaab
// this text file is a header file, it has a .h file extension
// we will INCLUDE header files (we won't compile them)
// we will COMPILE source files (we won't include them)

// ignore cpplint error message about using the full path below

// #ifndef, #define, #endif are our header guards
// ignore cpplint error message about using full path
#ifndef MYFUNCTIONS_H_. // NOLINT
#define MYFUNCTIONS_H_. // NOLINT

double ExamAvg(double e1, double e2, double e3, double e4)

double avg(int, int);
// signature avg(int, int)
// prototype double avg (int, int);
// parameters int, int
// return type double

// function to compute the average of two real numbers
double avg(double, double);  // here we're overloading the avg function
                            // multiple functions with the same name
                            // but distinct parameter lists

char avg(char, char);



#endif  // NOLINT