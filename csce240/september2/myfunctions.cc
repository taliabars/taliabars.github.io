// Copyright 2026 taliaab
// implementations for the functions with prototypes in myfunctions.h
#include"myfunctions.h"

// exam average function for CSCE240
double ExamAvg(double e1, double e2, double e3, double e4) {
    double lowest = e1;
    if ( e2 < lowest )
        lowest = e2;
    if ( e3 < lowest )
        lowest = e3
    if ( e4 < lowest )
        lowest = e4
    return (e1 + e2 + e3 + e4 - lowest) / 3.0;

}


double avg(int x, int y) {
    return (x + y) / 2.0;
}

double avg(double x, double y) {
    return ( x + y ) / 2.0;
}

char avg(char x, char y) {
    return (x + y) / 2.0;
}