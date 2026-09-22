// Copyright 2026 taliaab
#include<iostream>
using std::cout;
using std::cin;
using std::endl;

int main() {

    int i = 1, j = 1;

// && if left is false, doesn't evaluate right side
// & if left is false, still evaluates right side
// || if left is true, doesn't evaluate right side
// | if left is true, still evaluates right siide

    if ( i == 0 & ++j == 2 )
        cout << "Got here" << endl;
    cout << "i = " << i << "\nj = " << j << endl;
    return 0;
}


    /*
    char another;
    int i = 1;
    while (another != 'n' ) { // while ( true ) {
        cout << "here's an int " << i++ << endl;
        cout << "Want another ";
        cin >> another;
        if ( another == 'n' )
            break;
        cout << "After the break!" << endl;
    }

    return 0;
}
*/

    /*
    // have the user enter a sentence and output the number of vowels they entered in that
    // sentence. e.g. hello, how are you?
    char c;
    int vowels = 0;
    do {
        cin >> c;   // c = cin.get();  = couold use this is we also neede the whitespace chars
        // cout << c << endl;
        if ( c >= 'A' && c <= 'Z' )
            c = 'a' + (c = 'A');
        if ( c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' )
            ++vowels;
    } while ( c != '.' && c != '!' && c != '?' );
    cout << "I counted " << vowels << " vowels" << endl;
    return 0;
}
*/


/*
    int answer;
    for ( int i = 0; i < 10; ++i ) {
        for ( int j = 0; j < 10; ++j ) {
                do {
                    cout << i << "*" << j << " = ";
                    cin >> answer;
                } while ( answer != i * j );
            }
        }
    return 0;
}
*/

    /*
    for ( int i = 0, j = 10; i < j; ++i, --j )
        cout << i << " * " << j << " = " << i * j << endl;

    return 0;
}
    */


    /*
    int i = 0;
    // note: ctrl+z to terminate a runaway program!
    while ( i < 10 ) {
        char c = 'a' + i;  // c has block scope, can only be seen inside of this block/loop
        cout << "i = " << i << << " and c = " << c << endl;
        ++i;
    }

    // variables declared in the first section of the for loop are only
    // visible within the loop
    for ( int j = 0; j < 10; ++j )
        cout << "j = " << j << endl;

    cout << "j = " << j << endl;
    char y_or_n;
    do {
        cout << "Enter y for yes or n for no. ";
        cin >> y_or_n;
    } while( y_or_n != 'y' &&  y_or_n != 'n' );

    cout << "At the end of the main, i = " << i << endl;
    cout << "At the end of the main, c = " << c << endl;
    return 0;
}
    */