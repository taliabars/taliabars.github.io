// Copyright 2026 taliaab
#include<iostream>
using std::cout;
using std::cin;
using std::endl;

int main() {
    int pets;
    cout << "Hi, enter the number of pets you have. ";
    cin >> pets;
    cout << "Wow! " << pets << " pet" << (pets == 1 ? "" : "s") << " is a lot." << endl;

    int age;
    cout << "Enter your age ";
    cin >> age;
    if ( 14 <= age && age <= 29 ) {
        cout << "You're Gen Z!" << endl;
     } else {
        cout << "Bruh, ";
        cout << "You're not a Gen Zer" << endl;
     }

     char letter;
     cout << "What's your favorite letter ";
     cin >> letter;

     switch(letter) {
        case 'a':
        case 'A':
        cout << "That's Talia's favorite too!";
        break;
        case 'y':
        case 'Y':
        cout << "That's Matthew's favorite too!";
        break;
        default:
        cout << "Talia and Matthew don't like your letter.";
     }
     cout << endl;
    return 0;
}